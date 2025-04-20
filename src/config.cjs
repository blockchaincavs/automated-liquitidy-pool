/**
 * @author blockchaincavs
 * @module Config
 * @description
 */

require('dotenv').config();

const { Token, ChainId } = require('@uniswap/sdk-core');

/** 
 * @constant WETH_TOKEN_MAINNET
 * @type Token
 * @description Represents metadata of WETH ERC20 token on mainnet
*/
const WETH_TOKEN_MAINNET = new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
);

/**
 * @constant USDC_TOKEN_MAINNET
 * @type Token
 * @description Represents metadata of USDC token on mainnet
 */
const USDC_TOKEN_MAINNET = new Token(
    ChainId.MAINNET,
    '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    6,
    'USDC',
    'USD Coin'
);

/**
 * @constant WETH_TOKEN_BASE
 * @type Token
 * @description Represents metadata of USDC token on base
 */
const WETH_TOKEN_BASE = new Token(
    ChainId.BASE,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
)

/**
 * @constant USDC_TOKEN_BASE
 * @type Token
 * @description Represents metadata of USDC token on base
 */
const USDC_TOKEN_BASE = new Token(
    ChainId.BASE,
    '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    6,
    'USDC',
    'USD Coin'
);

const CurrentConfig = {
    interval: 1000,
    chain: "local",
    rpc: {
        local: 'http://localhost:8545',
        mainnet: process.env.MAINNET_RPC_URL,
        base: process.env.BASE_RPC_URL
    },
    token0: USDC_TOKEN_MAINNET,
    token1: WETH_TOKEN_MAINNET
}

module.exports = { 
    CurrentConfig
};