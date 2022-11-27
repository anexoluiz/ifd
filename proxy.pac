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
        if (/ifood\.com\.br$/.test(host)) return "DIRECT";
        if (/fstr\.rocks$/.test(host)) return "DIRECT";
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
        if (/zdassets\.com$/.test(host)) return "+main";
        if (/openstreetmap\.org$/.test(host)) return "DIRECT";
        if (/force\.com$/.test(host)) return "+main";
        if (/(?:^|\.)onetrust\.com$/.test(host)) return "+main";
        if (/salesforce\.com$/.test(host)) return "+main";
        if (/sfdcstatic\.com$/.test(host)) return "+main";


        return "DIRECT";
    },
    "+main": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 10.171.10.20:4444";
    }
});
