if (global.contractRepository) {
	return;
}

function contractRepository() {
	this.contracts = {};
}

contractRepository.prototype.add = function(name, contract) {
	this.contracts[name] = contract;
};

contractRepository.prototype.resolve = function(interfaceName) {
	if (this.contracts[interfaceName] !== undefined) {
		return this.contracts[interfaceName];
	}

	throw new Error('UnboundException');
}

global.contractRepository = new contractRepository();