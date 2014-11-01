require('../src/contractRepository');
var should = require('should');

describe('contractRepository', function () {

  describe('constructor', function() {

    it('should create an empty contracts object', function() {

      global.contractRepository.should.have.property('contracts');

    });

    describe('add()', function() {

      it('should add a contract to the contracts property', function() {

        global.contractRepository.add('TestInterface', { 'Test': 'Foo' });

        global.contractRepository.should.have.property('contracts', { 'TestInterface' : { 'Test': 'Foo' } });

      });

    });

  })

});