
const { ethers, toUtf8Bytes} = require("ethers");

/**
 * @author blockchaincavs
 * @class AutomatedLiquitidyPool
 * @description Encapsulates logic for automated liquitidy pool managment
 */
class AutomatedLiquitidyPool {

    /**
     * @description
     * @param { ethers.Wallet } wallet 
     */
    constructor(wallet) {
        this.wallet = wallet;
        console.log("Public Key:", this.wallet.address);
    }

    /**
     * @description 
     * Periodically checks liquitidy positions for 'out of range'.
     * If no Liquitidy position exits, create it.
     */
    run() {
        setInterval(() => {
            // Code to be executed periodically
            console.log("This message is logged every 5 seconds.");
            // emit event??????
        }, 5000);
    }
}

module.exports = AutomatedLiquitidyPool;