const inquirer = require('inquirer')
const colors = require('colors')
const KeyManager = require('../lib/KeyManager')
const {isRequired} = require('../utils/validation')

const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key '.green + 'https://finnhub.io/',
                validate: isRequired
            }
        ]);


        const key = keyManager.setKey(input.key);

        if (key) {
            console.log('API Key Set'.blue)
        }
    },

    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            console.log('Current API Key: ', key.yellow)
            return key;
        } catch (err) {
            console.error(err.message.red)
        }
    },

    remove() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.deleteKey();

            console.log('Key is removed'.blue)
            return;
        } catch (err) {
            console.error(err.message.red)
        }
    }
}

module.exports = key