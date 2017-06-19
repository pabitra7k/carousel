import { Component, OnInit } from '@angular/core';
import {CarouselServiceService} from './carousel-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarouselServiceService]
})
export class AppComponent implements OnInit{
  title = 'app';
  carouselsData: any;
  activeIndex: number;

  constructor ( public carousalService: CarouselServiceService) {};

  selectCarousel(index, event, arrow) {

    if (index && arrow == undefined ) {
      document.getElementsByClassName('active-carousel-indicator')[0].className= '';
      event.target.className = 'active-carousel-indicator';
      this.activeIndex = index;
    }
    else {
      if (arrow == 'left'){
        document.getElementsByClassName('carousel-indicator')[0].children[this.activeIndex].className= '';
        if (this.activeIndex == 0 ) {
          this.activeIndex =  this.carouselsData.length - 1;
        } else {
          this.activeIndex--
        }
        document.getElementsByClassName('carousel-indicator')[0].children[this.activeIndex].className= 'active-carousel-indicator';
      }
      else {
        document.getElementsByClassName('carousel-indicator')[0].children[this.activeIndex].className= '';
        if (this.activeIndex == (this.carouselsData.length - 1) ) {
          this.activeIndex = 0;
        } else {
          this.activeIndex++;
        }

        document.getElementsByClassName('carousel-indicator')[0].children[this.activeIndex].className= 'active-carousel-indicator';
      }
    }
  }

  ngOnInit() {
    this.carousalService.getCarousels().subscribe(
    successRes => {
      this.carouselsData = successRes;
      this.activeIndex = 0;
      console.log('Carousel data successfully fetched!!'+ + this.carouselsData[0]);
    },
      errorRes => {
        console.log('Please try after some time!!' + errorRes);
      }
    );
  }
}
