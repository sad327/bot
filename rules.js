const Discord = require('discord.js')
exports.run = (client, message) => {
    message.channel.bulkDelete(1).then(() => {
        let embed = new Discord.RichEmbed()
        .setTitle("Rules")
        .setColor('#0099ff')
        .setDescription(`Rules:
        Λέμε μαλακιες και περνάμε καλά
        ! No spam
        ! Δεν κανουμε μαλακιες με admins
        ! Σεβαστείτε τους άλλους
        ! Γαμω τους ρομα
        ! Όποιος τα παραβαίνει kick`)
        .setThumbnail("https://res.cloudinary.com/dnzl40ayn/image/upload/v1585916282/lolz1_v2hv0y.png")
        message.channel.send(embed)
    })
}
