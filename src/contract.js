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
	// Check the object
	var methodsToImplement = JSON.parse(JSON.stringify(this.methods));

	Object.keys(functionToBind.prototype).forEach(function(methodName) {
		if (methodsToImplement[methodName]) {
			delete methodsToImplement[methodName];
		}
	})

	var methodsToImplementArray = Object.keys(methodsToImplement);

	if (methodsToImplementArray.length > 0) {
		throw new Error('UnmetMethodException - functions: [' + methodsToImplementArray.join(' ') + ']')
	}

	this.bound = functionToBind;
	global.contractRepository.add(this.name, this);
};

contract.prototype.resolve = function() {
	return new (global.contractRepository.resolve(this.name).bound)();
};

module.exports = contract;