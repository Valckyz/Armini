const Discord = require("discord.js");

module.exports = {
    name: "geton",
    aliases: ["Geton", "join"],
    category: "fun",
    run: async (client, message, args) => {
        message.delete()
        let game = args.slice(1).join(' ');
        let ambed = new Discord.RichEmbed()
        .setDescription("❌ You must mention a user and a game you want them to get online on")
        .setFooter("Example: /geton @valckyz Call of duty")
        if (game.length < 1) return message.channel.send(ambed).then(message => message.delete(5000))
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
