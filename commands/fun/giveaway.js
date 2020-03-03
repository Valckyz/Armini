const { RichEmbed } = require("discord.js")


module.exports = {
    name: "giveaway",
    category: "fun",
    description: "Use this command to start an giveaway",
    usage: "<giveaway>",
    run: async (client, message, args) => {
        let giveawaychaneel = message.guild.channels.find(`name`, `giveaways`);
        let reward = args[0]
        if (!giveawaychaneel) return message.channel.send(`There is no \`Giveaway\` channel`)
        if (!reward) return message.channel.send(`Provide a reward`)

        let giveawayembed = new RichEmbed()
        .setTitle(`Giveaway started by ${message.author.username}`)
        .setFooter('React to join the giveaway')
        .addField(`${message.author.username} is hosting a giveaway for`, `${reward}`)
        
        giveawaychaneel.sendEmbed(giveawayembed).then(msg => {
            msg.react('✅')
        })

    }
}
