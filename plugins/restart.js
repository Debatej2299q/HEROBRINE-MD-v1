const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    reply("resTarTing 🍁𝐇𝐄𝐑𝐎𝐁𝐑𝐈𝐍𝐄-𝐌𝐃🍁...")
    await sleep(1500)
    process.exit(0) // Let Render auto-restart the service
}catch(e){
    console.log(e)
    reply(`${e}`)
}
})
