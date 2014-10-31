var repository = require('./contractRepository');

function contract(name) {
	this.name = name;
	this.methods = {};
}

contract.prototype.addMethod = function(name, args) {
	if (typeof args === 'string') {
		args = [args];
	}

	this.methods[name] = args;
};

contract.prototype.bind = function(name) {
	repository.add(name, this);
};

module.exports = contract;