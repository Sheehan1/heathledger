const Discord = require('discord.js');
exports.run = (client, message, args) => {
 if (message.member.hasPermission("BAN_MEMBERS")) {
    let ThingToEcho= args.slice(0).join(" ");

    if (args.length === 0)
    return message.reply('**Mauvais formatt:** `*Sondage<Question>`')
  
    const embed = new Discord.RichEmbed()
    .setTitle("Nouveau Sondage!")
    .setColor("#5599ff")
    .setDescription(`Sondage`)
    .setImage("http://www.loiso.fr/wp-content/uploads/2018/03/sondage4-300x300.jpg")
    .addField(ThingToEcho,"Répondre avec :thumbsup: ,:shrug:, :thumbsdown:")    
    .setFooter(`Sondage par: ${message.author.username}`, `${message.author.avatarURL}`)
    .setTimestamp()
    //message.channel.send({embed})
    client.channels.get('451140180108115979').send({embed})
   //client.channels.get(451140180108115979).sendMessage({embed})
   .then(function( message){
         message.react('👍')
         message.react('👎')
         message.react('🤷')
   }).catch(function( ){ console.error('Emoji failed to react.'); 
});
   message.delete(500)

        } else {
            return message.reply("Tu n'as pas la permission.")
        }
    }
