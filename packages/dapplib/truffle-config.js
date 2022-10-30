require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain minor inner kiwi fog then'; 
let testAccounts = [
"0x93ba6d3c8f2c40814622b2618675ed7d791087042af84f4c8f7046b629efd100",
"0xd1b1169a59c37ef0501e1f2fb0679c26ea1c187aa8cc9b81859d3a01c16e324d",
"0xccd8b5aeb9871c25a67eee67c40e06c8fd84bcba0217cf2bca595c5d3cb9621c",
"0xeb6888366c762b298516d7ecaead8475a9d2d0377941d4e8c5b8b0afe47dc165",
"0x331977ddec786693696de5d05b82622eb93e20f8870918e4aa29eb51332dfb9c",
"0xc69b080ae6a848fb6f23a78e4054f42bdabbd970b87bd0dd9802b66d771f8fe2",
"0x53bdd6d8e10f271fbb29e71531004e49c9a5d3af79ca10ed18d85f06d7f84515",
"0x3128d2b489894fdbb22bb323458141a7f808e9ccd05cca4b28a34f2eb9f145c9",
"0x7fb6a3e371311c7093affde85147ae084adbaa5be98c62b26c806ea40cebac31",
"0x8ab51106995770d389bccbe97ed05dbcac54315d8e56fdee7ee337c49cac9b4c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

