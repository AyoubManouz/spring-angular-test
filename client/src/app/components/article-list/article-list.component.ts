import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/common/article';
import { ArticleService } from 'src/app/services/article.service';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private cartService: CartService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.loginService.isUserLoggedIn())
      this.router.navigate(['/articles']);
    this.listArticles();
  }

  listArticles() {
    this.articleService.getArticleList().subscribe((data) => {
      this.articles = data.reverse();
    });
  }

  addOrRemoveArticle(article: Article) {
    this.cartService.addOrRemoveArticle(article);
  }

  isExistedInCart(article: Article): boolean {
    return this.cartService.existedArticle(article) !== undefined;
  }
}
