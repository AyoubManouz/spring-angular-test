import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/common/article';
import { Order } from 'src/app/common/order';
import { ArticleService } from 'src/app/services/article.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css'],
})
export class EditOrderComponent implements OnInit {
  order: Order = new Order();
  totalPrice: number = 0.0;

  articles: Article[] = [];

  constructor(
    private orderService: OrderService,
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleOrderDetails();
    });
  }

  handleOrderDetails() {
    const orderId: number = +this.route.snapshot.paramMap.get('id');

    this.orderService.getOrder(orderId).subscribe(
      (data) => {
        this.order = data;
        this.computeTotal();
      },
      (error) => {
        this.cancel();
      }
    );

    this.articleService.getArticleList().subscribe((data) => {
      this.articles = data;
    });
  }

  editOrder() {
    this.orderService.editOrder(this.order).subscribe(
      data => this.cancel()
    )
  }

  cancel() {
    this.router.navigate(['/orders']);
  }

  addOrRemoveArticle(article: Article) {
    let existedArticle: Article = this.existedInOrder(article);

    if (existedArticle === undefined) {
      this.order.articles.push(article);
    } else {
      this.order.articles.splice(
        this.order.articles.indexOf(existedArticle),
        1
      );
    }

    this.computeTotal();
  }

  otherArticles(): Article[] {
    return this.articles.filter((article) => !this.existedInOrder(article));
  }

  existedInOrder(article: Article): Article {
    return this.order.articles.find((item) => item.id === article.id);
  }

  computeTotal() {
    this.totalPrice = this.order.articles
      .map((article) => article.price)
      .reduce((a, b) => a + b, 0);
  }
}
