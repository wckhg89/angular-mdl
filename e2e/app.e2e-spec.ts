import { AngularMdlScssPage } from './app.po';

describe('angular-mdl-scss App', function() {
  let page: AngularMdlScssPage;

  beforeEach(() => {
    page = new AngularMdlScssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
