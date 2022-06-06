"use strict";

const { test, l, Locator, go, resize, click, type, sendCharacter, waitForText } = require('testim');

Locator.set(require('./locators/locators.js'));

test("simple-login", async () => {
  await go("http://demo.testim.io/");
  await resize({width: 1024, height: 680});
  await click(l("LOG_IN"));
  await click(l("[tabindex='1']"));
  await type(l("[tabindex='1']"), 'teste@teste.com');
  await sendCharacter(l("[tabindex='1']"), '\t');
  await type(l("[type='password']"), '123123');
  await click(l("[form='login']"));
  await waitForText(l("HELLO,_JOHN"), 'Hello, John');
});
