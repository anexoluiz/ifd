function FindProxyForURL(url, host)
{
 var myIp = myIpAddress();
 var resolved_ip = dnsResolve(host);

         if (isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") ||
                isInNet(resolved_ip, "172.16.0.0",  "255.240.0.0") ||
                isInNet(resolved_ip, "192.168.0.0", "255.255.0.0") ||
                isInNet(resolved_ip, "127.0.0.0", "255.255.255.0")) {
                return "DIRECT";

		} else {
			return "PROXY 10.171.10.20:4444; PROXY 10.171.10.120:4444";
		}
 
}
