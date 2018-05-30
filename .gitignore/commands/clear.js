const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let messagecount = parseInt(args.join(' '));
    
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        message.channel.fetchMessages({
            limit: messagecount
        }).then(messages => message.channel.bulkDelete(messages));
    
        if (isNaN(args[0])){
            message.channel.send('Merci de Préciser le nombre de message.\n Usage-> *clear <nombre de message>');
            return;
        
        }
    }else {
        return message.reply("Tu n'as pas la permission.")
    }

};
