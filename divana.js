const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
var giphy = require('giphy-api')();
client.login(config.token);


//declare everything here
    //set the prefix here
    let prefix = "config.prefix";


//check bot status
    //print that the bot has started
    client.on("ready", () => {
        console.log("Bot successfully started!");
    });

//read a user message
client.on('message', message => {
    if (!message.content.startsWith(config.prefix)) return;
    if(message.channel.type === 'dm') return;
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    let args = message.content.split(" ").splice(1);

    if(command === "ping"){
        message.channel.send("pong")
    }

    if(command ==="meme"){
        giphy.random('meme', function (err, res) {
            message.channel.send(res["data"].url);
        });
    }

    if(command === "ting"){
                giphy.random('mans not hot', function (err, res) {
            message.channel.send(res["data"].url);
        });
    }

});