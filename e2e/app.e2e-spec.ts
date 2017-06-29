import { JsonFetchApiPage } from './app.po';

describe('json-fetch-api App', () => {
  let page: JsonFetchApiPage;

  beforeEach(() => {
    page = new JsonFetchApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
