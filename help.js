const Discord = require('discord.js');

exports.run = (client, message) => {
    let embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setDescription(
        `       
        -8ball <question> =>|  Use an 8ball to see your future

        -ascii <text> =>| Turns text into ascii-art 

        -avatar <@tag> =>|  Sends the mentioned person's avatar

        -myavatar =>|  Sends your avatar

        -calc <math/convertion etc> =>|  Solves the problem/Converts the items

        -del <number> =>|  Deletes <number> amount of messages 

        -poll <question> =>|  Creates a poll

        -quiz =>|  Starts a quiz

        -rps <option> =>|  Rock Papers Scissors!

        -slots =>|  Play with slots casino-style

        -remindme <time> [text(optional)]=>|  Reminds you after a period of time

        -server =>|  Server Info

        -user =>|  User Info

        -clear  =>|  Clears the chat`
        
    )
    .setTitle('allah\'s commands');
    
    message.channel.send(embed)
}