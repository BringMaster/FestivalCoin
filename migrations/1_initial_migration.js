const SafeMath = artifacts.require("SafeMath");
const FESTToken = artifacts.require("FESTToken");

module.exports = function (deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(FESTToken);
};
