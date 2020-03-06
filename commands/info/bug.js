const { RichEmbed } = require("discord.js");

module.exports = {
    name: "bug",
    aliases : ["Bug"],
    category: "moderation",
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();

        if (args.length < 0)
            return message.reply("Nothing to say?").then(m => m.delete(5000));

            const embed = new RichEmbed()
                .setDescription(args.slice(0).join(" "))
                .setColor("RANDOM")
                .setTimestamp()
                .setAuthor(message.author.username, message.author.displayAvatarURL);

        const suggest = client.guilds.get("675551961545965600")
        const server = client.channels.get("685327744128778240")
        
                
        server.send(embed);
    }
}