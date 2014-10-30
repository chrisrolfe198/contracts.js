function contractRepository() {
	this.contracts = {};
}

contractRepository.prototype.add = function(name, contract) {
	this.contracts[name] = contract;
};

contractRepository.prototype.resolve = function(name) {
	return this.contracts[name];
};