const { RichEmbed } = require("discord.js");

module.exports = {
    name: "communicate",
    aliases: ["talk", "Commiunicate"],
    category: "moderation",
    description: "allowing communications to dev via Discord command",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();

        const Discord = require("discord.js")
        let ambed = new Discord.RichEmbed()
        .setDescription("❓ Nothing to say?")
        .setFooter("Example: /talk your bot is great!")

        if (args.length < 1)
            return message.channel.send(ambed).then(m => m.delete(5000));

            const embed = new RichEmbed()
                .setDescription(args.slice(0).join(" "))
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter(`@${message.author.tag}`)
                .setAuthor(message.author.username, message.author.displayAvatarURL);

        const suggest = client.guilds.get("692597757998923827")
        const server = client.channels.get("693306554706952222")
        
                
        server.send(embed);

        message.reply("Your message has been sent to the developer. We thank you for your cooperation").then(m => m.delete(6000));
    }
}