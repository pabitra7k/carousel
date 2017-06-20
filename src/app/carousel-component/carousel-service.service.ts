import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CarouselServiceService {

  carousels;

  constructor(private http:Http) {
  }

  getCarousels() {
    return this.http.get('./assets/data/carousel.json')
      .map(res => this.carousels = res.json());
  }

  //To run the actual api pls go to my-app-server of the repo and run the sever
  /*getCarousels() {
    return this.http.get('http://localhost:3000/newapp/carousel')
      .map((res: Response) => res.json());
  }*/



}
