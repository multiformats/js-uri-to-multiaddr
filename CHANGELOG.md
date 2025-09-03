## [10.0.0](https://github.com/multiformats/js-uri-to-multiaddr/compare/v9.0.2...v10.0.0) (2025-09-03)

### ⚠ BREAKING CHANGES

* Please upgrade to @multiformats/multiaddr 13.x.x

### Bug Fixes

* update @multiformats/multiaddr to 13.x.x ([#78](https://github.com/multiformats/js-uri-to-multiaddr/issues/78)) ([1eab328](https://github.com/multiformats/js-uri-to-multiaddr/commit/1eab32814f2c17733f3f0ac505c5ecf7b7da0d62))

## [9.0.2](https://github.com/multiformats/js-uri-to-multiaddr/compare/v9.0.1...v9.0.2) (2025-09-03)

### Dependencies

* **dev:** bump aegir from 45.1.4 to 47.0.21 ([#77](https://github.com/multiformats/js-uri-to-multiaddr/issues/77)) ([9088b40](https://github.com/multiformats/js-uri-to-multiaddr/commit/9088b400b6a19166573b1988c482c1afd8a706cd))

## [9.0.1](https://github.com/multiformats/js-uri-to-multiaddr/compare/v9.0.0...v9.0.1) (2025-03-26)

### Bug Fixes

* prefer /tls/http to /https and /tls/ws to /wss ([#56](https://github.com/multiformats/js-uri-to-multiaddr/issues/56)) ([8293d85](https://github.com/multiformats/js-uri-to-multiaddr/commit/8293d85e7c2fbd1d7a3c1d4e1278193a4875b601)), closes [#6](https://github.com/multiformats/js-uri-to-multiaddr/issues/6)

## [9.0.0](https://github.com/multiformats/js-uri-to-multiaddr/compare/v8.1.0...v9.0.0) (2025-03-26)

### ⚠ BREAKING CHANGES

* returned multiaddrs created from domain names used to start with `/dns4`, now they start with `/dns` - pass `defaultDnsType: 'dns4'` to restore the previous behaviour

### Bug Fixes

* prefer /dns to allow resolving A or AAAA records ([#55](https://github.com/multiformats/js-uri-to-multiaddr/issues/55)) ([4fbd126](https://github.com/multiformats/js-uri-to-multiaddr/commit/4fbd1260be528141a4a18d7966b34840ea348fc7)), closes [#8](https://github.com/multiformats/js-uri-to-multiaddr/issues/8)

## [8.1.0](https://github.com/multiformats/js-uri-to-multiaddr/compare/v8.0.1...v8.1.0) (2025-03-26)

### Features

* support http-path in multiaddrs ([#53](https://github.com/multiformats/js-uri-to-multiaddr/issues/53)) ([237abb0](https://github.com/multiformats/js-uri-to-multiaddr/commit/237abb07edf05e000056ae2d60bbce333326c8a8)), closes [#47](https://github.com/multiformats/js-uri-to-multiaddr/issues/47)

## [8.0.1](https://github.com/multiformats/js-uri-to-multiaddr/compare/v8.0.0...v8.0.1) (2025-03-26)

### Dependencies

* **dev:** bump aegir from 42.2.11 to 45.1.4 ([#54](https://github.com/multiformats/js-uri-to-multiaddr/issues/54)) ([dfd7fa9](https://github.com/multiformats/js-uri-to-multiaddr/commit/dfd7fa922369306aec0370a07b5fa53596531e72))

## [8.0.0](https://github.com/multiformats/js-uri-to-multiaddr/compare/v7.0.1...v8.0.0) (2024-03-01)


### ⚠ BREAKING CHANGES

* the default export has been replaced with a named export of `uriToMultiaddr`

### Features

* switch to named export ([#45](https://github.com/multiformats/js-uri-to-multiaddr/issues/45)) ([74c24d1](https://github.com/multiformats/js-uri-to-multiaddr/commit/74c24d185480936e57e93072cd92cc7ae8722268))

## [7.0.1](https://github.com/multiformats/js-uri-to-multiaddr/compare/v7.0.0...v7.0.1) (2024-03-01)


### Dependencies

* bump @multiformats/multiaddr from 11.6.1 to 12.1.14 ([#43](https://github.com/multiformats/js-uri-to-multiaddr/issues/43)) ([239564e](https://github.com/multiformats/js-uri-to-multiaddr/commit/239564ec0a4e46a9f901ff16fcf135c6c5956eeb))
* **dev:** bump aegir from 37.12.1 to 42.2.5 ([#44](https://github.com/multiformats/js-uri-to-multiaddr/issues/44)) ([e59c2d8](https://github.com/multiformats/js-uri-to-multiaddr/commit/e59c2d8964335c64c6938694afa435080e558edd))

## [7.0.0](https://github.com/multiformats/js-uri-to-multiaddr/compare/v6.0.0...v7.0.0) (2022-09-21)


### ⚠ BREAKING CHANGES

* this module is now ESM only

### Features

* convert to typescript ([#19](https://github.com/multiformats/js-uri-to-multiaddr/issues/19)) ([f881180](https://github.com/multiformats/js-uri-to-multiaddr/commit/f881180e6bdf12de9ba55d986ad746c1673e46b3))
