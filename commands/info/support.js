const { RichEmbed } = require("discord.js");

module.exports = {
    name: "support",
    aliases : ["Support", "donate"],
    category: "moderation",
    description: "If you wish to support the bot",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();

            const embed = new RichEmbed()
                .setColor("RANDOM")
                .setTitle("Do you want to support the bot?")
                .setDescription("Well if you wish to do so you can support the bot either by")
                .addField('Joining our discord server', 'https://discord.gg/T75mZbn', true)
                .addField('or by donating', 'https://www.paypal.com/paypalme2/LitrexTiper', true)
                .setTimestamp()

        message.channel.send(embed);
    }
}