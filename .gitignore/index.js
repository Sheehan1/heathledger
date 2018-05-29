const Discord = require('discord.js')
const bot = new Discord.Client()
 
var prefix = ("*")
bot.on('ready', function () {
    bot.user.setGame("Command: *help");
    console.log("Je suis connecté !");
});

bot.login(process.env.TOKEN);
bot.on('message', message => {
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
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
            .setAuthor("Sa majesté ", "https://man-man.nl/app/uploads/2017/01/Peaky-Blinders-Thomas-Shelby-MAN-MAN.jpg")
            .setColor(0x00AE86)
            .setDescription("Voici un récap des commandes.")
            .setFooter("Crée par Sheehan")
            .setImage("https://man-man.nl/app/uploads/2017/01/Peaky-Blinders-Thomas-Shelby-MAN-MAN.jpg")
            .addField("*help \n *Créateur \n *Embed.","")
  
  message.channel.send({embed});
     }
     if (message.content.startsWith === (prefix + "Sondage")) { 
        let question = args.slice(0).join(" ");
        if (args.length === 0)
        return message.reply('**Mauvais format** `*Sondage <Question>`')
        let args = message.content.split(" ") .slice(1);
            var sond = new DiscordRichEmbed()
            .setTitle("Un sondage a commencer")
           .setColor(0x00AE86) 
           .setDescription(`${question}`)
            .setFooter(`Sondage Proposée par: ${message.author.username}`,`${message.author.avatarURL}`)
             message.channel.send({sond})          
                  message.react('👍')
                  .then(() => message.react('👎'))
                  .then(() => message.react('🤷'))                 
                  .catch(() => console.error('Emoji failed to react.'));
            }
            });
