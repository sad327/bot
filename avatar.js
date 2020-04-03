const Discord = require('discord.js');

exports.run = (_client, message, _args) => {
    var user = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
    .setTitle(user.username + "'s avatar:")
    .setImage(user.avatarURL)
    .setColor('#626466')
    message.channel.send(embed)

    
    
} 