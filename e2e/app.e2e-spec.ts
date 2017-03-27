import { AppAngularCliWebpackPage } from './app.po';

describe('app-angular-cli-webpack App', function() {
  let page: AppAngularCliWebpackPage;

  beforeEach(() => {
    page = new AppAngularCliWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
