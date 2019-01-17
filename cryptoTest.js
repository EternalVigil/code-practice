let crypto;
try {
  crypto = require('crypto');
  console.log('crypto there');
} catch (err) {
  console.log('crypto support is disabled!');
}