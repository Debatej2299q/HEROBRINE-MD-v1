const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || 'put your Fav Pic',
ALIVE_MSG: process.env.ALIVE_MSG || 'ꪶ ཻུ۪۪ꦽꦼ̷⸙🍁𝐇𝐄𝐑𝐎𝐁𝐑𝐈𝐍𝐄-𝐌𝐃🍁ꪶ ཻུ۪۪ꦽꦼ̷⸙ is sTiLL aLive🌝✌🏻🕊️\n> TP-STUDIO',
};
