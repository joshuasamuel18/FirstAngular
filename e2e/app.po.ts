import { browser, element, by } from 'protractor';

export class UPSC.MembersV3.AngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
