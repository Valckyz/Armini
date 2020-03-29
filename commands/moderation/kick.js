const Discord = require("discord.js")
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Kicks the member",
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
        .setDescription("❌ Please provide a reason for the kick!")

        if (!args[1]) {
            return message.channel.send(ambed2)
                .then(m => m.delete(5000));
        }

        // No author permissions
        const ambed3 = new Discord.RichEmbed()
        .setDescription("❌ insufficient Permissions")
        .setFooter("Do you have kick member permission?")

        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(ambed3)
                .then(m => m.delete(5000));
        }

        // No bot permissions
        const ambed4 = new Discord.RichEmbed()
        .setDescription("❌ I do not have permission to kick")
        .setFooter("Please contact a staff member")

        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(ambed4)
                .then(m => m.delete(5000));
        }

        const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        const ambed5 = new Discord.RichEmbed()
        .setDescription("❌ I couldn't find that member. Please try again")

        if (!toKick) {
            return message.channel.send(ambed5)
                .then(m => m.delete(5000));
        }

        // Can't kick urself
        const ambed6 = new Discord.RichEmbed()
        .setDescription("❌ You cannot kick yourself")

        if (toKick.id === message.author.id) {
            return message.channel.send(ambed6)
                .then(m => m.delete(5000));
        }

        // Check if the user's kickable
        const ambed7 = new Discord.RichEmbed()
        .setDescription("❌ I cannot kick that person")
        .setFooter("Maybe cause they are too high in the role hierarchy?")

        if (!toKick.kickable) {
            return message.channel.send(ambed7)
                .then(m => m.delete(5000));
        }
                
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(toKick.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setTitle("Member Kicked")
            .setDescription(stripIndents`**► Kicked member:** ${toKick} (${toKick.id})
            **► Kicked by:** ${message.member} (${message.member.id})
            **► Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()
            .setColor("GREEN")
            .setAuthor(`This verification becomes invalid after 30s.`)
            .setDescription(`Do you want to kick ${toKick}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reaction collector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // The verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toKick.kick(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Something went wrong, report the bug by doing \`/report\${err}/\``)
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
