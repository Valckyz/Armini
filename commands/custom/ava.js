const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports = {
    name: "ava",
    category: "fun",
    description: "brug",
    run: async (client, message, args) => {
        message.delete()
        var answers = [
            "https://www.instagram.com/p/B93__O8gW9L/",
            "https://www.instagram.com/p/B90BA-jg3rb/",
            "https://www.instagram.com/p/B9yn3aXgUd-/",
            "https://www.instagram.com/p/B9r_5G8geLa/",
            "https://www.instagram.com/p/B9kP4Osg9OT/",
            "https://www.instagram.com/p/B8XNOnnp5Hk/",
            "https://www.instagram.com/p/B9DDi0FpDRH/",
            "https://www.instagram.com/p/B9muSUQpu8c/"
          ]

        var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

            message.channel.send(randomAnswer);
    }
}
