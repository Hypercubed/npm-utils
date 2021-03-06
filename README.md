# npm-utils

Async NPM shell commands: install, test, etc.

[![NPM info][nodei.co]][npm-url]

[![Build][npm-utils-ci-image]][npm-utils-ci-url]
[![dependencies][dependencies-image]][dependencies-url]
[![devDependencies][devDependencies-image]][devDependencies-url]
[![endorse][endorse-image]][endorse-url]
[![Codacy Badge][codacy-image]][codacy-url]

## Use

```js
var npmUtils = require('npm-utils');
npmUtils.version()
  .then(function (semver) {
    console.log('NPM version %s', semver);
  });
```

## API

```js
path() // returns immediately path to npm command
```

```js
install({
  name: string,
  version: string (optional),
  prefix: string (optional), // folder path prefix
  passThroughData: obj (optional),
  registry: string (optional) // registry url
})

returns a promise
```

```js
version() // returns a promise, resolved with NPM version string
```

```js
test() // spawns npm test command
test('grunt test'); // spawns new command "grunt test"
```

```js
registryUrl(); // returns a promise
// same as `npm config get registry`
```

## Small print

Author: Gleb Bahmutov @ 2013 @bahmutov

License: MIT - do anything with the code, but don't blame me if it does not work.

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

[nodei.co]: https://nodei.co/npm/npm-utils.png?downloads=true
[npm-url]: https://npmjs.org/package/npm-utils
[npm-utils-ci-image]: https://secure.travis-ci.org/bahmutov/npm-utils.png?branch=master
[npm-utils-ci-url]: http://travis-ci.org/#!/bahmutov/npm-utils
[dependencies-image]: https://david-dm.org/bahmutov/npm-utils.png
[dependencies-url]: https://david-dm.org/bahmutov/npm-utils
[devDependencies-image]: https://david-dm.org/bahmutov/npm-utils/dev-status.png
[devDependencies-url]: https://david-dm.org/bahmutov/npm-utils#info=devDependencies
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
[codacy-image]: https://api.codacy.com/project/badge/grade/80f4a9c1aad545fa8aeb090d66a3a7d2
[codacy-url]: https://www.codacy.com/app/glebbahmutov_2600/npm-utils
