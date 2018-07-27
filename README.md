<img src="https://static.wixstatic.com/media/e414d8_9c0759d181024f0ea953ce700616fcc7~mv2.png/v1/crop/x_4,y_0,w_2702,h_848/fill/w_376,h_118,al_c,usm_0.66_1.00_0.01/e414d8_9c0759d181024f0ea953ce700616fcc7~mv2.png" align="right">

# `eslint-config-beacon`

[![Built at Beacon Platform, Inc.](https://img.shields.io/badge/built%20at-Beacon%20Platform%2C%20Inc.-green.svg)](https://www.beacon.io)

### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [Beacon Platform, Inc.](https://www.beacon.io/) JavaScript Developers

## Installation

### Global

Global installation is recommended for [Beacon Platform, Inc.](https://www.beacon.io/) JavaScript developers. To install or upgrade the config along with its peer dependencies:

```sh
npm install -g git+ssh://git@gitlab.wsq.io:kevin.ho/eslint-config-beacon.git eslint-plugin-react babel-eslint
```

In your global `~/.eslintrc.json` file:

```json
{
    "extends": "beacon",
    "parser": "babel-eslint"
}
```

Note that the `eslint-config-` portion of the module name is assumed by ESLint.

### Local

A specific project can extend this definition by including `eslint eslint-config-beacon eslint-plugin-react babel-eslint` as saved dev-dependencies, and defining a local `.eslintrc.json`. Project-level eslintrc files are recommended to be set as `root`, which prevents users' global configs from producing inconsistent results:

```json
{
    "extends": "beacon",
    "parser": "babel-eslint",
    "root": true
}
```

### Note on Parsing

This config now uses `babel-eslint` as the parser by default. This enables linting some relatively modern code which ESLint's default parser does not handle, and was necessary for this project to lint itself. You still need to install `babel-eslint` manually as it is a peer dependency of this config.

## Extending

Any [rules](http://eslint.org/docs/rules/) added to your global or local `.eslintrc.json` files will override the rules defined by this package. For example:

```json
{
    "extends": "beacon",
    "rules": {
        "semi": [1, "always"]
    }
}
```

This turns on enforcing the use of semicolons, a rule which is ALREADY turned on by default in the current version of the `eslint-config-beacon` package.

## Background

The [ESLint](http://http://eslint.org/) linting system is a popular one for its support of ES6 syntax, pluggable [rules](http://eslint.org/docs/rules/), automatic rule names in warning messages, and [shareable](http://eslint.org/docs/developer-guide/shareable-configs) / [extendable](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) config files.

This npm package provides a thorough starting config file. It was developed at [Beacon Platform, Inc.](https://www.beacon.io/) to help JavaScript developers avoid definite errors and maintain a consistent company-wide code style.

This package was bootstrapped via [Fullstack Academy of Code / Grace Hopper Academy's](http://www.fullstackacademy.com/) `eslint-config-fullstack` package.

It is easy to override and extend this base config with custom rules, [as explained above and in the ESLint docs](http://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package).
