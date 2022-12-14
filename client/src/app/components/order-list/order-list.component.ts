import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/common/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.listOrders();
  }

  listOrders() {
    this.orderService.getOrderList().subscribe((data) => {
      this.orders = data.reverse();
    });
  }

  getOrderTotalPrice(orderId: string): number {
    return this.orders
      .find((order) => order.id === orderId)
      ?.articles?.map((article) => article.price)
      .reduce((a, b) => a + b, 0);
  }
}
