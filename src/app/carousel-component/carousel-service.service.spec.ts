import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { CarouselServiceService } from './carousel-service.service';


describe('CarouselServiceService', () => {
  let subject: CarouselServiceService;
  let backend: MockBackend;
  let slideInfo = [
    {
      "icon":"../assets/images/home1.jpg",
      "description":"Slide 1"
    },
    {
      "icon":"../assets/images/home2.jpg",
      "description":"Slide 2"
    },
    {
      "icon":"../assets/images/home3.jpg",
      "description":"Slide 3"
    },
    {
      "icon":"../assets/images/home4.jpg",
      "description":"Slide 4"
    },
    {
      "icon":"../assets/images/home5.jpg",
      "description":"Slide 5"
    }
  ]

  /*beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarouselServiceService]
    });
  });*/

 /* it('should be created', inject([CarouselServiceService], (service: CarouselServiceService) => {
    expect(service).toBeTruthy();
  }));*/

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CarouselServiceService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend, defaultOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  beforeEach(inject([CarouselServiceService, MockBackend], (CarouselService, mockBackend) => {
    subject = CarouselService;
    backend = mockBackend;
  }));

  it('should get slide info', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({ body: slideInfo });

      connection.mockRespond(new Response(options));
    });

    subject.getCarousels().subscribe((response) => {
      expect(response).toEqual(slideInfo);
      done();
    });
  });

  it('should be called with proper arguments', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toEqual('http://localhost:3000/newapp/carousel');
      expect(connection.request.method).toEqual(RequestMethod.Get);

      let options = new ResponseOptions({ body: slideInfo });

      connection.mockRespond(new Response(options));
    });

    subject.getCarousels().subscribe(() => { done(); });
  });


});
