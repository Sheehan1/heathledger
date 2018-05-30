const Discord = require('discord.js');
const client = new Discord.Client();
const settings = ('MjQzODQ5NDE5MzQxMDM3NTY5.De8TvQ.msKJeBk6yyDhhPQnbLt4D9UiE5k');
const prefix = require ('./settings.json').prefix;
//const chalk = require('chalk');
//const moment = require('moment');
require('./util/eventLoader')(client);


client.login(settings);

client.commands = new Discord.Collection();
//client.aliases = new Discord.Collection();
client.on('message', message => {
  let args = message.content.split(' ').slice(1);
  var result = args.join(' ');

});


