describe("", function() {
  var rootEl;
  beforeEach(function() {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-example68/index.html");
  });
  
it('should remove the templates directive and css class', function() {
  expect($('#template1').getAttribute('ng-cloak')).
    toBeNull();
  expect($('#template2').getAttribute('ng-cloak')).
    toBeNull();
});
});