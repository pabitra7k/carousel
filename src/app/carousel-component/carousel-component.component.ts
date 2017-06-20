import { Component, OnInit } from '@angular/core';
import {CarouselServiceService} from './carousel-service.service';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.scss'],
  providers: [CarouselServiceService]
})
export class CarouselComponentComponent implements OnInit {

  carouselsData: any;
  activeIndex: number;

  constructor ( public carousalService: CarouselServiceService) {
  };

  selectCarousel(index, event, arrow) {

    if ((index || index == 0) && arrow == undefined ) {
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

        //Start slide show animation
        setInterval(() => {
          this.selectCarousel(undefined, undefined, 'right');
        }, 1000 * 4);
        console.log('Carousel data successfully fetched!!'+ + this.carouselsData[0]);
      },
      errorRes => {
        console.log('Please try after some time!!' + errorRes);
      }
    );
  }

}
