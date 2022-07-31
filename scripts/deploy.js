const hre = require("hardhat");
const ethers = hre.ethers;
const fs = require("fs");
const path = require("path");

async function main() {

  //deployer - это аккаунт владельца смарт контракта
  const [deployer] = await ethers.getSigners()
  console.log("Deploying with", await deployer.getAddress())

  const Nft = await ethers.getContractFactory("Nft", deployer)
  const nft = await Nft.deploy()
  await nft.deployed()

  //сохраняем смартконтракты для фронтенда
  saveFrontendFiles({
    //у нас только один смартконтракт
    Nft: nft
  })

}

function saveFrontendFiles(contracts) {
  //будем сохранять скомпилированные смарт контракты в src/contracts
  const contractsDir = path.join(__dirname, '/..', 'src/contracts')

  //если папка contracts не создана, то мы её создаём
  if(!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir)
  }

  //перемещаем смарт контракты в эту папку
  Object.entries(contracts).forEach((contract_item) => {
    const [name, contract] = contract_item
    if (contract) {
      //первый файл с адресом смарт контракта
      fs.writeFileSync(
        path.join(contractsDir, '/', name + '-contract-address.json'),
        JSON.stringify({[name]: contract.address}, undefined, 2)
      )
    }

    //артифайт смарт контракта
    const ContractArtifact = hre.artifacts.readArtifactSync(name)

    //второй файл с артифактом (интерфейсом) смарт контракта
    fs.writeFileSync(
      path.join(contractsDir, '/', name + '.json'),
      JSON.stringify(ContractArtifact, null, 2)
    )
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
