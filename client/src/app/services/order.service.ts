import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../common/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = environment.apiUrl + 'orders';

  constructor(private httpClient: HttpClient) { }

  getOrderList(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl);
  }
}
