var repository = require('./contractRepository');

function contract(name) {
	this.name = name;
}

contract.prototype.addMethod = function(name, args) {
	this.name = name;
	this.arguments = args;
};

contract.prototype.bind = function(name) {
	repository.add(name, this);
};

module.exports = contract;