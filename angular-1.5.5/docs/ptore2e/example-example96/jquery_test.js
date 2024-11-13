describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-example96/index-jquery.html");
  });
  
it('should load templates defined inside script tag', function() {
  element(by.css('#tpl-link')).click();
  expect(element(by.css('#tpl-content')).getText()).toMatch(/Content of the template/);
});
});