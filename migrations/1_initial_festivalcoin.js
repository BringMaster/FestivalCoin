var FESTToken = artifacts.require("FESTToken");

module.exports = function(deployer) {
  deployer.deploy(FESTToken);
};
