const { RichEmbed } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
    name: "bug",
    aliases : ["Bug"],
    category: "moderation",
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();
        
        const Discord = require("discord.js")
        let ambed = new Discord.RichEmbed()
        .setDescription("❓ Nothing to report?")
        .setFooter("Example: /bug cursed command broken")

        if (args.length < 1)
            return message.channel.send(ambed).then(m => m.delete(5000));

            const embed = new RichEmbed()
                .setDescription(args.slice(0).join(" "))
                .setColor("RANDOM")
                .setTimestamp()
                .setAuthor(message.author.username, message.author.displayAvatarURL);

        const suggest = client.guilds.get("675551961545965600")
        const server = client.channels.get("685327744128778240")
        
                
        server.send(embed);

        message.reply("Your bug report has been registered in our system and we'll be looked at. We thank you for cooperation").then(m => m.delete(6000));
    }
}