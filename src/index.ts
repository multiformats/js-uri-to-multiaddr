import { isIPv4, isIPv6 } from 'is-ip'
import { multiaddr } from '@multiformats/multiaddr'
import type { Multiaddr } from '@multiformats/multiaddr'

const portFor: Record<string, string> = {
  http: '80',
  https: '443',
  ws: '80',
  wss: '443'
}

const BROWSER_SCHEMES = ['http', 'https', 'ws', 'wss']

export interface MultiaddrFromUriOpts {
  defaultDnsType?: string
}

/**
 * Convert a URI to a multiaddr
 *
 * http://foobar.com => /dns4/foobar.com/tcp/80/http
 * https://foobar.com => /dns4/foobar.com/tcp/443/https
 * https://foobar.com:5001 => /dns4/foobar.com/tcp/5001/https
 * https://127.0.0.1:8080 => /ip4/127.0.0.1/tcp/8080/https
 * http://[::1]:8080 => /ip6/::1/tcp/8080/http
 * tcp://foobar.com:8080 => /dns4/foobar.com/tcp/8080
 * udp://foobar.com:8080 => /dns4/foobar.com/udp/8080
 */

export default function multiaddrFromUri (uriStr: string, opts?: MultiaddrFromUriOpts): Multiaddr {
  opts = opts ?? {}
  const defaultDnsType = opts.defaultDnsType ?? 'dns4'
  const { scheme, hostname, port } = parseUri(uriStr)
  const parts = [
    tupleForHostname(hostname, defaultDnsType),
    tupleForPort(port, scheme),
    tupleForScheme(scheme)
  ]

  const multiaddrStr = '/' + parts
    .filter(x => Boolean(x))
    // @ts-expect-error ts cannot see we filter falsy values
    .reduce((a, b) => a.concat(b), [])
    .join('/')

  return multiaddr(multiaddrStr)
}

function parseUri (uriStr: string): { scheme: string, hostname: string, port: string } {
  const [scheme] = uriStr.split(':')

  // browsers will only parse URLs with schemes they understand
  if (!BROWSER_SCHEMES.includes(scheme)) {
    uriStr = 'http' + uriStr.substring(scheme.length)
  }

  // Use the WHATWG URL global, in node >= 10 and the browser
  let { protocol, hostname, port } = new URL(uriStr)

  if (port == null || port === '') {
    const protocolPort = portForProtocol(scheme)

    if (protocolPort != null) {
      port = protocolPort
    }

    // browsers will omit the port when it's common
    if (protocolPort == null && protocol === 'http:') {
      // we overrode the protocol with http, set the port to 80
      port = '80'
    }
  }

  return { scheme, hostname, port }
}

function tupleForHostname (hostname: string, defaultDnsType: string): [string, string] | undefined {
  if (hostname == null || hostname === '') {
    return undefined
  }

  if (isIPv4(hostname)) {
    return ['ip4', hostname]
  }

  if (isIPv6(hostname)) {
    return ['ip6', hostname]
  }

  // literal ipv6 in url should be wrapped in square brackets [x:y:z]
  // https://www.ietf.org/rfc/rfc2732.txt
  if (hostname[0] === '[') {
    const trimmed = hostname.substring(1, hostname.length - 1)
    if (isIPv6(trimmed)) {
      return ['ip6', trimmed]
    }
  }
  // assumes that any non-ip hostname is a dns4 address.
  return [defaultDnsType, hostname]
}

function tupleForPort (port: string, scheme: string): [string, string] | undefined {
  if (port == null || port === '') {
    return undefined
  }

  if (scheme === 'udp') {
    return ['udp', port]
  }

  return ['tcp', port]
}

function tupleForScheme (scheme: string): [string] | undefined {
  if (scheme.match(/^tcp$|^udp$/) != null) {
    return undefined
  }

  return [scheme]
}

function portForProtocol (protocol: string): string | undefined {
  if (protocol == null || protocol === '' || portFor[protocol] == null) {
    return undefined
  }

  return portFor[protocol]
}
