import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';

export const appRoutes: Routes = [
  { path: 'carousel',
    component: CarouselComponentComponent,
  },
  { path: '', 
    redirectTo: '/carousel', 
    pathMatch: 'full' 
  },
  /*{
    path: 'carousel2',
    component: FlightInfoComponent,
  }*/
];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
