/*
===================================================================================================
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█   █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█   █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█   █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█
 
 █▀▀█ ░ █▀▀█ ░ █▀▀█   ░░   █░░▒█
 ░░▀▄ ░ ░░▀▄ ░ █▄▀█   ▀▀   ▒█▒█░
 █▄▄█ █ █▄▄█ █ █▄▄█   ░░   ░▀▄▀░ 
 𝑶𝒘𝒏𝒆𝒓 : 𝑴𝒓 𝑵𝒊𝒎𝒂
 𝑯𝒆𝒍𝒑𝒆𝒓𝒔 : 
 • 𝑷𝒂𝒔𝒊𝒅𝒖
 • 𝑻𝒉𝒊𝒏𝒖𝒓𝒂 
 • 𝑻𝒉𝒂𝒔𝒉𝒊
 • 𝑰𝒔𝒖𝒓𝒖

𝑨𝒏𝒅 𝑻𝒉𝒂𝒏𝒌𝒔 𝑭𝒐𝒓 𝑿𝒆𝒐𝒏 𝑭𝒐𝒓 𝒔𝒄𝒓𝒊𝒑𝒕 .
===================================================================================================
*/

const fs = require('fs')
const chalk = require('chalk')



//👇 if you need seen massage use " true "
global.READ_MASSAGE = 'false'
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY =  'false'
// You Bots Owner Number 
global.owner = ['13322285281'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝔾𝕖𝕟𝕖𝕣𝕒𝕥𝕖𝕕 𝕓𝕪 𝕎𝕚𝕟𝕤𝕠𝕞𝕖_𝔹𝕠𝕪'
//👇 Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO =  'on'
//👇 Inbox massage block PM block
global.INBOX_BLOCK =  'off'
//👇 Auto react 
global.AUTO_REACT =  'false'
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD =  'true'
//👇 Your Bot Name
global.botnma =  '𝖚𝕭𝖔𝖙' 
//👇 Your name
global.ownernma =  'ᗯIᑎᔕOᗰE_ᗷOY' 
//👇 Sticker package name
global.packname =  '𝓾𝓑𝓸𝓽 𝓫𝔂 𝓦𝓲𝓷𝓼𝓸𝓶𝓮_𝓑𝓸𝔂' 
//👇 Sticker Author Name
global.author =  'ᗯIᑎᔕOᗰE_ᗷOY' 
//👇 Kick And Auto Delete Group link Senders
global.antilink =  'false'
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '💻'
global.BAD_KICK_MSG = '*Bad word detect !*'
//👇 URL.button 1 name
global.BUTTON1 = 'Facebook'
//👇 URL button 2 name
global.BUTTON2 = '𝚈𝚘𝚞𝚝𝚞𝚋𝚎'
//👇 Button 1 url 
global.BUTTON1_URL = 'https://www.facebook.com/WinsoWobyARUsmani/'
//👇 Button 2 url
global.BUTTON2_URL = 'https://www.youtube.com/@winsowobyarusmani8085'
//👇 Your Add Massage 
global.ADD_MSG = '*✅ Success add Group*' 
//👇 Your Kick Massage 
global.KICK_MSG = '*✅ Success Remove from Group*' 
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 212 Number block
global.NUMBER_212_BLOCK = 'true'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Karachi'
//👇 Removebg Api key
global.REMOVE_BG_API = ''
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'false'
//👇 Change Bot Language 
global.LANG = 'UR'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://scontent.flhe2-2.fna.fbcdn.net/v/t39.30808-6/309426090_190887313321001_1488574502105225341_n.png?stp=dst-png_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=1cYYJOq7FY0AX8BuWOI&_nc_ht=scontent.flhe2-2.fna&oh=00_AfB9K80jbkGqd9nLrjyz-XPUWp4_VNC3TjynFFr__g0uHw&oe=63E173D2`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || ``
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || false
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Desable PM Block
global.NO_BLOCK = ["94715166712","94719574492"]







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://scontent.flhe2-2.fna.fbcdn.net/v/t39.30808-6/309426090_190887313321001_1488574502105225341_n.png?stp=dst-png_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=1cYYJOq7FY0AX8BuWOI&_nc_ht=scontent.flhe2-2.fna&oh=00_AfB9K80jbkGqd9nLrjyz-XPUWp4_VNC3TjynFFr__g0uHw&oe=63E173D2'
//other
global.pemilik = ['13322285281'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['13322285281'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Winsome Boy' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '🔵'


global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : 'You Are Promoted',
    DEMOTE : 'You Are Demoted'
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./Media/image/Elisa.jpg')
global.alivelogo = `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
