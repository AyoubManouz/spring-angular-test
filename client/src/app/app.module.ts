import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpInterceptorService } from './services/http-interceptor-service.service';
import { LoginService } from './services/login.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'articles/add', component: AddArticleComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: 'orders/edit/:id', component: EditOrderComponent },
  { path: 'orders/add', component: AddOrderComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'cart', component: CartDetailsComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
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
    AddOrderComponent,
    EditOrderComponent,
    ArticleDetailsComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
