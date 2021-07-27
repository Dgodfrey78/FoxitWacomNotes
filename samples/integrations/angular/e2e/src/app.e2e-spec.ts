import { AppPage } from './app.po';
import { browser, logging, ExpectedConditions as util, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load websdk in 1 seconds', () => {
    page.navigateTo();
    const elm = element(by.css('app-foxitpdfviewer .fv__ui-webpdf'));
    browser.wait(util.presenceOf(elm), 1000, 'WebSDK taking too long to load');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
