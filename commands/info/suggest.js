const { RichEmbed } = require("discord.js");

module.exports = {
    name: "suggest",
    category: "info",
    description: "Sends suggestion form link",
    run: async (client, message, args) => {
        let embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle("**Suggestion Form**")
            .setDescription("► Have a suggestion for the bot? You think something would be better with your idea? Well we take your word seriously here so please suggest here")
            .addField("Link", "https://docs.google.com/forms/d/e/1FAIpQLSfvVNMH7zzxuPOI_hSSGRdtu2H6lnx9myEbV0MiwnwwD2wR3A/viewform")
        message.channel.send(embed);
    }
}