const currencyCodes = require('./currency-codes');

module.exports = code => {
  if (typeof code === 'string') {
    return currencyCodes.indexOf(code.toLowerCase()) >= 0;
  }
  return false;
};
