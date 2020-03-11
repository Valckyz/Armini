const Discord = require("discord.js")
const { RichEmbed } = require("discord.js");


module.exports = {
    name: "avatar",
    aliases: ["logo"],
    category: "fun",
    description: "Sends mentioned user's avatar",
    usage: "<name>",
    run: async (client, message, args) => {
      message.delete();
      
      let msg = await message.channel.send("Generating avatar...");

      let mentionedUser = message.mentions.users.first() || message.author;
  
          let embed = new Discord.RichEmbed()
  
          .setImage(mentionedUser.displayAvatarURL)
          .setColor("00ff00")
          .setTitle("Avatar")
          .setFooter("Searched by " + message.author.tag)
          .setDescription(mentionedUser.displayAvatarURL)
  
          message.channel.send(embed)
  
  
      msg.delete();
  }
}