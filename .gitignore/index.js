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
        .setTimestamp()
  .setAuthor("Sa majesté ", "https://man-man.nl/app/uploads/2017/01/Peaky-Blinders-Thomas-Shelby-MAN-MAN.jpg")
  .setColor(0x00AE86)
  .setDescription("Voici un récap des commandes.")
  .setFooter("Crée par Sheehan")
  .setImage("https://man-man.nl/app/uploads/2017/01/Peaky-Blinders-Thomas-Shelby-MAN-MAN.jpg")
  .addField("*help \n *Créateur \n *Embed.","")
  message.channel.send({embed});
     }
     if (message.content.startsWith === (prefix + "Sondage")) {
        if (message.author.id =="† Sheitan dieu d'la pignole†"){
            let args = message.content.split(" ") .slice(1);
            let thingToEcho = args.join(" ")
            var sond = new DiscordRichEmbed()
            .setDescription("Sondage")
            .setField(thingToEcho, "Répondre avec :white_check_mark ou :x:")
            .setColor(0x00AE86)
            .setTimestamp()
            message.guild.channels.find("name", "général").sendEmbed(sond)
            .then(function (message){
                  message.react(":white_check_mark: ")
                  message.react(":x:")
            }).catch(function(){
            });
            }else {
                return message.reply("tu n'as pas la permission")
            }
            }
        
});
