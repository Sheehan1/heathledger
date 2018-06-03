const settings = require('../settings.json');


exports.run = (client, message, args) => {

return message.reply(`\n${settings.prefix}Help - Menu Help \n${settings.prefix}sondage <Question>\n${settings.prefix}clear <nombre de message> \n**[C'EST TOUT POUR LE MOMENT]**`)

}
