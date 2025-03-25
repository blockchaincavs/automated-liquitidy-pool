/**
 * @author blockchaincavs
 * @description Applicaiton utilities
 */

const yargs = require("yargs");
const { ethers, toUtf8Bytes} = require("ethers");
const { readFile } = require('fs').promises;
const { AlpError } = require('./errors.cjs')

/**
 * Using yargs for command line arguments
 */
const args = yargs
.usage('Usage: $0 --password <pass> --filePath <filePath>')
.option('password', {
    alias: 'ps',
    description: 'This Password used to decrypt the keystore wallet',
    type: 'string',
})
.option('filePath', {
    alias: 'fp',
    description: 'File destination of the encrypted keystore',
    type: 'string',
})
.example('$0 --password HelloWorld123! --filePath ./keystore.json') // Example usage
.argv;

/**
 * This function decripts the keystore file
 * @param {string} filePath json string
 * @param {string} password to unlock keystore
 * @returns {Promise<ethers.Wallet>} decrypted wallet
 */
async function decryptWallet(password, filePath) {
        
    try {
        const keystore = await readFile(filePath, 'utf8');
        const decryptedWallet = await ethers.Wallet.fromEncryptedJson(keystore, toUtf8Bytes(password));
        console.log("Keystore wallet public key:", decryptedWallet.address)
        
        return decryptedWallet;

    } catch (error) {
        const path = error.path || filePath;
        throw new AlpError("Failed to decrypt wallet from keystore file: " + path, error.code);
    }
    
}

module.exports = { args, decryptWallet };