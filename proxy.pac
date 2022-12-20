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
}("+Auto", {
    "+Auto": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)whatsapp\.net$/.test(host)) return "DIRECT";
        if (/(?:^|\.)whatsapp\.com$/.test(host)) return "DIRECT";
        return "+Proxy";
    },
    "+Proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 10.171.10.20:4444";
    }
});
