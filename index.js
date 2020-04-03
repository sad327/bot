const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require("fs"); // We need to require fs (No need to install it since it's already in node)
var profanities = require('profanities'); // `npm i profanities`


// Constant Variables
const prefix = '-';
const ownerID = '231694806911418370';
const active = new Map();


// Listener Events
client.on('message', message => {
    // This runs everytime a message is received

    // Variables
    let args = message.content.slice(prefix.length).trim().split(' '); 
    let cmd = args.shift().toLowerCase();

    // args contains everything following that and splits it into an array by slices
    // cmd contains the command following the prefix

    // Return Statements
    if (message.author.bot) return; //This will ignore the bots message
    if (!message.content.startsWith(prefix)) return; // This wil lrun if the message doesn't contain the prefix

    // Command Handler
    try {
        
        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        // Options
        let ops = {
            ownerID: ownerID,
            active: active
        }

        let commandFile = require(`./commands/${cmd}.js`); // This will require a file in our commands folder
        commandFile.run(client, message, args, ops); // This will pass three variables into our file
    
    } catch (e) {
        console.log(e.stack);
    }

});

// Ready Event - Bot online
client.on('ready', () => {
    console.log('Bot online!');
    client.user.setActivity("-depression-")
});

//User joining the discord server.
client.on("guildMemberAdd", member => {

    console.log("User ", + member.user.username + " has joined the server!") 


    var role = member.guild.roles.find("little bitches", "little bitches");

    // add role
    member.addRole(role)
});
 

// Discord Login 
client.login('NTk0OTYxNTMyNjg5ODQyMTc2.XRn_Gg.Dd7m87Lkgg9M3wGZ4Qt29SHPaZY')