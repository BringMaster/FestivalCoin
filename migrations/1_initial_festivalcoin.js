var FESTToken = artifacts.require("FESTToken");
var Freezer = artifacts.require("Freezer");
var IBurn = artifacts.require("IBurn");
var IERC20 = artifacts.require("IERC20");
var IMint = artifacts.require("IMint");
var Locker = artifacts.require("Locker");
var Minter = artifacts.require("Minter");
var Ownable = artifacts.require("Ownable");
var Pauser = artifacts.require("Pauser");
var SafeMath = artifacts.require("SafeMath");

module.exports = function(deployer) {
  deployer.deploy(FESTToken);
  deployer.deploy(Freezer);
  deployer.deploy(IBurn);
  deployer.deploy(IERC20);
  deployer.deploy(IMint);
  deployer.deploy(Locker);
  deployer.deploy(Minter);
  deployer.deploy(Ownable);
  deployer.deploy(Pauser);
  deployer.deploy(SafeMath);
};
