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
    .addField("Version:", `🤖1.3`, inline)
    .addField("Date:", "3/5/20", inline )
    .addField("Change #1", "New \`/communicate\` command which lets you communicate with the dev via the bot")
    .addField("Change #2", "Added \`/cursed`\ command which send cursed images")
    .addField("Change #3", "Fixed glitches")
    .setFooter(`© ${bot.user.username} 2020. Developed with ❤ by  Valckyz`)
    .setTimestamp()
    
    message.channel.send(botembed);

}
}
