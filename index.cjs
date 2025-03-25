/**
 * @author blockchaincavs
 */

const {
    args, 
    decryptWallet
} = require("./src/utils.cjs");

const Alp = require("./src/app.cjs");

// Command line arguments passed to this script
const PASSWORD = args.password;
const FILE_PATH = args.filePath;

// Exit script if no password was provided
if (PASSWORD == undefined) {
    console.error("Failed to decrypt wallet. Please provide a password. node index.cjs --help for more info.");
    process.exit(0);
}

// Exit script if no keystore wallet was passed
if (FILE_PATH == undefined) {
    console.error("Failed to decrypt wallet. Please provide keystore wallet filepath. node index.cjs --help for more info.");
    process.exit(0);
}

async function main() {

    try {

        const wallet = await decryptWallet(PASSWORD, FILE_PATH);
        const alp = new Alp(wallet);
        alp.run();

    } catch (error) {
        console.log(error);
        process.exit(0);
    }

}

main();
