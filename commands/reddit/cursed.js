const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "cursed",
    category: "fun",
    description: "Sends an epic meme",
    aliases: ["Cursed"],
    run: async (client, message, args) => {
        // In this array, 
        // you can put the subreddits you want to grab memes from
        const subReddits = ["cursedimages"];
        // Grab a random property from the array
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        // Get a random image from the subreddit page
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}