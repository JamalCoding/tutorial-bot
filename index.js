const Discord = require('discord.js')
const Client = new Discord.Client()
const fs = require('fs')
const prefix = '!'

Client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    Client.commands.set(command.name, command);

}
Client.on('ready', () => {

})

console.log('Bot is now ready.')



Client.login('token')
