"use strict";

var _require = require('tough-cookie'),
  Cookie = _require.Cookie;
function convertCookieToTough(cookie) {
  var name = cookie.name,
    value = cookie.value,
    expires = cookie.expires,
    domain = cookie.domain,
    path = cookie.path;
  var isExpiresValid = expires && typeof expires === 'number';
  var expiresDate = isExpiresValid ? new Date(expires * 1000) : new Date(Date.now() + DEFAULT_EXPIRATION_TIME_IN_SECONDS * 1000);
  return new Cookie({
    key: name,
    value: value,
    expires: expiresDate,
    domain: domain.startsWith('.') ? domain.substring(1) : domain,
    path: path
  });
}
module.exports = {
  convertCookieToTough: convertCookieToTough
};