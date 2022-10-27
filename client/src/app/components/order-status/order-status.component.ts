import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  totalOrders: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.listOrders();
  }

  listOrders() {
    this.orderService.computeTotalOrders();
    this.orderService.totalOrders.subscribe(
      data => this.totalOrders = data
    )
  }

}
