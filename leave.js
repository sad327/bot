exports.run = (client, message, args, ops) => {
	
	// Check if author is connected to a voice channel
	if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.')

	// Check if the bot is connected to a voice channel
	if (!message.guild.me.voiceChannel) return message.cannel.send("Sorry, the bot isn't connected to the guild.")

	// Check if the author and the bot are in the same channel
	if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Sorry, you aren't connected to the same voice Channel.")
		
	// Leave Channel
	message.guild.me.voiceChannel.leave();

	// Send Message
	message.channel.send('Leaving Channel...').then(msg => msg.delete(2500));	 
}