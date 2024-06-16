const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348036399544";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_38_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICA1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDc5LFxuICAgICAgICA3LFxuICAgICAgICAxODksXG4gICAgICAgIDUwLFxuICAgICAgICAxODksXG4gICAgICAgIDYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTGhvZFRCSHFzSTV5MmZHUnNWZ0tmZEkyTzZvMVc3TThGSjRMdVlJY2p4Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOG9hd1g2dkhUa2l5Wm1CYWMtTzBvZ1wiLFxuICBcInBob25lSWRcIjogXCJiOGQ5NmJkOC00ODBjLTQzZGEtOTUwMS0yODFmMGExNTY3NzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk4LFxuICAgICAgNjIsXG4gICAgICAxNzEsXG4gICAgICAxNzQsXG4gICAgICA5NixcbiAgICAgIDI1MCxcbiAgICAgIDEzOSxcbiAgICAgIDQyLFxuICAgICAgOTEsXG4gICAgICAxODEsXG4gICAgICAyNDAsXG4gICAgICAxODMsXG4gICAgICAyMDcsXG4gICAgICAyNTMsXG4gICAgICA4OCxcbiAgICAgIDI0MixcbiAgICAgIDIyNSxcbiAgICAgIDg1LFxuICAgICAgNzcsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICAxOTksXG4gICAgICAyNTIsXG4gICAgICAxNTIsXG4gICAgICAxNzksXG4gICAgICAyMjYsXG4gICAgICAzOCxcbiAgICAgIDE2LFxuICAgICAgNTksXG4gICAgICAxODIsXG4gICAgICAxMTQsXG4gICAgICAxNjEsXG4gICAgICAxNjQsXG4gICAgICAyMTIsXG4gICAgICA0LFxuICAgICAgMjE1LFxuICAgICAgMyxcbiAgICAgIDM4LFxuICAgICAgMTExLFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTRaSkpHSFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzYzOTk1NDQ6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMyNDAyNTI1ODgyMDk6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRzZ3SVFERUtxZHU3TUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIko3QUZENytGMTJnUjFnbU0vb0QzSmtyNEJnSTR3aXhmMFRva1hMdG84SFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOG55SU9qMWxzemNQNDZUd0pVajFPU3hwTzdvOXJkTENyb1ZvQUN0R2hGMTdGUkVsRGFITG02UXhodm9rZ1MybkRQK1ZqcGhlK1A4aWZpMHhpQlhLQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNE9TTEVKY00wOWpCUFd6M3UvdnRLc3E2czNkTEZzUjdURHJ5S0lvSFVrMjFUQnQwNjEvcndXRStXZE5SMnpIYkh4ZjVFTlhCNDh1YzhseXcrVlkwaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzNjM5OTU0NDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg1Mzc5MDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBaEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFoRS5qc29uIjogIntcImtleURhdGFcIjpcIkZBTkRwRm9kbDJSaGhIOXhJRnV6UXF5c2NzQkxWNS92Z3JsTFUyUkF3RWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODE0NzUxMDg5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY5MDc3NzM2MDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
