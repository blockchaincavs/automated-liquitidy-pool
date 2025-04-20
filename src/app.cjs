
const { 
    Wallet,
    Contract,
    JsonRpcProvider, 
    toUtf8Bytes
} = require("ethers");

const { CurrentConfig } = require('./config.cjs')

const { JsonProviderError } = require('./errors.cjs');

/**
 * @author blockchaincavs
 * @class AutomatedLiquitidyPool
 * @description Encapsulates logic for automated liquitidy pool managment
 */
class AutomatedLiquitidyPool {

    /**
     * @description
     * @param { Wallet } wallet 
     */
    constructor(wallet) {

        this.provider = new JsonRpcProvider(CurrentConfig.rpc.mainnet);
        this.wallet = new Wallet(wallet.privateKey, this.provider);
    }

    /**
     * @description 
     * Periodically checks liquitidy positions for 'out of range'.
     * If no Liquitidy position exits, create it.
     */
    async checkLiquidityPosition() {
        
        try {
            const balance = await this.provider.getBalance(this.wallet.address);
            console.log("ETH Balance:", balance.toString());
        } catch (error) {
            throw new JsonProviderError(error.shortMessage, error.code);
        }
    }

    /**
     * @description 
     * Run app performing liquitidy position check at interval defined in CurrentConfig
     */
    run() {
        setInterval(() => this.checkLiquidityPosition().catch( (reason) => {

            // Handle reason for error
            if (reason instanceof JsonProviderError) {
                
            }
            console.log(reason.message);

        }), CurrentConfig.interval);
    }
}

module.exports = AutomatedLiquitidyPool;