"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertCookieToTough = convertCookieToTough;
var _toughCookie = require("tough-cookie");
function convertCookieToTough(cookie) {
  const {
    name,
    value,
    expires,
    domain,
    path
  } = cookie;
  const isExpiresValid = expires && typeof expires === 'number';
  const expiresDate = isExpiresValid ? new Date(expires * 1000) : new Date(Date.now() + DEFAULT_EXPIRATION_TIME_IN_SECONDS * 1000);
  return new _toughCookie.Cookie({
    key: name,
    value,
    expires: expiresDate,
    domain: domain.startsWith('.') ? domain.substring(1) : domain,
    path
  });
}