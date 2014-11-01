function Test() {
}

Test.prototype.testMethod = function(arg) {
  this.args = arg;
}

module.exports = Test;