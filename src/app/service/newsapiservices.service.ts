import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http:HttpClient) { }

  //newsapiurl
  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f7975bbcb1de439596506a04e936747b'
  //techNewsapiurl
  techNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f7975bbcb1de439596506a04e936747b'
  //techNewsapiurl
  businessNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f7975bbcb1de439596506a04e936747b'

  topHeadings():Observable<any>
  {
    return this.http.get(this.newsApiUrl);
  }
  techNews():Observable<any>
  {
    return this.http.get(this.techNewsApiUrl);
  }
  businessNews():Observable<any>
  {
    return this.http.get(this.businessNewsApiUrl);
  }
}
