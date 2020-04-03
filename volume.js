exports.run = (client, message, args, ops) => {

	// First we need to fetch the guild object
	let fetched = ops.active.get(message.guild.id);

	// Then we need to check if what we fetched is defined
	if (!fetched) return message.channel.send("There currently isn't any music playing in this guild.");

	// Check if the user is in the same channel as the bot
	if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you currently aren't in the same voice Channel as the bot");

	// Check if the input is between 0-200 
	if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send("Please input a number between 0 and 200");

	// Finally, if everything is okay, change the volume to their input / 100
	fetched.dispatcher.setVolume(args[0]/100);

	// Send Output
	message.channel.send(`Succesfully changed the voulume of ${fetched.queue[0].songTitle} to ${args[0]}`);
}