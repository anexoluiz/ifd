var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/^fleet\.ifoodxt\.com\.br$/.test(host)) return "+proxy";
        if (/(?:^|\.)ifood\.com\.br$/.test(host)) return "DIRECT";
        if (/(?:^|\.)salesforce\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)zopim\.com$/.test(host)) return "+proxy2";
        if (/(?:^|\.)force\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)akamai-access\.com$/.test(host)) return "+proxy";
        if (/^fleet\.ifoodxt\.com\.br$/.test(host)) return "+proxy";
        if (/(?:^|\.)ifoodxt\.com\.br$/.test(host)) return "+proxy";
        if (/(?:^|\.)myplaylist\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)zendesk\.com$/.test(host)) return "+proxy2";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 10.172.128.41:80";
    },
    "+proxy2": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 10.171.10.20:4444";
    }
});
