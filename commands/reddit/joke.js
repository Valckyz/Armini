const got = require('got');
module.exports = {
    name: "joke",
    category: "fun",
    description: "Sends jokes",
    run: async (client, message, args) => {
    got('https://www.reddit.com/r/dadjokes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        var title = content[0].data.children[0].data.title;
        var joke = content[0].data.children[0].data.selftext;
        message.channel.send('**' + title + '**');
        message.channel.send(joke)
    }).catch(console.error);
}
}