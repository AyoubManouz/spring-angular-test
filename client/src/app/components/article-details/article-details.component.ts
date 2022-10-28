import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/common/article';
import { ArticleService } from 'src/app/services/article.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article = new Article();

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleArticleDetails();
    });
  }

  handleArticleDetails() {
    const id: number = +this.route.snapshot.paramMap.get('id');

    this.articleService.getArticle(id).subscribe(
      (data) => {
        this.article = data;
      },
      (error) => {
        this.router.navigate(['/orders']);
      }
    );
  }

  addOrRemoveArticle(article: Article) {
    this.cartService.addOrRemoveArticle(article);
  }

  isExistedInCart(article: Article): boolean {
    return this.cartService.existedArticle(article) !== undefined;
  }

}
