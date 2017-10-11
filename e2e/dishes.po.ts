import { browser, element, by } from 'protractor';

export class HorizonDishes {
  navigateTo() {
    return browser.get('/dishes');
  }

  getHeaderText() {
    return element(by.css('h1')).getText();
  }
}
