var FindProxyForURL = (function (init, profiles) {
  return function (url, host) {
    'use strict';
    var result = init,
      scheme = url.substr(0, url.indexOf(':'));
    do {
      result = profiles[result];
      if (typeof result === 'function') result = result(url, host, scheme);
    } while (typeof result !== 'string' || result.charCodeAt(0) === 43);
    return result;
  };
})('+Auto', {
  '+Auto': function (url, host, scheme) {
    'use strict';
    if (/(?:^|.)whatsapp\.net$/.test(host)) return '+Proxy2';
    if (/(?:^|.)whatsapp\.com$/.test(host)) return '+Proxy2';
    return '+Proxy';
  },
  '+Proxy': function (url, host, scheme) {
    'use strict';
    if (/^127.0.0.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return 'DIRECT';
    return 'PROXY 10.171.10.120:4444';
  },
  '+Proxy2': function (url, host, scheme) {
    'use strict';
    if (/^127.0.0.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return 'DIRECT';
    return 'PROXY 10.172.102.30:3128';
  },
});
