const reqEvent = (event) => require(`../events/${event}`)
module.exports = client => {
	client.on('ready', () => reqEvent('ready')(client));
	client.on('reconnection', () => reqEvent('reconnection')(client));
	client.on('deconnecter', () => reqEvent('deconnecter')(client));
	client.on('message', reqEvent('message'));
	client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
	client.on('guildMemberRemove', reqEvent('guildMemberRemove'));
	
};
