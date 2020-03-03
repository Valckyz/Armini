const Discord = require("discord.js");

module.exports = {
    name: "Study",
    aliases: ["study"],
    category: "fun",
    description: "brug",
    run: async (client, message, args) => {
        let user = message.mentions.users.first();
        let dmsEmbed = new Discord.RichEmbed()
        .setTitle("Study!!!!!")
        .setColor("RANDOM")
        .setDescription(`You should go study`)
        .addField("Told by", message.author.tag)

message.delete();

user.send(dmsEmbed);
    }
}