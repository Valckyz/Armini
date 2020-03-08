const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const TOKEN = process.env.TOKEN;
let statuses = [`${client.guilds.size} | /help`, `Version 1.2 | /help`];

const client = new Client({
    disableEveryone: false
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!, No Crashes Detected`);

    setInterval(function() {


        let status = statuses[Math.floor(Math.random()*statuses.length)];


        client.user.setPresence({ 
            game: {
                name: status,
                type: "Watching",
            }
        });

    }, 7000)
})

client.on("message", async message => {
    const prefix = "/";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});
      
console.log("Programmed with ❤  by Valckyz")
console.log("© 2020 Valckyz,")

client.login(process.env.TOKEN);