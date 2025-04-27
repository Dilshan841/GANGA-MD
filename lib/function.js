const fs = require('fs');
const chalk = require('chalk');

// Useful helper functions
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const getRandom = (ext) => {
    return `Math.floor(Math.random() * 10000){ext}`;
};

const banner = () => {
    console.log(chalk.blue('Welcome to DILSHAN-MD WhatsApp Bot!'));
};

const jsonSave = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

const jsonRead = (path) => {
    return JSON.parse(fs.readFileSync(path));
};

module.exports = {
    sleep,
    getRandom,
    banner,
    jsonSave,
    jsonRead
};
