const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json').token;
const token = 'MjQzODQ5NDE5MzQxMDM3NTY5.De8TvQ.msKJeBk6yyDhhPQnbLt4D9UiE5k';
const prefix = require ('./settings.json').prefix;
const chalk = require('chalk');
const moment = require('moment');
require('./util/eventLoader')(client);


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.on('message', message => {
  let args = message.content.split(' ').slice(1);
  var result = args.join(' ');

  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'join')) {
		let voiceChan = message.member.voiceChannel;
		if (!voiceChan || voiceChan.type !== 'voice') {
			message.channel.sendMessage('No').catch(error => message.channel.sendMessage(error));
		} else if (message.guild.voiceConnection) {
			message.channel.sendMessage('I\'m already in a voice channel');
		} else {
			message.channel.sendMessage('Joining...').then(() => {
				voiceChan.join().then(() => {
					message.channel.sendMessage('Joined successfully.').catch(error => message.channel.sendMessage(error));
				}).catch(error => message.channel.sendMessage(error));
			}).catch(error => message.channel.sendMessage(error));
		}
	} else

	if (message.content.startsWith(prefix + 'leave')) {
		let voiceChan = message.member.voiceChannel;
		if (!voiceChan) {
			message.channel.sendMessage('I am not in a voice channel');
		} else {
			message.channel.sendMessage('Leaving...').then(() => {
				voiceChan.leave();
			}).catch(error => message.channel.sendMessage(error));
		}
	}
});

client.login(token);