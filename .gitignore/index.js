const Discord = require('discord.js')
const bot = new Discord.Client()
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;
var prefix = ("*")
bot.on('ready', function () {
    bot.user.setGame("Command: *help");
    console.log("Je suis connecté !");
});

bot.login(process.env.TOKEN);
bot.on('message', message => {
    
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: \n *help \n *Créateur \n *embed \n *Sondage <question>");
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
				.addField(thingToEcho, "Répondre avec :thumbsup: ,:shrug:, :thumbsdown:")
				.setColor("0xB40404")
				.setImage("http://www.loiso.fr/wp-content/uploads/2018/03/sondage4-300x300.jpg")
				.setTimestamp()
			.setFooter(`Sondage Par: ${message.author.username}`, `${message.author.avatarURL}`)
			message.channel.sendEmbed(sond)
			.then(function (message){
				message.react("👍")
				message.react("🤷")
				message.react("👎")
			}).catch(function(){
				
			});
			message.delete(500)
		}else{
			return message.reply("Tu n'as pas la permission.")
        }
    }
   if (message.channel.type === "dm") {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
});

