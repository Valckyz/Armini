const { RichEmbed } = require("discord.js");

module.exports = {
    name: "communicate",
    aliases: ["talk", "Commiunicate"],
    category: "moderation",
    description: "allowing communications to dev via Discord command",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();

        if (args.length < 1)
            return message.reply("Nothing to say?").then(m => m.delete(5000));

            const embed = new RichEmbed()
                .setDescription(args.slice(0).join(" "))
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter(`${message.author.tag}`)
                .setAuthor(message.author.username, message.author.displayAvatarURL);

        const suggest = client.guilds.get("675551961545965600")
        const server = client.channels.get("686353482701209613")
        
                
        server.send(embed);

        message.reply("Your message has been sent to the developer. We thank you for your cooperation").then(m => m.delete(6000));
    }
}