import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../common/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private baseUrl = environment.apiUrl + 'orders';

  totalOrders: Subject<number> = new Subject<number>();

  constructor(private httpClient: HttpClient) { }

  getOrderList(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl);
  }
  
  addOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.baseUrl, order);
  }

  computeTotalOrders() {
    this.getOrderList().subscribe(data => {
      this.totalOrders.next(data.length);
    })
  };
}
