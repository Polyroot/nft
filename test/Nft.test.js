const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Nft", function() {
    let acc1
    let acc2
    let nft

    this.beforeEach(async function() {
        [acc1, acc2] = await ethers.getSigners()
        const Nft = await ethers.getContractFactory("Nft", acc1)
        nft = await Nft.deploy()
        await nft.deployed()
        console.log(nft.address)
    })

    it("should be deployed", async function(){
        //проверяем что адрес смар контракта корректный
        expect(nft.address).to.be.properAddress
    })

    it("should have dick name", async function(){
        const expectedName = "dick";
        await nft.setName(expectedName)

        const actualName = await nft.getName()

        expect(actualName).to.eq(expectedName)
    })

    it("should have dick pic description", async function(){
        const expectedDescription = "dick pic";
        await nft.setDescription(expectedDescription)

        const actualDescription = await nft.getDescription()

        expect(actualDescription).to.eq(expectedDescription)
    })

})