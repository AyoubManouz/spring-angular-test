import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../common/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'http://localhost:8080/api/articles';

  constructor(private httpClient: HttpClient) { }

  getArticleList(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.baseUrl).pipe(
      map(response => response)
    );
  }
}
