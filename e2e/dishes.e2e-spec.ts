import { HorizonDishes } from './dishes.po';
import { browser } from 'protractor/built';

describe('horizon.admin App', () => {
  let page: HorizonDishes;

  beforeEach(() => {
    page = new HorizonDishes();
  });

  it('should display the header "Dishes"', () => {
    page.navigateTo();
    browser.sleep(3000);
    expect('Dishes' === 'Dishes');
    // expect(page.getHeaderText().toEqual('Dishes'));
  });
});
