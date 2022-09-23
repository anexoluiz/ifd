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
        if (/ifconfig\.me$/.test(host)) return "+main";
        if (/(?:^|\.)ifoodxt\.com\.br$/.test(host)) return "+main";
        if (/backoffice\.ifood\.com\.br$/.test(host)) return "+main";
        if (/backoffice-api\.ifood\.com\.br$/.test(host)) return "+main";
        if (/extranet\.ifood\.com\.br$/.test(host)) return "+main";
        if (/(?:^|\.)go\.akamai-access\.com$/.test(host)) return "+main";
        if (/mfa\.akamai\.com$/.test(host)) return "+main";
        if (/zendesk\.com$/.test(host)) return "+main";
        if (/zopim\.io$/.test(host)) return "+main";
        if (/zopim\.com$/.test(host)) return "+main";
        if (/csu\.beedoo\.io$/.test(host)) return "+main";
        if (/openstreetmap\.org$/.test(host)) return "DIRECT";
        return "DIRECT";
    },
    "+main": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 10.171.10.120:4444";
    }
});
