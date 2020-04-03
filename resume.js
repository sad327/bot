exports.run = (client, message, args, ops) => {

	// First, we need to fetch the guild object
	let fetched = ops.active.get(message.guild.id);

	// Then, we need to check if what was fetched is defined
	if (!fetched) return message.channel.send("There currently isn't any music playing in this guild.");

	// Check if the user is in the same channel as the bot
	if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you aren't in the same voice Channel as the bot");

	// Then, check if the dispatcher is already paused
	if (!fetched.dispatcher.paused) return message.channel.send("This song isn't paused.");

	// Finally, if everything is okay, pause the song
	fetched.dispatcher.resume();

	// Send Output
	message.channel.send(`Succesfully resumed ${fetched.queue[0].songTitle}`);
}