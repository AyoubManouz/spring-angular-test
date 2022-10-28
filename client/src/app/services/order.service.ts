import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../common/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl = environment.apiUrl + 'orders';

  totalOrders: Subject<number> = new Subject<number>();

  constructor(private httpClient: HttpClient) {}

  getOrderList(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl);
  }

  getOrder(id: number): Observable<Order> {
    return this.httpClient
      .get<Order>(this.baseUrl + '/' + id)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  addOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.baseUrl, order);
  }

  computeTotalOrders() {
    this.getOrderList().subscribe((data) => {
      this.totalOrders.next(data.length);
    });
  }

  editOrder(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(this.baseUrl + "/" + order.id, order);
  }
}
