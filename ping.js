// The command will be activated using .ping

exports.run = (client, message, args) => {

    // This sends a message to the channel, containing the following string
    message.channel.send('Pong!');

} 