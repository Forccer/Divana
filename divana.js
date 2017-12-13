const Discord = require("discord.js");
const client = new Discord.Client();
const handler = require('./handlers/msghandler')
const msghandler = handler.msghandler
exports.client = client;
exports.prefix = 'div' //s
/*
const config = require("./config.json");
const fs = require("fs");
var giphy = require('giphy-api')();
client.login(config.token);
*/

//declare everything here
    //set the prefix here
    let prefix = "config.prefix";


//check bot status
    //print that the bot has started
client.on("ready", () => {
    console.log("Bot successfully started!");
});

//read a user message
client.on('message', msg => {
    msghandler(msg, '!', client)
    
    if(command ==="meme"){
        giphy.random('meme', function (err, res) {
            message.channel.send(res["data"].url);
        });
    }
/*
    if(command === "ting"){
                giphy.random('mans not hot', function (err, res) {
            message.channel.send(res["data"].url);
        });
    } */

});
client.login('MzkwNTAxMDI1ODI5NzQ4NzM2.DRLB8A.bJfpUbfP9yxqPTGxTARd-VBrTRI')
