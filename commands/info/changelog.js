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
    .addField("Version:", `🤖4.1`, inline)
    .addField("Date:", "3/3/20", inline )
    .addField("Change #1", "New \`/cursed\` command")
    .addField("Change #2", "Fixed Suggestion command")
    .addField("Change #3", "Fixed \`/warn\` glitches")
    .setFooter(`© ${bot.user.username} 2020. Developed with ❤ by  Valckyz`)
    .setTimestamp()
    
    message.channel.send(botembed);

}
}
