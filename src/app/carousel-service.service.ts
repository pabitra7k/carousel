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

 /* public getCarousels(): Observable<any> {
    return this.http.post("./file.json")
      .map((res:any) => res.json())
      .catch((error:any) => console.log(error));

  }*/



}
