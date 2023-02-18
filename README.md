# Aurora Engine Client for JavaScript & Support CommonJS

## Prerequisites

- Node.js (v14+)

## Installation

```shell
npm install -D @corndao/aurora.js
```

```json
{
  "dependencies": {
    "@corndao/aurora.js": "git://github.com/corndao/aurora.js"
  }
}
```

## Usage

```js
import Aurora from "@corndao/aurora.js";
```

See the [Aurora CLI] source code for example usage.

### Key Management

The library will load the following local keys by default, if found:

- `$HOME/.near-credentials/*/*.json`: credentials stored by the NEAR CLI

- `$HOME/.near/validator_key.json`: the local `nearcore` validator key
  (for the `test.near` master account)

[Aurora CLI]: https://github.com/aurora-is-near/aurora-cli/blob/master/src/aurora.ts
