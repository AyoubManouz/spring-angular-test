import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Article } from '../common/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = environment.apiUrl +  'articles';

  constructor(private httpClient: HttpClient, private router: Router) { }

  getArticleList(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl);
  }

  addArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.baseUrl, article)
    .pipe(catchError(this.handleError));
  }

  getArticle(id: number): Observable<Article> {
    return this.httpClient.get<Article>(this.baseUrl + '/' + id)
    .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
