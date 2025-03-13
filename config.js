const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || 'https://files.catbox.moe/hapvqq.jpeg', //put your img url 
ALIVE_MSG: process.env.ALIVE_MSG || 'ꪶ ཻུ۪۪ꦽꦼ̷⸙🍁𝐇𝐄𝐑𝐎𝐁𝐑𝐈𝐍𝐄-𝐌𝐃🍁ꪶ ཻུ۪۪ꦽꦼ̷⸙\nIm sTiLL aLive buddy🌝✌🏻🕊️\n> TP-STUDIO',
};
