// This command will require 2 NPM packages
// npm i ytdl-core node-opus 
const ytdl = require('ytdl-core');


exports.run = async (client, message, args, ops) => {

	// First, we need to check if the author is connected to a voice channel.
	if (!message.member.voiceChannel) return message.channel.send("Please connect to a voice channel.");

	// Check if author input a song.
	if (!args[0]) return message.channel.send('Sorry, please input a song name following the command.');

	// Validate Info
	let validate = await ytdl.validateURL(args[0]);

	//Check Validation
	if (!validate) {

		let commandFile = require(`./search.js`);
		return commandFile.run(client, message, args, ops);
	}
	
	// We also need to define infom we can do that here -- It will store the video info
	let info = await ytdl.getInfo(args[0]);

	// First, we need to fetch the active
	let data = ops.active.get(message.guild.id) || {};

	// Next, we need to update the data
	if (!data.connection) data.connection = await message.member.voiceChannel.join(); // If there isn't a connection create one
	if (!data.queue) data.queue = []; // If there isn't a queue array, create one
	data.guildID = message.guild.id; // This one won't be reset ever, so we can just set it whenever we run this

	// Next, we need to add the song to the queue
	data.queue.push({
		songTitle: info.title,
		requester: message.author.tag,
		url: args[0],
		announceChannel: message.channel.id
	});

	// If there isn't a dispatcher already created, run the play function
	if (!data.dispatcher) playStream(client, ops, data );
	else { // Although, if there is already a dispatcher, run this

		// Send added to queue message
		message.channel.send(`Added To Queue: ${info.title} | Requested By: ${message.author.tag}`);
	}

	// Finally, update the map
	ops.active.set(message.guild.id, data);
}

async function playStream(client, ops, data) { // It will take these 3 parameters, so when calling it when need to pass those through

	// First, we can send the now playing message
	client.channels.get(data.queue[0].announceChannel).send(`Now Playing: ${data.queue[0].songTitle}`);

	// Next, update the dispatcher data
	data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly'}));
	data.dispatcher.guildID = data.guildID;

	// Finally, create a listener event that will run when the song endsF
	data.dispatcher.once('end', function() {
		// When this happens, we want to run a finish function
		end(client, ops, data); 

	});
}

function end(client, ops, dispatcher) {

	// First, fetch the guild object from the map
	let fetched = ops.active.get(dispatcher.guildID);

	// Remove first item in queue
	fetched.queue.shift();

	// Then, check if the queue is empty
	if (fetched.queue.length > 0) { // If not, run this

		// Update the map with the new queue
		ops.active.set(dispatcher.guildID, fetched);

		// Finally, run the play function again which starts the next song
		playStream(client, ops, fetched); // Remember to pass these 3 parameters
	} else { // This will run if the queue is empty

		// Delete the guild object from the map
		ops.active.delete(dispatcher.guildID);

		// Leave the voice channel
		let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
		if (vc) vc.leave(); //if its in a voice channel leave it
	} 
}