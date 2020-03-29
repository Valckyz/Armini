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
                .setAuthor(message.author.username, message.author.displayAvatarURL)
                .setFooter(`@${message.author.tag}`);

        const suggest = client.guilds.get("692597757998923827")
        const server = client.channels.get("693306255929770077")
        
                
        server.send(embed);

        message.reply("Your bug report has been registered in our system and we'll be looked at. We thank you for cooperation").then(m => m.delete(6000));
    }
}