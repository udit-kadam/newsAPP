import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-bussiness-news',
  templateUrl: './bussiness-news.component.html',
  styleUrls: ['./bussiness-news.component.css']
})
export class BussinessNewsComponent implements OnInit {

  constructor(private services:NewsapiservicesService) { }

  bussinessNewsDisplay = []

  ngOnInit(): void {
    this.services.businessNews().subscribe((result)=>{
      console.log(result);
      this.bussinessNewsDisplay = result.articles;
    })
  }

}
