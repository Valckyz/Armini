module.exports = {
    name: "clear",
    aliases: ["purge", "nuke", "clean"],
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
        const Discord = require("discord.js")
        const { RichEmbed } = require("discord.js")
        
        let ambed = new Discord.RichEmbed()
        .setDescription("❌ You can't delete messages....")
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(ambed).then(m => m.delete(5000));
        }
        let ambed2 = new Discord.RichEmbed()
        .setDescription("❌ Yeah.... That's not a number? I also can't delete 0 messages by the way.")

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send(ambed2).then(m => m.delete(5000));
        }
        let ambed3 = new Discord.RichEmbed()
        .setDescription("❌ Sorryy... I can't delete messages. Maybe double check the permissions?")

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(ambed3).then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
        .then(deleted => message.channel.send(`✅ I deleted \`${deleted.size}\` messages.`))
        .catch(err => message.reply(`Something went wrong... ${err}`));
            }
}