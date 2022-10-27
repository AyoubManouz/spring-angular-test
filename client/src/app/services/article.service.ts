import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Article } from '../common/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = environment.apiUrl +  'articles';

  constructor(private httpClient: HttpClient, private router: Router) { }

  getArticleList(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  addArticle(article: Article) {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    this.httpClient.post<any>(this.baseUrl, article, { headers }).subscribe(data => {
      this.router.navigate(['/articles'])
    });
  }
}
