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
            .addField("FN store", "Shows the current Fortnite shop")
            .addField("Suggest", "You can suggest stuff for the bot via this command")
            .addField("Cat", "Sends pictures of cats")
            .addField("Cars", "Sends pictures of cars")
            .addField("Insta", "You can check people's instagram accounts")
            .addField("Report", "You can report people via this command")
            .addField("FN Stats", "Shows a players stats in Fortnite")
            .addField("Dog", "Sends pictures of dogs")
            .addField("8ball", "Ask 8ball some questions")
            .addField("Urban", "Search on Urban dictionary")
            .addField("Weatherc", "you can check the weather by this command (In Celcius)")
            .addField("Weatherf", "you can check the weather by this command (In Fahrenheit)")
            .addField("Cheese", "Sends pictures of Cheese")
            .addField("Joke", "Sends a dad joke. *funny*")
            .addField("Warn", "Warns a user and logs it in #logs")
            .addField("botinfo", "Sends you information about Armini")
            .addField("Geton", "Sends a DM to the mentioned user to get on")
            .addField("iceage", "Sends a ice age baby picture 💙")
            .addField("cursed", "Sends cursed pictures")
            .addField("bug", "Report bug reports via this command")
            .addField("purge", "deletes a number of messages")
        message.channel.send(embed);
    }
}