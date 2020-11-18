## Web3 ethereum provider 

Provider for ethereum dapp

## Title

- [Environment requirements](#environment-requirements)
- [Install](#install)
- [CLI command](#cli)
- [Style Guide](#style-guide)
- [Technology stack](#technology-stack)

## Environment requirements

- ОС: MacOS, Linux. In case of using Windows, the most practical option is to use WSL
- nodejs version: 11.15.0
- npm version: 6.9.0
- yarn version: ^1.16.0

## Install

Install dependency `@nuxtjs/provider`

```bash
  yarn add https://github.com/tornadocash/provider.git
```

Add modules to `nuxt.config.js`

```
 modules: ['@nuxtjs/provider']
```

you also need to add the default rpc url `nuxt.config.js`

```
 provider: { rpcUrl: '' }
```

## CLI

- Linting: `yarn lint-fix`

## Style Guide

Sources of coding rules:

- [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)

To ensure compliance with formatting rules are used:

- [Eslint](https://eslint.org/) - javascript linter
- [Prettier](https://prettier.io/) - code formatting

Vscode extensions:

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier - code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Technology stack

### Technologies and languages

- [Typescript](https://www.typescriptlang.org/) - language - a subset of over javascript with strong structural typing
- [Babel](https://babeljs.io/)

### Core Libraries

- [web3](https://web3js.readthedocs.io/en/v1.3.0/) - Ethereum JavaScript API
- [web3-utils](https://web3js.readthedocs.io/en/v1.3.0/web3-utils.html) - utility functions for Dapp developers.

