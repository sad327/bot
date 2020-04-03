const Discord = require('discord.js');

exports.run = async (client, message, args) => {
   
    let messagecount = parseInt(args);
    message.channel.fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages));

} 


