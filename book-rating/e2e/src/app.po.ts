import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeading() {
    return element(by.css('br-root h1')).getText();
  }
}
