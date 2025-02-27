const { RichEmbed } = require("discord.js");

module.exports = {
    name: "suggest",
    aliases: ["suggestion", "Suggest"],
    category: "moderation",
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();

        const Discord = require("discord.js")
        let ambed = new Discord.RichEmbed()
        .setDescription("❓ Nothing to suggest?")
        .setFooter("Example: /suggest a cursed command")

        if (args.length < 1)
            return message.channel.send(ambed).then(m => m.delete(5000));

            const embed = new RichEmbed()
                .setDescription(args.slice(0).join(" "))
                .setColor("RANDOM")
                .setTimestamp()
                .setAuthor(message.author.username, message.author.displayAvatarURL)
                .setFooter(`@${message.author.tag}`);

        const suggest = client.guilds.get("692597757998923827")
        const server = client.channels.get("693278649079562261")
        
                
        server.send(embed);

        message.reply("Your suggestion has been registered in our system and we'll be looked at. We thank you for cooperation").then(m => m.delete(6000));
    }
}