'use strict'

/**
 * Beacon Platform, Inc.
 * ESLint config for maintaining consistent code style for full-stack ES5/6 JS
 * See http://eslint.org/docs/developer-guide/shareable-configs
 * Authored by Kevin Ho, 2018
 */

module.exports = {
    extends: ['./rules/base', './rules/react'].map(require.resolve),

    env: {
        es6: true,
        browser: true,
        node: true,
        mocha: true,
        jasmine: true,
        jquery: true,
    },

    parser: 'babel-eslint',

    globals: {
        angular: true,
    },
}
