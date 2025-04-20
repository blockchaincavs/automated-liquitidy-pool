# Automated Liquitidy Pool (ALP) Project
This application automates liquidity providing on Uniswap for a single Ethereum EOA. 
Once the liquidity position goes "out of range" the pool is closed and a new one is created.

## About
1. Reads in Ethereum EOA from keystore at runtime. 
2. The password of keystore file passed in as command line argument.
3. Manages a uniswap v3 liquitidy pool.
4. Initial pool begins at 50/50 asset allocaitons.
5. Once pool goes out of range, NFPM contract is closed.
6. Assets are rebalanced by performing a swap to before creating a new liquitidy position.

## env file
The ALP application uses a JSON RPC node provider. RPC Urls should be listed in an environment variables in the .env file.
- MAINNET_RPC_URL
- BASE_RPC_URL
  
## Usage
To install all dependencies: `npm install`
To install prod dependencies: `npm install --omit=dev`
To run: `node index.cjs --args`
For Help: `node index.cjs --help`

Run dev with args: `npm run dev -- --password <PASSWORD> --filePath <PATH>`

## Dependencies
Refer to package.json