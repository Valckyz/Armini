const Discord = require("discord.js")
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "ban",
    category: "moderation",
    description: "bans the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "logs") || message.channel;

        if (message.deletable) message.delete();

        // No args
        const ambed1 = new Discord.RichEmbed()
        .setDescription("❌ I cannot find that member")
        .setFooter("Make sure you are mentioning a person!")

        if (!args[0]) {
            return message.channel.send(ambed1)
                .then(m => m.delete(5000));
        }

        // No reason
        const ambed2 = new Discord.RichEmbed()
        .setDescription("❌ Please provide a reason for the ban!")

        if (!args[1]) {
            return message.channel.send(ambed2)
                .then(m => m.delete(5000));
        }

        // No author permissions
        const ambed3 = new Discord.RichEmbed()
        .setDescription("❌ insufficient Permissions")
        .setFooter("Do you have ban member permission?")

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(ambed3)
                .then(m => m.delete(5000));
        }
        // No bot permissions
        const ambed4 = new Discord.RichEmbed()
        .setDescription("❌ I do not have permission to ban")
        .setFooter("Please contact a staff member")

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(ambed4)
                .then(m => m.delete(5000));
        }

        const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        const ambed5 = new Discord.RichEmbed()
        .setDescription("❌ I couldn't find that member. Please try again")

        if (!toBan) {
            return message.channel.send(ambed5)
                .then(m => m.delete(5000));
        }

        // Can't ban urself
        const ambed6 = new Discord.RichEmbed()
        .setDescription("❌ You cannot ban yourself")

        if (toBan.id === message.author.id) {
            return message.channel.send(ambed6)
                .then(m => m.delete(5000));
        }

        // Check if the user's banable
        const ambed7 = new Discord.RichEmbed()
        .setDescription("❌ I cannot ban that person")
        .setFooter("Maybe cause they are too high in the role hierarchy?")

        if (!toBan.bannable) {
            return message.channel.send(ambed7)
                .then(m => m.delete(5000));
        }
        
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(toBan.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setTitle("Member Banned")
            .setDescription(stripIndents`**► Banned member:** ${toBan} (${toBan.id})
            **► Banned by:** ${message.member} (${message.member.id})
            **► Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()
            .setColor("GREEN")
            .setAuthor(`This verification becomes invalid after 30s.`)
            .setDescription(`Do you want to ban ${toBan}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reactioncollector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Well.... the ban didn't work out. Here's the error ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                const cancel = new Discord.RichEmbed()
                    .setDescription("Kick Canceled.")

                message.channel.send(cancel)
                    .then(m => m.delete(10000));
            }
        });
    }
}