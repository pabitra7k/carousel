import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CarouselServiceService {

  carousels;

  constructor(private http:Http) {
    //var obj;
    //this.getCarousels().subscribe(data => obj=data, error => console.log(error));
  }

  getCarousels() {
    return this.http.get('./assets/data/carousel.json')
      .map(res => this.carousels = res.json());
  }

 /* public getCarousels(): Observable<any> {
    return this.http.post("./file.json")
      .map((res:any) => res.json())
      .catch((error:any) => console.log(error));

  }*/



}
