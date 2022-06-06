'use strict';

const expect = require('chai').expect;
const { go, click, test, text } = require('testim');

describe('clicking', () => {
    test('clicking on a button', async () => {
        await go('http://jsbin.testim.io/ner/1');
        await click('#test');
    });
});