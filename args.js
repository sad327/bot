const Discord = require('discord.js');

exports.run = (client, message, args) => {

	if (args.length === 1) {

		return message.channel.send(args[0])
	} else if (args.length === 2) {

		return message.channel.send(args[0] + args[1])
	} else if (args.length === 3) {

		return message.channel.send(args[0] + args[1] + args[2])
	} else if (args.length === 4) {

		return message.channel.send(args[0] + args[1] + args[2] + args[3])
	} else if (args.length === 5) {

		return message.channel.send(args[0] + args[1] + args[2] + args[3] + args[4])
	} else if (args.length === 6) {

		return message.channel.send(args[0] + args[1] + args[2] + args[3] + args[4] + args[5])
	}
}