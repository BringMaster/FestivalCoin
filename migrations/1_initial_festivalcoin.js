var FestivalToken = artifacts.require("FestivalToken");

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
