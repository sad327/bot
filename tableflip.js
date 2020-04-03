const Discord = require('discord.js');

exports.run = (client, message) => {
    
    message.channel.bulkDelete(1)
    message.channel.send('(╯°□°）╯︵ ┻━┻ ')
}
