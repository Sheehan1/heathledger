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

bot.login("MjQzODQ5NDE5MzQxMDM3NTY5.De8TvQ.msKJeBk6yyDhhPQnbLt4D9UiE5k");
bot.on('message', message => {
    var msgauthor = message.author.id;

    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes: \n -*help\n-*level");
    }

    if (message.content === "Salut") {
        message.reply("Bien le Bonjours. :)");
        console.log("Commande Salut effectué ");

    }
    if (message.author.bot) return;

    if (!db.get("xp").find({user: msgauthor}).value()) {
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    } else {
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'xp: ${userxp[1]}`)

        db.get("xp").find({ user: msgauthor }).assign({user: msgauthor, xp: userxp[1] += 1}).write();
        if (message.content === prefix + "level") {
            var xp = db.get("xp").filter({ user: msgauthor }).find('xp').value();
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
