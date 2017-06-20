import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponentComponent } from './carousel-component.component';

describe('CarouselComponentComponent', () => {
  let component: CarouselComponentComponent;
  let fixture: ComponentFixture<CarouselComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render section title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(CarouselComponentComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('236 bestemminqen');
  }));
});
