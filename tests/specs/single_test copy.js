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
    browser.saveScreenshot('./screenshots/002-wheelmap.org-click-on-startbutton.png')
  });

  // it('searches for a place', () => {
  //   browser.saveScreenshot('./screenshots/003-start-the-search-for-place.png')
  //   // const form = $('form')
  //   // const attr = form.getAttribute('method')
  //   // console.log(attr)
  //   const input = browser.$('[name="search"]')
  //   input.addValue('Alexanderplatz')
  //   browser.pause(3000)
  //   browser.saveScreenshot('./screenshots/004-wheelmap.org-input-enter-name-of-place.png')
  //   const firstlink = browser.$$('[class="search-results SearchResults__StyledSearchResults-sc-1adjnm0-0 goynth"]')[0];
  //   firstlink.$('button').click();

  //   browser.pause(5000)
  //   browser.saveScreenshot('./screenshots/005-wheelmap.org-enter-input.png')
  // });
  
  // it('zooms out of the map with zoom-out-button', () => {
  //   browser.saveScreenshot('./screenshots/006-before-zoom-out.png')
  //   const zoomy = browser.$('[class="leaflet-control-zoom-out"]');
  //   zoomy.click();
  //   zoomy.click();
  //   zoomy.click();
  //   browser.saveScreenshot('./screenshots/007-after-zoom-out.png')
  // });

  // it('zooms in to map with zoom-in-button', () => {
  //   browser.saveScreenshot('./screenshots/008-before-zoom-in.png')
  //   const zoomy = browser.$('[class="leaflet-control-zoom-in"]');
  //   zoomy.click();
  //   zoomy.click();
  //   zoomy.click();
  //   browser.saveScreenshot('./screenshots/009-after-zoom-in.png')
  // });

  // it('drags the map with key arrows', () => {
  //   browser.saveScreenshot('./screenshots/010-before-map-move.png')
  //   const backgr =  browser.$('[class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"]');
  //   backgr.click();
  //   browser.keys('ArrowDown');
  //   browser.keys('ArrowDown');
  //   browser.keys('ArrowDown');
  //   browser.keys('ArrowDown');
  //   browser.keys('ArrowDown');
  //   browser.keys('ArrowDown');
  //   browser.keys('ArrowDown');
  //   browser.saveScreenshot('./screenshots/011-after-map-move.png')
  // });

  it('searches for a place via categories', () => {
    browser.saveScreenshot('./screenshots/012-0-before-search.png')
    const input = browser.$('[name="search"]')
    input.click();

    const foodAndDrinkButton = browser.$('[aria-label="Food & Drinks"]');
    foodAndDrinkButton.click();
    browser.saveScreenshot('./screenshots/012-1-before-search.png')

    const fullyAccessibleMenuButton = browser.$('[aria-label="Only fully wheelchair accessible"]');
    fullyAccessibleMenuButton.click();
    browser.saveScreenshot('./screenshots/012-2-before-search.png')

    browser.saveScreenshot('./screenshots/013-after-search.png')

  });


});
