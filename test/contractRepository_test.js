require('../src/contractRepository');
var should = require('should');
function bound() {}

describe('contractRepository', function () {

  describe('constructor', function() {

    it('should create an empty contracts object', function() {

      global.contractRepository.should.have.property('contracts');

    });
  });

  describe('add()', function() {

    it('should add a contract to the contracts property', function() {

      global.contractRepository.add('TestInterface', { 'Test': 'Foo', 'bound' : bound });

      global.contractRepository.contracts.TestInterface.should.have.property('bound', bound);

    });

  });

  describe('resolve()', function() {

    it('should return the contract', function() {

      var bound = global.contractRepository.resolve('TestInterface').bound;

      bound.should.be.a.Function

    })

    it('should throw an exception when there isn\'t a bound contract', function() {

      try {
        var notBound = global.contractRepository.resolve('FoobarInterface');
      } catch (e) {
        e.message.should.equal('UnboundException');
      }

    })

  })

});