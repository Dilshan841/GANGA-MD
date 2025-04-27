const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "Your_Session_ID_Goes_Here",
    PREFIX: process.env.PREFIX || '.',
    BOT_NAME: process.env.BOT_NAME || 'DILSHAN-MD',
    OWNER_NAME: process.env.OWNER_NAME || 'Dilshan Ashinsa',
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94772194789',
    PORT: process.env.PORT || 3000,
    AUTO_STATUS_SEEN: convertToBool(process.env.AUTO_STATUS_SEEN || 'true'),
    AUTO_REACT: convertToBool(process.env.AUTO_REACT || 'false'),
    ANTI_DELETE: convertToBool(process.env.ANTI_DELETE || 'true'),
    DATABASE_URL: process.env.DATABASE_URL || '',
    WELCOME_MSG: process.env.WELCOME_MSG || 'Hello! I am DILSHAN-MD WhatsApp Bot!',
    GOODBYE_MSG: process.env.GOODBYE_MSG || 'Goodbye! See you again!',
};
