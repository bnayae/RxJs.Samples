import { Angular2MdSeedPage } from './app.po';

describe('angular2-md-seed App', function() {
  let page: Angular2MdSeedPage;

  beforeEach(() => {
    page = new Angular2MdSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
