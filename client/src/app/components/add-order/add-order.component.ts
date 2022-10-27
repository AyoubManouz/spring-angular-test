import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/common/order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  order: Order = new Order();
  totalPrice: number = 0;

  constructor(private orderService: OrderService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    if(this.cartService.articles.length === 0) {
      this.router.navigate(['/articles'])
    }
    this.order.reference = (Math.random() * 10).toString(36).replace('.', '');
    this.order.date = new Date;
    this.order.articles = this.cartService.articles;
    this.totalPrice = this.order?.articles?.map((article) => article.price).reduce((a, b) => a + b, 0);
  }

  submitOrder() {
    this.orderService.addOrder(this.order).subscribe(data => {
      this.cartService.reset();
      this.orderService.computeTotalOrders();
      this.router.navigate(['/articles']);
    });
  }
}
