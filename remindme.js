// We require 2 packages for this command, discord.js & ms
const Discord = require('discord.js');
const ms = require('ms');

// Command Handler - You can use your own
exports.run = async (client, message, args) => {

    let reminderTime = args[0]; 
    if (!reminderTime) {
        let embed = new Discord.RichEmbed() 
            .setTitle('Proper Usage') 
            .setDescription(`\`<prefix>remindme ...min [any text or code]\``)

        return message.channel.send(embed) 
    }

    let reminder = args.slice(1).join(" "); 

    let remindEmbed = new Discord.RichEmbed() 
        .setColor('#ffffff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField('Reminder', `\`\`\`${reminder}\`\`\``) 
        .addField('Time', `\`\`\`${reminderTime}\`\`\``) 
        .setTimestamp();

    message.channel.send(remindEmbed); 

    setTimeout(function() {
        let remindEmbed = new Discord.RichEmbed()
            .setColor('#ffffff')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .addField('Reminder', `\`\`\`${reminder}\`\`\``)
            .setTimestamp()

            message.channel.send(remindEmbed);
    }, ms(reminderTime));

} 