describe('Wheelmap.org Browsertest', () => {

  it('can find search results', () => {
      browser.url('https://www.google.com/ncr')
      $('[name="q"]').setValue('BrowserStack')
      browser.saveScreenshot('./screenshots/000-google.com-search-test.png')
      $('[name="btnK"]').click()
      browser.getTitle().should.match(/BrowserStack - Google Search/i)
  });

  it('opens Wheelmap.org', () => {
    browser.url('https://www.wheelmap.org')
    browser.saveScreenshot('./screenshots/001-wheelmap.org-startpage.png')
    browser.getTitle().should.match(/Wheelmap – Find wheelchair accessible places./i)
  });  
  
  it('clicks on startbutton', () => {
    browser.url('https://www.wheelmap.org');
    const but = browser.$('[class="button-continue-with-cookies Button__CallToActionButton-sc-1itzwol-5 GmHKs"]')    
    but.click();
    browser.saveScreenshot('./screenshots/002-wheelmap.org-clicked-on-startbutton.png')
    
  });

  // it('shows me where I am', () => {
  //   browser.url('https://www.wheelmap.org');
  //   const showMeWhereIAm = browser.$('[class="leaflet-control-locate leaflet-bar leaflet-control"]');
  //   showMeWhereIAm.click();
  //   browser.saveScreenshot('./screenshots/002-wheelmap.org-show-me-where-I-am.png')
  // });


});
