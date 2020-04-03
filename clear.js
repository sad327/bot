const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You don\'t have permission to delete messages.');

    message.channel.bulkDelete(100).then(() => { 
        message.channel.send(`:pencil2: Chat cleared.`).then(msg => msg.delete(2500));
    });

} 