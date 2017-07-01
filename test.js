const test = require('ava');

const isCurrencyCode = require('./index');

test('should succeed with uppercase currency code', t => {
  t.is(isCurrencyCode('USD'), true);
});

test('should succeed with lowercase currency code', t => {
  t.is(isCurrencyCode('aud'), true);
});

test('should fail with invalid currency code', t => {
  t.is(isCurrencyCode('not-a-currency-code'), false);
});

test('should fail with boolean', t => {
  t.is(isCurrencyCode(true), false);
});

test('should fail with object', t => {
  t.is(isCurrencyCode({}), false);
});
