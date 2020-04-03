const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var user = message.author
    let embed = new Discord.RichEmbed()
    .setTitle(user.username + "'s avatar:")
    .setImage(user.avatarURL)
    .setColor('#626466')
    message.channel.send(embed)
}