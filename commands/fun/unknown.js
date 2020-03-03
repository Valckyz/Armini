const Discord = require ("discord.js");



module.exports = {
    name: "emita",
    category: "fun",
    run: async (client, message, args) => {
        let emita = new Discord.RichEmbed()
        .setTitle ("Hidden Command!!! (Armin's Secret)")
        .setColor ("RANDOM")
        .setDescription ("You now have discovered the hidden command so here is your reward!")
        .addField ("Armin's Crush", "Emita")
        .addField ("Does he have a chance with her?", "No, Armin is ugly and she deserves better!")

        message.delete();

    message.author.send(emita); console.log(`BE AWARE! BE AWARE! ${message.author.tag} has used the secret command!`)


    }
}