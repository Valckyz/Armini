const Discord = require("discord.js");

module.exports = {
    name: "changelog",
    category: "info",
    description: "Displays Changelog",
    run: async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Version:", `🤖1.4`, inline)
    .addField("Date:", "3/5/20", inline )
    .addField("Change #1", "made \`help\` command \*\*way cleaner\*\*")
    .addField("Change #2", "Fixed glitches")
    .setFooter(`© ${bot.user.username} 2020. Developed with ❤ by  Valckyz`)
    .setTimestamp()
    
    message.channel.send(botembed);

}
}
