const test = require('ava')
const toMultiaddr = require('./')

test('should convert URIs to multiaddrs', (t) => {
  const data = [
    ['/ip4/127.0.0.1/http', 'http://127.0.0.1'],
    ['/ip6/fc00::/http', 'http://[fc00::]'],
    ['/ip4/0.0.7.6/tcp/1234', 'tcp://0.0.7.6:1234'],
    ['/ip4/0.0.7.6/tcp/1234/http', 'http://0.0.7.6:1234'],
    ['/ip4/0.0.7.6/tcp/1234/https', 'https://0.0.7.6:1234'],
    ['/ip6/::/tcp/0', 'tcp://[::]:0'],
    ['/ip4/0.0.7.6/udp/1234', 'udp://0.0.7.6:1234'],
    ['/ip6/::/udp/0', 'udp://[::]:0'],
    ['/dnsaddr/protocol.ai/tcp/80', 'tcp://protocol.ai:80'],
    ['/dnsaddr/protocol.ai/tcp/80/http', 'http://protocol.ai:80'],
    ['/dnsaddr/protocol.ai/tcp/80/https', 'https://protocol.ai:80'],
    ['/dnsaddr/ipfs.io/ws', 'ws://ipfs.io'],
    ['/dnsaddr/ipfs.io/http', 'http://ipfs.io'],
    ['/dnsaddr/ipfs.io/https', 'https://ipfs.io'],
    ['/ip4/1.2.3.4/tcp/3456/ws', 'ws://1.2.3.4:3456'],
    ['/ip6/::/tcp/0/ws', 'ws://[::]:0'],
    ['/dnsaddr/ipfs.io/wss', 'wss://ipfs.io'],
    ['/ip4/1.2.3.4/tcp/3456/wss', 'wss://1.2.3.4:3456'],
    ['/ip6/::/tcp/0/wss', 'wss://[::]:0']
  ]

  data.forEach(d => t.is(toMultiaddr(d[1]).toString(), d[0], `Converts ${d[1]} to ${d[0]}`))
})

test('should throw for unsupported protocol', (t) => {
  t.throws(() => toMultiaddr('quic://'))
})
