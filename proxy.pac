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
      if (/(?:^|.)ifoodxt\.com\.br$/.test(host)) return '+Proxy';
      if (/(?:^|.)ifood\.com\.br$/.test(host)) return '+Proxy';
      if (/(?:^|.)dc-ifood\.com$/.test(host)) return '+Proxy';
      if (/(?:^|.)force\.com$/.test(host)) return '+Proxy1';
      if (/(?:^|.)salesforce\.com$/.test(host)) return '+Proxy1';
      //if (/(?:^|.)wfm\.csu\.com\.br$/.test(host)) return '+Proxy';
      //if (/(?:^|.)pendo\.io$/.test(host)) return '+Proxy';
      //if (/(?:^|.)datadoghq-browser-agent\.com$/.test(host)) return '+Proxy';
      //if (/(?:^|.)sentry\.io$/.test(host)) return '+Proxy';
      //if (/(?:^|.)smooch\.io$/.test(host)) return '+Proxy';
      //if (/(?:^|.)segment\.com$/.test(host)) return '+Proxy';
      //if (/(?:^|.)google\.com$/.test(host)) return '+Proxy';
      if (/(?:^|.)atlassian\.com$/.test(host)) return '+Proxy1';
      if (/(?:^|.)atlassian\.net$/.test(host)) return '+Proxy1';
      if (/(?:^|.)atl-paas\.net$/.test(host)) return '+Proxy1';
      if (/(?:^|.)slack\.com$/.test(host)) return '+Proxy';
      if (/(?:^|.)beedoo\.io$/.test(host)) return '+Proxy';
      return 'DIRECT';
    },
    '+Proxy': function (url, host, scheme) {
      'use strict';
      if (/^127.0.0.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return 'DIRECT';
      return 'PROXY 10.171.10.20:4444';
    },
    '+Proxy1': function (url, host, scheme) {
      'use strict';
      if (/^127.0.0.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return 'DIRECT';
      return 'PROXY 10.171.10.20:4444';
    },
    '+Proxy2': function (url, host, scheme) {
      //para uso no site
      'use strict';
      if (/^127.0.0.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return 'DIRECT';
      return 'PROXY 10.172.102.30:3128';
    },
  });
