var repository = require('contractRepository');

function contract(name) {
	this.name = name;
}

contract.prototype.addMethod = function(name, arguments) {
	this.name = name;
	this.arguments = arguments;
};

contract.prototype.bind = function(name) {
	repository.add(name, this);
};