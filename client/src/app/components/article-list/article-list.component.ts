import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/common/article';
import { ArticleService } from 'src/app/services/article.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService, private cartService: CartService) { }

  ngOnInit(): void {
    this.listArticles();
  }

  listArticles() {
    this.articleService.getArticleList().subscribe(
      data => {
        this.articles = data;
      }
    )
  }

  addOrRemoveArticle(article: Article) {
    this.cartService.addOrRemoveArticle(article);
  }

  isExistedInCart(article: Article): boolean {
    return this.cartService.existedArticle(article) !== undefined;
  }
}
