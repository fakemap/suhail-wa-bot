const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Nigeria,Osun,Oshogbo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Osun,Oshogbo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaeW5vf05MUaVgitg30e";
global.website=process.env.GURL || "null" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "null" || "null" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Batman-MD" 


global.devs = "923257607934" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923257607934,923245643588,923005705557";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923257607934";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "null" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_59_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDcyLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUwLFxuICAgICAgICA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgODgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlB5emgrUHUrMTVMclNIdTdoL3lBYjBBdlUxRXdGVVFsWGZ2ZlJnNDBZOWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpnLVRubnd6UW11X3RPczk4dWd1d0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTVhYTQ4OTQtZDk3Ni00ZGQwLWE3MDAtYjg4ZGZmYzA0ZmFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDI4LFxuICAgICAgMzEsXG4gICAgICAxMzQsXG4gICAgICAyNDgsXG4gICAgICAyNDEsXG4gICAgICA0OCxcbiAgICAgIDE0NyxcbiAgICAgIDk4LFxuICAgICAgMTI2LFxuICAgICAgMjA3LFxuICAgICAgMjE4LFxuICAgICAgNDEsXG4gICAgICAxMzAsXG4gICAgICAxMjMsXG4gICAgICAxMDksXG4gICAgICAxODEsXG4gICAgICA1OCxcbiAgICAgIDE5OSxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDQ5LFxuICAgICAgMzAsXG4gICAgICAzMCxcbiAgICAgIDEwMSxcbiAgICAgIDE1MixcbiAgICAgIDM1LFxuICAgICAgMzcsXG4gICAgICAxMzYsXG4gICAgICA1MyxcbiAgICAgIDc2LFxuICAgICAgMjE3LFxuICAgICAgNzYsXG4gICAgICA5NixcbiAgICAgIDQwLFxuICAgICAgNTYsXG4gICAgICAxNzcsXG4gICAgICAxOCxcbiAgICAgIDE4MCxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZTNzhNQUZWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNTc2MDc5MzQ6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNjUyNzI2MTAzNjY0ODozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPN2RzNWdERU91Mi9MWUdHQTRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlh6V202UXM2dE4zaGY4UW95UUxuckpjeVFCd1JLeWtoVDVDdEZTa1FDMlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRHp5VXhvK2I1a2VBcTFjWWVRRGlMM1R1dlhGWUVHVTM3L09ibVM3WkthWlV5M291TFhJVmJ3OVJiL3A1bkFkUGNLVk5DcHVMN2ovTXVDZmJGK0dHQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidEExMmU2TzRaOHZOclozMkFIWXBBTXFZZEFXRmNiL1VmbE9yVHZuTzFoZDhwL1FYUzdNZFp5YlEzcnpWUzlQdjhmZ3lCeGZYc1grUndvMXJRdFhuaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjU3NjA3OTM0OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU4OTc1ODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPR3BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9HcC5qc29uIjogIntcImtleURhdGFcIjpcIjlMTi9CVUhiRnY1TFZUZ244UTkwVEhTRzQ0eFAweEdMVkNNRUxmQkI5WWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODU"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝘼𝙃𝙈₇ 𝙎𝙩𝙞𝙘𝙠𝙚𝙧𝙨",
  packname: process.env.PACK_NAME || "Made By",
  botname : process.env.BOT_NAME  || "Batman-MD",
  ownername:process.env.OWNER_NAME|| "★彡[Muhammad Makki]彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ADAM"  ).toUpperCase(),



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
