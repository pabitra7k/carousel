import { CarouselPage } from './app.po';

describe('carousel App', () => {
  let page: CarouselPage;

  beforeEach(() => {
    page = new CarouselPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
