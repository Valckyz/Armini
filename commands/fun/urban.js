const Discord = require("discord.js");
const urban = require("urban");

module.exports = {
    name: "urban",
    category: "fun",
    description: "asks urban",
    run: async (client, message, args) => {
        message.delete()

        let ambed2 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("❓ Please enter something!")
    if(args.length < 1) return message.reply(ambed2).then(m => m.delete(5000));
    let XD = args.join(" "); 

    let ambed3 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("❌ No results found!")
    urban(XD).first(json => {
        if(!json) return message.channel.send(ambed).then(m => m.delete(5000));

        let urbEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(json.word)
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setDescription(json.definition)
        .addField("Upvotes", json.thumbs_up, true)
        .addField("Downvotes", json.thumbs_down, true)
        .setFooter(`Written by: ${json.author}`);

        let ambed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("🔒 **This is not a NSFW Channel**")
        .setFooter("*This command only works in NSFW Channels*")

        if (message.channel.nsfw === true) {
            message.channel.send(urbEmbed);
        } else {
            message.channel.send(ambed).then(m => m.delete(5000));
        }
    });
}


}