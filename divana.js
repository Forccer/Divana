/*
====================
This is the main bot file
[D] dathappysheep#6683 #6883
[E] m.rumsey@hotmail.com
====================
*/
const Discord = require("discord.js");
const client = new Discord.Client();

const msgprehandler = require('./handlers/msghandler')
const msghandler = msgprehandler.msghandler
const guiildmemberaddprehandler = require('./handlers/memadd')
const gmemadd = guiildmemberaddprehandler.memadd
const prefix = '#'
/*
const config = require("./config.json");
const fs = require("fs");
var giphy = require('giphy-api')();
client.login(config.token);
*/

//declare everything here
    //set the prefix here

//Bots status and game
client.on("ready", () => {

    //Bot status
    client.user.setStatus('Online')

    //Bot's game
    client.user.setGame('#help for help')
    })

//check bot status
    //print that the bot has started
client.on("ready", () => {
    console.log("Bot successfully started!");
});

//Welcome Message
client.on("guildMemberAdd", member => {
  gmemadd(member, client)
  /*
    const channel = member.guild.channels.find('name', 'general')
    if(!channel) return
    channel.send(`Welcome to server, ${member}. Please read #rules and dm DMforSupport for help`)

    newUsers.set(member.id, member.user)

    if(newUsers.size > 3) {
      const userlist = newUsers.map(u => u.toString()).join(" ")
      guild.defaultChannel.send("Welcome, " + userlist + " to the server. \n Please read #rules and dm DmforSupport for help")
      newUsers.clear
    }
    */
});

//read a user message
client.on('message', msg => {
    msghandler(msg, prefix, client)

 /*   if(command ==="meme"){
        giphy.random('meme', function (err, res) {
            message.channel.send(res["data"].url);
        });
    }

    if(command === "ting"){
                giphy.random('mans not hot', function (err, res) {
            message.channel.send(res["data"].url);
        });
    } */

});
client.login('MzkwNTAxMDI1ODI5NzQ4NzM2.DRLB8A.bJfpUbfP9yxqPTGxTARd-VBrTRI')
