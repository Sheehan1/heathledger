/*module.exports = member => {
  let guild = member.guild;
  let role = member.guild.roles.find(`${member.user.username}`, "Peuple");
    member.addRole(role).catch(console.error);

  guild.defaultChannel.sendMessage(`Bienvenue ${member.user.username} dans la secte `);
};*/
module.exports = member => {
  const guild = member.guild;
  const channel = guild.channels.find('name','général')
  if (!channel) return;
  channel.send(`Bienvenue dans la secte, ${member}`);
 
};