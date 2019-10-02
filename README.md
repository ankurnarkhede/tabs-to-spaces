# Tabs to Spaces
Convert a string containing tabs to appropriate number of spaces.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

![Version npm](https://img.shields.io/npm/v/tab-to-space.svg?style=for-the-badge)
![NPM Downloads](https://img.shields.io/npm/dt/tab-to-space.svg?style=for-the-badge)
![License](https://img.shields.io/npm/l/tab-to-space.svg?style=for-the-badge)
![GitHub Repository Size](https://img.shields.io/github/repo-size/smartankur4u/tabs-to-spaces.svg?style=for-the-badge)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge)](https://standardjs.com)
[![Travis (.org) branch](https://img.shields.io/travis/smartankur4u/tabs-to-spaces/master?style=for-the-badge)](https://travis-ci.org/smartankur4u/tabs-to-spaces)

[![NPM](https://nodei.co/npm/tab-to-space.png?downloads=true&downloadRank=true)](https://nodei.co/npm/var_dump/)


## Installation

Either through cloning with git or by using [npm](http://npmjs.org) (the recommended way):

```bash
npm install tab-to-space
```


## Usage

```js
const tabToSpace = require('tab-to-space')

```

Use var_dump while development for printing details of variables and functions.

```js
let text = '\t\t[FirstName]\t\t\t\t=> TEST\n' +
      '        [LastName]              => TEST\n'

// convert tabs to spaces
tabToSpace(text, 4)
```

This will return:

```js
'        [FirstName]             => TEST\n' +
'        [LastName]              => TEST\n'

```
