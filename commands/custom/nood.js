const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports = {
    name: "nood",
    category: "fun",
    description: "brug",
    run: async (client, message, args) => {
        message.delete()
        var answers = [
            "https://www.instagram.com/p/B9qcHFIAirQ/",
            "https://www.instagram.com/p/B9upWFqArE7/",
            "https://www.instagram.com/p/B9qnyozA0TS/",
            "https://www.instagram.com/p/B9qefMhAlnL/",
            "https://www.instagram.com/p/B9qdbCKgJfY/"
          ]

        var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

        let ambed = new Discord.RichEmbed()
        .setDescription("🔒 This is not a NSFW channel")

        if (message.channel.nsfw === true) {
            message.channel.send(randomAnswer);
        } else {
            message.channel.send(ambed).then(m => m.delete(5000));
        }
    }
}
