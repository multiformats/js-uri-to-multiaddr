import { expect } from 'aegir/chai'
import { uriToMultiaddr } from '../src/index.js'
import type { MultiaddrFromUriOpts } from '../src/index.js'

describe('uri-to-multiaddr', () => {
  it('should convert URIs to multiaddrs', () => {
    const data: Array<[string, string, MultiaddrFromUriOpts?]> = [
      ['/ip4/127.0.0.1/tcp/80/http', 'http://127.0.0.1'],
      ['/ip6/fc00::/tcp/80/http', 'http://[fc00::]'],
      ['/ip4/0.0.7.6/tcp/1234', 'tcp://0.0.7.6:1234'],
      ['/ip4/0.0.7.6/tcp/1234/http', 'http://0.0.7.6:1234'],
      ['/ip4/0.0.7.6/tcp/1234/tls/http', 'https://0.0.7.6:1234'],
      ['/ip6/::/tcp/0', 'tcp://[::]:0'],
      ['/ip4/0.0.7.6/udp/1234', 'udp://0.0.7.6:1234'],
      ['/ip6/::/udp/0', 'udp://[::]:0'],
      ['/dns/protocol.ai/tcp/80', 'tcp://protocol.ai:80'],
      ['/dns4/protocol.ai/tcp/80', 'tcp://protocol.ai:80', {
        defaultDnsType: 'dns4'
      }],
      ['/dns6/protocol.ai/tcp/80', 'tcp://protocol.ai:80', {
        defaultDnsType: 'dns6'
      }],
      ['/dnsaddr/protocol.ai/tcp/80', 'tcp://protocol.ai:80', {
        defaultDnsType: 'dnsaddr'
      }],
      ['/dns/protocol.ai/tcp/80/http', 'http://protocol.ai:80'],
      ['/dns4/protocol.ai/tcp/80/http', 'http://protocol.ai:80', {
        defaultDnsType: 'dns4'
      }],
      ['/dns6/protocol.ai/tcp/80/http', 'http://protocol.ai:80', {
        defaultDnsType: 'dns6'
      }],
      ['/dnsaddr/protocol.ai/tcp/80/http', 'http://protocol.ai:80', {
        defaultDnsType: 'dnsaddr'
      }],
      ['/dns/protocol.ai/tcp/80/tls/http', 'https://protocol.ai:80'],
      ['/dns4/protocol.ai/tcp/80/tls/http', 'https://protocol.ai:80', {
        defaultDnsType: 'dns4'
      }],
      ['/dns6/protocol.ai/tcp/80/tls/http', 'https://protocol.ai:80', {
        defaultDnsType: 'dns6'
      }],
      ['/dnsaddr/protocol.ai/tcp/80/tls/http', 'https://protocol.ai:80', {
        defaultDnsType: 'dnsaddr'
      }],
      ['/dns/ipfs.io/tcp/80/ws', 'ws://ipfs.io'],
      ['/dns4/ipfs.io/tcp/80/ws', 'ws://ipfs.io', {
        defaultDnsType: 'dns4'
      }],
      ['/dns6/ipfs.io/tcp/80/ws', 'ws://ipfs.io', {
        defaultDnsType: 'dns6'
      }],
      ['/dnsaddr/ipfs.io/tcp/80/ws', 'ws://ipfs.io', {
        defaultDnsType: 'dnsaddr'
      }],
      ['/dns/ipfs.io/tcp/443/tls/ws', 'wss://ipfs.io'],
      ['/dns4/ipfs.io/tcp/443/tls/ws', 'wss://ipfs.io', {
        defaultDnsType: 'dns4'
      }],
      ['/dns6/ipfs.io/tcp/443/tls/ws', 'wss://ipfs.io', {
        defaultDnsType: 'dns6'
      }],
      ['/dnsaddr/ipfs.io/tcp/443/tls/ws', 'wss://ipfs.io', {
        defaultDnsType: 'dnsaddr'
      }],
      ['/dns/ipfs.io/tcp/80/http', 'http://ipfs.io'],
      ['/dns4/ipfs.io/tcp/80/http', 'http://ipfs.io', {
        defaultDnsType: 'dns4'
      }],
      ['/dns6/ipfs.io/tcp/80/http', 'http://ipfs.io', {
        defaultDnsType: 'dns6'
      }],
      ['/dnsaddr/ipfs.io/tcp/80/http', 'http://ipfs.io', {
        defaultDnsType: 'dnsaddr'
      }],
      ['/dns/ipfs.io/tcp/443/tls/http', 'https://ipfs.io'],
      ['/dns4/ipfs.io/tcp/443/tls/http', 'https://ipfs.io', {
        defaultDnsType: 'dns4'
      }],
      ['/dns6/ipfs.io/tcp/443/tls/http', 'https://ipfs.io', {
        defaultDnsType: 'dns6'
      }],
      ['/dnsaddr/ipfs.io/tcp/443/tls/http', 'https://ipfs.io', {
        defaultDnsType: 'dnsaddr'
      }],
      ['/dns/ipfs.io/tcp/443/tls/http', 'https://ipfs.io:443'],
      ['/dns4/ipfs.io/tcp/443/tls/http', 'https://ipfs.io:443', {
        defaultDnsType: 'dns4'
      }],
      ['/dns6/ipfs.io/tcp/443/tls/http', 'https://ipfs.io:443', {
        defaultDnsType: 'dns6'
      }],
      ['/dnsaddr/ipfs.io/tcp/443/tls/http', 'https://ipfs.io:443', {
        defaultDnsType: 'dnsaddr'
      }],
      ['/dns/ipfs.io/tcp/443', 'tcp://ipfs.io:443'],
      ['/dns4/ipfs.io/tcp/443', 'tcp://ipfs.io:443', {
        defaultDnsType: 'dns4'
      }],
      ['/dns6/ipfs.io/tcp/443', 'tcp://ipfs.io:443', {
        defaultDnsType: 'dns6'
      }],
      ['/dnsaddr/ipfs.io/tcp/443', 'tcp://ipfs.io:443', {
        defaultDnsType: 'dnsaddr'
      }],
      ['/dns/ipfs.io/tcp/80', 'tcp://ipfs.io:80'],
      ['/dns4/ipfs.io/tcp/80', 'tcp://ipfs.io:80', {
        defaultDnsType: 'dns4'
      }],
      ['/dns6/ipfs.io/tcp/80', 'tcp://ipfs.io:80', {
        defaultDnsType: 'dns6'
      }],
      ['/dnsaddr/ipfs.io/tcp/80', 'tcp://ipfs.io:80', {
        defaultDnsType: 'dnsaddr'
      }],
      ['/ip4/1.2.3.4/tcp/3456/ws', 'ws://1.2.3.4:3456'],
      ['/ip4/1.2.3.4/tcp/3456/tls/ws', 'wss://1.2.3.4:3456'],
      ['/ip6/::/tcp/0/ws', 'ws://[::]:0'],
      ['/ip4/1.2.3.4/tcp/3456/tls/ws', 'wss://1.2.3.4:3456'],
      ['/ip6/::/tcp/0/tls/ws', 'wss://[::]:0'],
      ['/dns/example.com/tcp/443/tls/ws/http-path/foo', 'wss://example.com:443/foo'],
      ['/dns4/example.com/tcp/443/tls/ws/http-path/foo', 'wss://example.com:443/foo', {
        defaultDnsType: 'dns4'
      }],
      ['/dns6/example.com/tcp/443/tls/ws/http-path/foo', 'wss://example.com:443/foo', {
        defaultDnsType: 'dns6'
      }],
      ['/dnsaddr/example.com/tcp/443/tls/ws/http-path/foo', 'wss://example.com:443/foo', {
        defaultDnsType: 'dnsaddr'
      }]
    ]

    data.forEach(d => {
      const input = d[1]
      const expected = d[0]
      const opts = d[2]
      const output = uriToMultiaddr(input, opts).toString()
      expect(output).to.equal(expected, `Converts ${input} to ${expected}`)
    })
  })

  it('should use the defaultDnsType where provided', () => {
    const data: Array<[string, string, MultiaddrFromUriOpts]> = [
      ['/dns4/protocol.ai/tcp/80', 'tcp://protocol.ai:80', { defaultDnsType: 'dns4' }],
      ['/dns6/protocol.ai/tcp/80/http', 'http://protocol.ai:80', { defaultDnsType: 'dns6' }],
      ['/dnsaddr/protocol.ai/tcp/80/tls/http', 'https://protocol.ai:80', { defaultDnsType: 'dnsaddr' }]
    ]

    data.forEach(d => {
      expect(uriToMultiaddr(d[1], d[2]).toString()).to.equal(d[0], `Converts ${d[1]} to ${d[0]} with opts ${JSON.stringify(d[2])}`)
    })
  })

  it('should throw for on invalid url', () => {
    expect(() => {
      uriToMultiaddr('whoosh.fast')
    }).to.throw(/URL/)
  })

  it('should throw for unknown protocol', () => {
    expect(() => {
      // NOTE: `data` is a valid uri protocol but isn't a valid multiaddr protocol yet
      uriToMultiaddr('data:image/svg+xml;base64,test')
    }).to.throw('no protocol with name: data')
  })
})
