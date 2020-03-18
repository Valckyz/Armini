const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const Discord = require("discord.js")

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        // If the bot can delete the message, do so
        if (message.deletable) message.delete();

        // Either a mention or ID
        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No person found
        let ambed3 = new Discord.RichEmbed()
        .setDescription("❌ Couldn't find that person?")
        .setFooter("Psst! Make sure you are mentioning someone")
        if (!rMember)
            return message.channel.send(ambed3).then(m => m.delete(5000));

        // The member has BAN_MEMBERS or is a bot
        let ambed2 = new Discord.RichEmbed()
        .setDescription("❌ Can't report that member")
        .setFooter("They are too high in the hierarchy")
        if (rMember.hasPermission("ADMINISTRATOR"))
            return message.channel.send(ambed2).then(m => m.delete(5000));

        // If there's no argument
        let ambed1 = new Discord.RichEmbed()
        .setDescription("❌ Please provide a reason for the report")
        if (!args[1])
            return message.channel.send(ambed1).then(m => m.delete(5000));
        
        const channel = message.guild.channels.find(c => c.name === "reports")
            
        // No channel found
        let ambed = new Discord.RichEmbed()
        .setDescription("❌ Couldn't find a `#reports` channel")
        .setFooter("psst! make a channel named reports")
        if (!channel)
            return message.channel.send(ambed).then(m => m.delete(5000));

        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Report Log", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**►  Member:** ${rMember} (${rMember.user.id})
            **►  Reported by:** ${message.member}
            **►  Reported in:** ${message.channel}
            **►  Reason:** ${args.slice(1).join(" ")}`);

        return channel.send(embed).then(messageReaction => {
            messageReaction.react('✅')
        message.author.sendMessage("Your report is being reviewed by our staff team! Thank you for patience")
                }
            )}
}