const Discord = require('discord.js')
const bot = new Discord.Client()
const low = require('lowdb')
const fileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()
var prefix = ("*")
bot.on('ready', function () {
    bot.user.setGame("Command: *help");
    console.log("Je suis connecté !");
});

bot.login(process.env.TOKEN);
bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: \n *help \n *Créateur \n *embed");
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
  .addField("*help \n *Créateur \n *Embed.")
  message.channel.send({embed});
     }
 if (!db.get("xp").find({user: msgauthor}).value()) {
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    } else {
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'xp: ${userxp[1]}`)

        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
        if (message.content === prefix + "level") {
            var xp = db.get("xp").filter({user: msgauthor}).find('xp').value();
            var xpfinal = Object.value(xp);
            var xp_embed = new Discord.RichEmbed()
                .setTitle(`Stat des XP de ${message.author.username}`)
                .setColor(`#000029`)
                .setDescription("Affichage des XP")
                .addField("XP:", `${xpfinal[1]}`)
                .setFooter("voilà")
            message.channel.send({ embed: xp_embed });
        }
    }
});
