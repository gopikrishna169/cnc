import { CncPage } from './app.po';

describe('cnc App', function() {
  let page: CncPage;

  beforeEach(() => {
    page = new CncPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
