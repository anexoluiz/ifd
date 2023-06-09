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
    //if (/(?:^|.)zendesk\.com$/.test(host)) return '+Proxy';
    //if (/(?:^|.)zdusercontent\.com$/.test(host)) return '+Proxy';
    //if (/(?:^|.)zdassets\.com$/.test(host)) return '+Proxy';
    //if (/(?:^|.)myplaylist\.io$/.test(host)) return '+Proxy';
    //if (/(?:^|.)zopim\.com$/.test(host)) return '+Proxy';
    if (/(?:^|.)ifoodxt\.com\.br$/.test(host)) return '+Proxy';
    if (/(?:^|.)force\.com$/.test(host)) return '+Proxy';
    //if (/(?:^|.)pendo\.io$/.test(host)) return '+Proxy';
    //if (/(?:^|.)datadoghq-browser-agent\.com$/.test(host)) return '+Proxy';
    //if (/(?:^|.)sentry\.io$/.test(host)) return '+Proxy';
    //if (/(?:^|.)smooch\.io$/.test(host)) return '+Proxy';
    //if (/(?:^|.)segment\.com$/.test(host)) return '+Proxy';
    return 'DIRECT';
  },
  '+Proxy': function (url, host, scheme) {
    'use strict';
    if (/^127.0.0.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return 'DIRECT';
    return 'PROXY 10.171.10.120:4444';
  },
  //'+Proxy2': function (url, host, scheme) { //para uso no site
  //  'use strict';
  //  if (/^127.0.0.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return 'DIRECT';
  //  return 'PROXY 10.172.102.30:3128';
  //},
});
