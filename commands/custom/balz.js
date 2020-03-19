const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports = {
    name: "balz",
    category: "custom",
    description: "Balz's command just to piss him off",
    run: async (client, message, args) => {
        message.delete()
        
        var videos = [
            "https://www.instagram.com/p/B94T2ICJqoI/",
            "https://www.instagram.com/p/B9630HfFVRq/",
        ]

        var randomVideos = videos[Math.floor(Math.random() * videos.length)];

        let ambed = new Discord.RichEmbed()
        .setDescription("🔒 This command is locked only to Potatobalz")

        if(message.member.roles.find("name", "balz")) {
            message.channel.send(randomVideos);
    } else {
        message.channel.send(ambed).then(m => m.delete(5000));

    }

    }
}
