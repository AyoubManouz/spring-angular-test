import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleService } from './services/article.service';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {path: 'articles', component: ArticleListComponent},
  {path: '', redirectTo: '/articles', pathMatch:'full'},
  {path: '**', redirectTo: '/articles', pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
