const Discord = require('discord.js');
const fs = require("fs");

module.exports = {
    name: "warn",
    aliases: ["warning"],
    category: "moderation",
    description: "Gives users warning",
    usage: "<input>",
    run: (client, message, args) => {
      message.delete()
      let ambed = new Discord.RichEmbed()
      .setDescription("❌ You do not have permissions to do that")
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(ambed).then(m => m.delete(5000));
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let ambed2 = new Discord.RichEmbed()
  .setDescription("❌ You must mention someone to warn them.")
  if (message.mentions.users.size < 1) return message.channel.send(ambed2).then(m => m.delete(5000));
  let ambed3 = new Discord.RichEmbed()
  .setDescription("❌ You must have a reason for the warning.")
  if (reason.length < 1) return message.channel.send(ambed3).then(m => m.delete(5000));

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Warning")
  .setColor("#00ff00")
  .setDescription(`You have been warned on \`${message.guild.name}\``)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason);

  user.send(dmsEmbed);

  message.delete();
  const channel = message.guild.channels.find(c => c.name === "logs")
            
  // No channel found
  let ambed4 = new Discord.RichEmbed()
  .setDescription("❌ Couldn't find a `#logs` channel")
  .setFooter("psst! Make sure you have a channel called logs!")
  if (!channel)
      return message.channel.send(ambed4).then(m => m.delete(5000));

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
