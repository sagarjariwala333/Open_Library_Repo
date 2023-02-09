import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './MyComponents/pagination/pagination.component';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchComponent } from './MyComponents/search/search.component';
import { SubjectComponent } from './MyComponents/subject/subject.component';

import { NgxPaginationModule } from  'ngx-pagination';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule } from 'ngx-ui-loader';

import { FormsModule } from '@angular/forms'
import { HttpCachingInterceptor } from './interceptors/http-caching.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    SearchComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxUiLoaderModule,
    FormsModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [
  {provide: HTTP_INTERCEPTORS, useClass:HttpCachingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
