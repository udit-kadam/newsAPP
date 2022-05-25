import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BussinessNewsComponent } from './bussiness-news/bussiness-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';

const routes: Routes = [
  { path:'', component:TopHeadingComponent },
  { path:'tech', component:TechNewsComponent },
  { path:'business', component:BussinessNewsComponent },
  // {path: '', redirectTo: '/topNews', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
