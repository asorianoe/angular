import { SecondPage } from './app.po';

describe('second App', () => {
  let page: SecondPage;

  beforeEach(() => {
    page = new SecondPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
