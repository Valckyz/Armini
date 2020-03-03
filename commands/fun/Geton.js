const Discord = require("discord.js");

module.exports = {
    name: "geton",
    aliases: ["Geton", "join"],
    category: "fun",
    run: async (client, message, args) => {
        let game = args.slice(1).join(' ');
        if (game.length < 1) return message.reply('You must say what game or application you want them to get on');
        let user = message.mentions.users.first();
        let dmsEmbed = new Discord.RichEmbed()
        .setTitle("GET ON!!!!!")
        .setColor("RANDOM")
        .setDescription(`You should get on and play with us`)
        .addField("**Game**", game)
        .addField("Told by", message.author.tag)

message.delete();

user.send(dmsEmbed);
    }
}
