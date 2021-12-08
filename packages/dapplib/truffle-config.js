require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar purchase install argue success share'; 
let testAccounts = [
"0xc2980d3bb24bba779e54bce1d99414526011e31afe40011e0461b3955cd745bb",
"0x18a83aabd73e9a0fb214f68ea19cdcba8c72af9ad24d9ee5d4a7f01ab5d0dea9",
"0xe63b2083fdaa031df24a0c7156ee0d6c50c38ecdbde75dd8f867f2c091735263",
"0xc90ea47a4568f4726e179dede9e9db6330c93e7776d528366ebec51bf09b1183",
"0x032f102d78f9637ad1c060177eeb75f35698678cf659d18596a59aed4c9174b2",
"0x497d898a81ff5aba1277faeeed6177da5c28f1303b731a17ee148d0b89286ced",
"0xcc2acef9602d26f6c2c42b7cae525bde46d12c334a53d4503b61574686823a39",
"0xa90209e595ceca44af3e871fb54d3e85a647439a691a2281716ff4748ce30def",
"0x9ee1b07edcd1a36f175da94b6689142f4247bfb3e436a88deb104216ebc09747",
"0xe0b572ad00668f5565e6aff137ba4a30313ca6a9f4ec4988bfe78372d2df9fa7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

