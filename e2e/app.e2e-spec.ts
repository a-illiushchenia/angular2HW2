import { Angular2HW1Page } from './app.po';

describe('angular2-hw1 App', () => {
  let page: Angular2HW1Page;

  beforeEach(() => {
    page = new Angular2HW1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
