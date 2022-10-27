import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleService } from './services/article.service';
import { RouterModule,Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddOrderComponent } from './components/add-order/add-order.component';

const routes: Routes = [
  {path: 'orders/add', component: AddOrderComponent},
  {path: 'articles/add', component: AddArticleComponent},
  {path: 'orders', component: OrderListComponent},
  {path: 'cart', component: CartDetailsComponent},
  {path: 'articles', component: ArticleListComponent},
  {path: '', redirectTo: '/articles', pathMatch:'full'},
  {path: '**', redirectTo: '/articles', pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    OrderListComponent,
    CartDetailsComponent,
    CartStatusComponent,
    OrderStatusComponent,
    AddArticleComponent,
    AddOrderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
