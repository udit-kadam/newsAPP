import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BussinessNewsComponent } from './bussiness-news/bussiness-news.component'

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechNewsComponent,
    BussinessNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
