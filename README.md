contracts.js
============

[![Build Status](https://travis-ci.org/christopherrolfe198/contracts.js.svg)](https://travis-ci.org/christopherrolfe198/contracts.js)

An interface style library for NodeJS

## Installation

You can install this via npm.
```
npm install contractsjs
```

## Usage

This library is meant to emulate the principles of interfaces in PHP by have methods and having a class that you can resolve that implements the interface.

### Creating an interface

```
var TestContract = new Contract('TestContract')
```

You can then add methods to the contract using the `addMethod` call.

```
TestContract.addMethod('TestMethod', ['MethodArg1', 'MethodArg2']);
```

Once you've done that you can bind the contract to an implementation.

### Binding an interface

```
function boundClass() {}

boundClass.prototype.TestMethod = function() {}

TestContract.bind(boundClass);
```

If the class added doesn't implement all the methods defined an exception is thrown listing the methods that are unimplemented.

### Resolving an interface

```
var resolvedClass = TestContract.resolve()
```

`resolvedClass` will now be an instance of `boundClass`.
