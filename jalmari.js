const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

//Configuration file
const config = require('./config.json');

client.on("ready", () => {
    console.log("Jalmari is up and running!!");
});

client.on("message", (message) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    

    if(!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.content.startsWith(config.prefix +"ping")) {
        message.channel.send("Pong!");
    };

    if(message.author.id !== config.ownerID) return;

    if(message.content.startsWith(config.prefix + "help")) {
        message.channel.send(config.helpmsg);
    };


    if (message.content.startsWith(config.prefix +"fingerpori")) {
        message.channel.send({
            "embed": {
                "title": "Fingerpori of the day (FOTD)",
                "description": "Heimo vesa ja seikkailut.",
                "url": "http://www.iltalehti.fi/fingerpori/",
                "color": 1906294,
                "footer": {
                "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                "text": "Provided by Jalmari"
                },
                "image": {
                "url": "https://i.imgur.com/OxW6yrB.png"
                }
            }
        });
    }
});

client.login(config.token); 