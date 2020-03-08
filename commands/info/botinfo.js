const Discord = require("discord.js");

module.exports = {
    name: "botinfo",
    category: "info",
    description: "Bot information",
    run: async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Bot Name", `🤖 ${bot.user.username}`, inline)
    .addField("Bot Owner", "👨‍💼 <@240285932459130881>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `🙍‍♂️ ${usersize}`, inline)
    .addField("Current Version", `1.2`, inline)
    .addField("Project started on", "Sun Jan 12 2020")
    .setFooter(`© ${bot.user.username} 2020. Developed with ❤ by  Valckyz`)
    .setTimestamp()
    
    message.channel.send(botembed);

}
}
