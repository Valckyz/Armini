const Discord = require('discord.js');
const fs = require("fs");

module.exports = {
    name: "warn",
    aliases: ["warning"],
    category: "moderation",
    description: "Gives users warning",
    usage: "<input>",
    run: (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premission to do that!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.');
  if (reason.length < 1) return message.reply('You must have a reason for the warning.');

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Warning")
  .setColor("#00ff00")
  .setDescription(`You have been warned on \`${message.guild.name}\``)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason);

  user.send(dmsEmbed);

  message.delete();
  const channel = message.guild.channels.find(c => c.name === "warn-logs")
            
  // No channel found
  if (!channel)
      return message.channel.send("Couldn't find a `#warn-logs` channel").then(m => m.delete(5000));

    let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

    let RichEmbed = new Discord.RichEmbed()
    .setTitle("Warning Log")
    .setColor("RANDOM")
    .setDescription(`${rMember} (${user.tag}) has been warned`)
    .addField("**Warned by**", `${message.member}`)
    .addField("**Reason**", reason)
    .addField("**Warned in**", `${message.channel}`)

    return channel.send(RichEmbed).then(messageReaction => {
      messageReaction.react('✅')
    })

}
}
