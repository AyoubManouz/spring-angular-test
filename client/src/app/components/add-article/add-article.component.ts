import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { FormValidators } from 'src/app/validators/form-validators';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articleFormGroup: FormGroup;
  imageURL: string;

  imageFile: {link: string, file: any, name: string};

  constructor(private articleService: ArticleService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.articleFormGroup = this.formBuilder.group({
      picture: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        FormValidators.notOnlyWhitespace
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.pattern('[0-9]*.[0-9]*')
      ]),
    })
  }

  imagesPreview(event) {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();

        reader.onload = (_event: any) => {
            this.imageFile = {
                link: _event.target.result,
                file: event.srcElement.files[0],
                name: event.srcElement.files[0].name
            };
        };
        reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(): void {
    if(this.articleFormGroup.invalid)
     this.articleFormGroup.markAllAsTouched();
    else {
      this.articleFormGroup.get('picture').setValue("assets/pictures/articles/" + this.imageFile.name);
      this.articleService.addArticle(this.articleFormGroup.value).subscribe((data) => {
        this.router.navigate(['/articles']);
      });
    }
  }

  get picture() {
    return this.articleFormGroup.get('picture');
  }

  get name() {
    return this.articleFormGroup.get('name');
  }

  get price() {
    return this.articleFormGroup.get('price');
  }

}
