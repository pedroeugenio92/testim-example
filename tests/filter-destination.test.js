"use strict";

const { test, l, Locator, go, resize, click, scrollToElement, type } = require('testim');

Locator.set(require('./locators/locators.js'));

test("filter-destination", async () => {
  await go("http://demo.testim.io/");
  await resize({width: 1024, height: 680});
  await click(l("[class^='Hero__form-box'],_[class*="));
  await click(l("OK"));
  await click(l("SELECT_DESTINATION"));
  await click(l("[class^='Gallery__filters-box'],_[c"));
  await click(l("Shenji"));
  await click(l("BOOK"));
  await scrollToElement(l("aPKU2oIz47Oc3Hnx"));
  await click(l("BOOK"));
  await click(l("Name_0/30"));
  await click(l("[maxlength='30']"));
  await type(l("[maxlength='30']"), 'teste finalizado');
});

