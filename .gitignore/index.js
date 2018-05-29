const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = ("*")
bot.on('ready', function () {
    bot.user.setGame("Command: *help");
    console.log("Je suis connecté !");
});

bot.login("MjQzODQ5NDE5MzQxMDM3NTY5.De8TvQ.msKJeBk6yyDhhPQnbLt4D9UiE5k");
bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut") {
        message.reply("Bien le Bonjours. :)");
        console.log("Commande Salut effectué ");

    }
});
