var benchpress = require('../../../../tools/benchpress/index.js');
describe('hello world', function () {

  afterEach(benchpress.verifyNoBrowserErrors);

  describe('static reflection', function() {
    var URL = 'examples/web/hello_world/index_static.html';

    it('should greet', function() {
      browser.get(URL);

      expect(getShadowText('hello-app')).toBe('hello world!');
    });
  });

  describe('dynamic reflection', function() {
    var URL = 'examples/web/hello_world/index.html';

    it('should greet', function() {
      browser.get(URL);

      expect(getShadowText('hello-app')).toBe('hello world!');
    });
  });

});

function getShadowText(selector) {
  return browser.executeScript('return document.querySelector("'+selector+'").shadowRoot.textContent');
}