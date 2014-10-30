var Contract = require('../src/contract');
describe('contract', function () {

  var TestContract = new Contract('TestContract');

  describe('constructor', function () {

    it('should correctly add a method and the arguments for that method to the contract', function () {
      TestContract.should.have.property('name', 'TestContract');
    })

  });

});