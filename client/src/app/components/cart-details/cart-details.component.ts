import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/common/article';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  articles: Article[] = [];
  totalPrice: number = 0;
  totalArticles: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {
    this.articles = this.cartService.articles;
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    this.cartService.totalArticles.subscribe(
      data => this.totalArticles = data
    );
    this.cartService.computeCartTotals();
  }

  addOrRemoveArticle(article: Article) {
    this.cartService.addOrRemoveArticle(article);
  }

}
