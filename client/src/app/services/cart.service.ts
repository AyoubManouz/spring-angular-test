import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from '../common/article';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  articles: Article[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalArticles: Subject<number> = new Subject<number>();

  constructor(private orderService: OrderService) {}

  addOrRemoveArticle(article: Article) {
    let existedArticle: Article = this.existedArticle(article);

    if(existedArticle === undefined) {
      this.articles.push(article);
    } else {
      this.articles.splice(this.articles.indexOf(existedArticle), 1);
    }

    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalPriceValue: number = this.articles.map(item => item.price).reduce((a, b) => a + b, 0);
    let totalArticlesValue: number = this.articles.length;

    // publish the new values to all subscribers
    this.totalPrice.next(totalPriceValue);
    this.totalArticles.next(totalArticlesValue);
  }

  existedArticle(article: Article): Article {
    return this.articles.find((item) => item.id === article.id);
  }
}
