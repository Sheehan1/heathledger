const settings = require('../settings.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {

    const embed = new Discord.RichEmbed()
    .setTitle("Menu help ")
    .setColor("#5599ff")
    //.setDescription(`menu`)
    .setThumbnail("https://la7emeseance.files.wordpress.com/2013/04/bc4.jpg")
    .addField("Les différentes commande disponnible pour le peuple  ","*sondage <question>  ")  
    .addField("Commandes modération","*clear <Nombre de messages>..suite à venir")
    //.setFooter(`Sondage par: ${message.author.username}`, `${message.author.avatarURL}`)
    .setTimestamp()
   //
//return message.reply(`\n${settings.prefix}Help - Menu Help \n${settings.prefix}Sondage <Question>\n${settings.prefix}-Clear <nombre de message> \n**[C'EST TOUT POUR LE MOMENT]**`)
message.channel.send({embed});
}
