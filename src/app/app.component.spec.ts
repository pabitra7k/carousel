import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  //Testing router config
  /*describe('Router: App', () => {

   let location: Location;
   let router: Router;
   let fixture;

   beforeEach(() => {
   TestBed.configureTestingModule({
   imports: [RouterTestingModule.withRoutes(appRoutes)],
   declarations: [
   AppComponent
   ]
   });

   router = TestBed.get(Router);
   location = TestBed.get(Location);

   fixture = TestBed.createComponent(AppComponent);
   router.initialNavigation();
   });
   });

   it('navigate to carousel takes you to /carousel', fakeAsync(() => {
   router.navigate(['carousel']);
   tick();
   expect(location.path()).toBe('/carousel');
   }));*/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Brand'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Brand');
  }));
});
