var Contract = require('../src/contract');
var should = require('should');

describe('contract', function () {

  var TestContract = new Contract('TestContract');

  describe('constructor', function () {

    it('should correctly add a name property to the contract', function () {
      TestContract.should.have.property('name', 'TestContract');
    })

  });

});