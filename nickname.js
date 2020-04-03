const discord = require('discord.js');

exports.run = (client, message, args) => {

	// Check if they mentioned a nickname
	if (!args[0]) return message.channel.send('Invalid Format: -nickname <nickname>');

	// Check the length
	if (args[0].length > 32) return message.channel.send("Nickname should be 32 characters or less.");

	// Change the person's nickname
	message.member.setNickname(`${args[0]}`);

	// Output
	message.channel.send(`Succesfully changed nickname to: ${args[0]}.`)

}