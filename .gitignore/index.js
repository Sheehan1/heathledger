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
        message.channel.sendMessage("Liste des commandes: \n *help \n *Créateur \n *embed \n *Sondage");
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
  .addField("*help \n *Créateur \n *Embed.","Commande de sondage en cours ..")
         .setTimestamp()
  message.channel.send({embed});
     }
  if(message.content.startsWith(prefix + "Sondage")){
        if(message.member.hasPermission("BAN_MEMBERS")) {
			
			let args = message.content.split(" ").slice(1);
			let thingToEcho = args.join(" ")
			var sond = new Discord.RichEmbed()
			    .setDescription('Sondage')
				.addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
				.setColor("0xB40404")
				.setTimestamp()
			message.channel.sendEmbed(embed)
			.then(function (message){
				message.react("?")
				message.react("?")
			}).catch(function(){
				
			});
			message.delete()
		}else{
			return message.reply("Tu n'as pas la permission.")
        }
    }
  
});

