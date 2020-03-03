const { RichEmbed } = require("discord.js");

module.exports = {
    name: "help",
    category: "info",
    description: "Helps",
    run: async (client, message, args) => {
        let embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle("**__COMMANDS__**")
            .setDescription("**PREFIX:** \`/\`")
            .addField("Meme", "Sends a meme")
            .addField("FN store", "Shows fortnite shop")
            .addField("Suggest", "Sends link to suggestion form")
            .addField("Cat", "Sends Cat pictures")
            .addField("Cars", "Sends Car pics")
            .addField("Insta", "You can check people's instagram accounts")
            .addField("Report", "You can report people")
            .addField("FN Stats", "Shows a players stats. (EPIC USERNAME ONLY)")
            .addField("Dog", "sends a picture of a dog")
            .addField("8ball", "Ask 8ball some questions")
            .addField("Urban", "Search on Urban dictionary")
            .addField("Weatherc", "you can check the weather by this command (In Celcius)")
            .addField("Weatherf", "you can check the weather by this command (In Fahrenheit)")
            .addField("Cheese", "Sends photos of Cheese")
            .addField("Joke", "Gives you a dad joke. *funny*")
            .addField("Warn", "Warns a user and logs it in #warn-logs")
            .addField("botinfo", "Gives information about Armini")
            .addField("Study", "Sends a Studying Message to the mentioned user")
            .addField("Geton", "Sends a DM to the mentioned user to get on")
            .addField("iceage", "Sends a ice age baby picture 💙")
        message.channel.send(embed);
    }
}