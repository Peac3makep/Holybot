const commando = require('discord.js-commando');

class RandomMapCommand extends commando.Command {
constructor(client) {
super(client, {
    name: 'map',
    group: 'random',
    memberName: 'map',
    description: 'Выбирает мап пак'
});
}
async run(message, args) {
var map = Math.floor(Math.random() * 5) + 1;
message.reply("Мап пак #  " + map + " <:Thonk:443532821953249296> ");
}
}

module.exports = RandomMapCommand;