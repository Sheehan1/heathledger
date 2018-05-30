module.exports = member => {
    const guild = member.guild;
    const channel = guild.channels.find('name','général')
    if (!channel) return;
    channel.send(`Hop trace ta race, ${member}`);
   
  };
