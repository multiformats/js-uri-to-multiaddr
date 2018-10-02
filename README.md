# uri-to-multiaddr

[![Build Status](https://travis-ci.org/tableflip/uri-to-multiaddr.svg?branch=master)](https://travis-ci.org/tableflip/uri-to-multiaddr) [![dependencies Status](https://david-dm.org/tableflip/uri-to-multiaddr/status.svg)](https://david-dm.org/tableflip/uri-to-multiaddr) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Convert a URI to a [Multiaddr](https://multiformats.io/multiaddr/): https://protocol.ai -> /dnsaddr/protocol.ai/https

## Install

```sh
npm install uri-to-multiaddr
```

## Usage

```js
const toMultiaddr = require('uri-to-multiaddr')

console.log(toMultiaddr('https://protocol.ai'))
// -> /dnsaddr/protocol.ai/https
```

* See [test.js](./test.js) for the currently supported conversions.
* Might be lossy - e.g. a DNSv6 multiaddr
* Can throw if the passed URI:
    * is not a valid
    * is not supported yet e.g. quic

## Related

- [multiaddr-to-uri](https://github.com/tableflip/multiaddr-to-uri) - convert it back again

## Contribute

Feel free to dive in! [Open an issue](https://github.com/tableflip/uri-to-multiaddr/issues/new) or submit PRs.

## License

[MIT](LICENSE) © TABLEFLIP