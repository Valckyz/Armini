const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "secks",
    aliases: [""],
    category: "fun",
    description: "Sends an epic cheese",
    run: async (client, message, args) => {
        // In this array, 
        // you can put the subreddits you want to grab memes from
        const subReddits = ["hotcelebs"];
        // Grab a random property from the array
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];


        // Get a random image from the subreddit page
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        if (message.channel.nsfw === true) {
            message.channel.send(embed);
        } else {
            message.channel.send("This isn't NSFW channel!"
            )}
    }
    }