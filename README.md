# @multiformats/uri-to-multiaddr

[![multiformats.io](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://multiformats.io)
[![codecov](https://img.shields.io/codecov/c/github/multiformats/js-uri-to-multiaddr.svg?style=flat-square)](https://codecov.io/gh/multiformats/js-uri-to-multiaddr)
[![CI](https://img.shields.io/github/actions/workflow/status/multiformats/js-uri-to-multiaddr/js-test-and-release.yml?branch=master\&style=flat-square)](https://github.com/multiformats/js-uri-to-multiaddr/actions/workflows/js-test-and-release.yml?query=branch%3Amaster)

> Convert a URI to a Multiaddr: <https://multiformats.io> -> /dns4/multiformats.io/tcp/443/https

# Install

```console
$ npm i @multiformats/uri-to-multiaddr
```

## Browser `<script>` tag

Loading this module through a script tag will make it's exports available as `MultiformatsUriToMultiaddr` in the global namespace.

```html
<script src="https://unpkg.com/@multiformats/uri-to-multiaddr/dist/index.min.js"></script>
```

> Convert a URI to a Multiaddr: <https://multiformats.io> -> /dns4/multiformats.io/tcp/443/https

## Table of contents <!-- omit in toc -->

- [Install](#install)
- [Usage](#usage)
- [Related](#related)
- [Contribute](#contribute)
- [License](#license)
- [Contribute](#contribute-1)

## Usage

```js
const toMultiaddr = require('uri-to-multiaddr')

console.log(toMultiaddr('https://protocol.ai'))
// -> /dns4/protocol.ai/tcp/443/https
```

Domain names can represent one of

- `/dns4` - domain resolves to an ipv4 address (**default**)
- `/dns6` - domain resolves to an ipv6 address
- `/dnsaddr` - domain has a [DNSLink](https://docs.ipfs.io/guides/concepts/dnslink/) TXT record pointing to an IPFS CID

This library assumes `/dns4` when it finds a domain name in the input string.
It makes no attempt query DNS. To override the default assumption, you can pass
in an options object as the second parameter to override it:

```js
const toMultiaddr = require('uri-to-multiaddr')

console.log(toMultiaddr('https://protocol.ai'), { defaultDnsType: 'dns6' })
// -> /dns6/protocol.ai/tcp/443/https
```

See [test.js](./test.js) for the currently supported conversions.

**Note**: `uri-to-multiaddr` will throw if the passed URI:

- is not a valid, according the WHATWG URL spec implementation used.
- is not supported yet

## Related

- [multiaddr-to-uri](https://github.com/multiformats/js-multiaddr-to-uri) - convert it back again

# License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

# Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
