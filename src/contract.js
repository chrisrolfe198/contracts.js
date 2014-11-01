require('./contractRepository');

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

contract.prototype.bind = function(functionToBind) {
	this.bound = functionToBind;
	global.contractRepository.add(this.name, this);
};

contract.prototype.resolve = function() {
	return new (global.contractRepository.resolve(this.name).bound)();
};

module.exports = contract;