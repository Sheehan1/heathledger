const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = ("*")
bot.on('ready', function () {
    bot.user.setGame("Command: *help");
    console.log("Je suis connecté !");
});

bot.login(process.env.TOKEN);
bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: \n *help \n *Créateur \n *embed");
    }

    if (message.content === "Salut") {
        message.reply("Bien le Bonjours. :)");
        console.log("Commande Salut effectué ");
    }

    if (message.content === prefix + "Créateur") {
        message.channel.sendMessage("J'ai été créé par Majesté. ");
    }
    if (message.content === prefix + "embed") {
        var embed = new Discord.RichEmbed()
            .setTitle("EMBED")
            .setDescription("Ceci est un embed")
            .addField(".help", "Page d'aide", true)            
            .setColor("#0B0B61")
            .setFooter("Bon Moment parmis nous! :)")
        MessageChannel.sendMessage(embed);
        console.log("Commande Embed effectué!");
     }

});
