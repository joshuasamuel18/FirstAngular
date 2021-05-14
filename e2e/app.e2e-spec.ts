import { UPSC.MembersV3.AngularPage } from './app.po';

describe('upsc.members-v3.angular App', () => {
  let page: UPSC.MembersV3.AngularPage;

  beforeEach(() => {
    page = new UPSC.MembersV3.AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
