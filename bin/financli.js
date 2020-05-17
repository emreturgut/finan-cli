#!/usr/bin/env node
const commander = require('commander')
const package = require('../package.json')

commander
    .version(package.version)
    .command('key','Manage API Key')
    .parse(process.argv);

    // .parse(argv => console.log(argv))
