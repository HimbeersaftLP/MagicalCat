"use strict";
const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const bot = new Discord.Client();
var RandomOrg = require('random-org');
var count;
var message = '';
var fish = ['🐠','🐟','🐡','🐬','🐳','🐋'];
const config = require("./config.json");

bot.on('ready', () => {
  bot.user.setGame(config.game)
  bot.user.setStatus("online")
  console.log("MagicalCat initialized.");
});

function doMagic8BallVoodoo() {
    var rand = [":8ball: Absolutely.", ':8ball: Absolutely not.', ':8ball: It is true.', ':8ball: Impossible.', ':8ball: Of course.', ':8ball: I do not think so.', ':8ball: It is true.', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.', ':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again'];
    return rand[Math.floor(Math.random()*rand.length)];
}

function coinToss() {
    var rand = ['You flipped the coin, it lands on tails.', 'I flipped the coin, it lands on tails.', 'You flipped the coin, it lands on heads.', 'I flipped the coin, it lands on heads.'];
    return rand[Math.floor(Math.random()*rand.length)];
}

bot.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  console.log(command);

  let args = msg.content.split(" ").slice(1);

  if (command === "calculateadd") {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);

    msg.channel.sendMessage(total).catch(console.error);
  }

  if (command === "say") {
     msg.delete();
     msg.channel.sendMessage(args.join(" "));
  }

  if (command === "ping") {
    msg.channel.send("Pong! (hold on, processing latency...)").then(m => m.edit("Pong! (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)") );
  }

  if (command === "help") {
    msg.channel.sendMessage(":calling: It seems you have requested help. Check your DMs.");
      var help = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random()*16777215))
        .setTitle('Help for MagicalHourglass:')
        .setDescription('Commands:')
        .setThumbnail('http://i.imgur.com/cq3mRn7.png')
        .addField(config.prefix + "say", "Makes the bot say whatever you want it to say, deletes your message too\nExample: " + config.prefix + "say hi")
        .addField(config.prefix + "8ball", "Talk to the magic 8ball\nExample: " + config.prefix + "8ball Am I beautiful?")
        .addField(config.prefix + "calculateadd", "Calculates, only adding\nExample: " + config.prefix + "calculateadd 7 4")
        .addField(config.prefix + "avatar", "Gives you a link to your avatar\nExample: " + config.prefix + "avatar")
        .addField(config.prefix + "ping", "Tests the latency\nExample: " + config.prefix + "ping")
        .addField(config.prefix + "invite", "DMs you the invite link for this bot\nExample: " + config.prefix + "invite")
        .addField(config.prefix + "checkperm", "Debugging command to check if you set the owner correctly.\nExample: " + config.prefix + "checkperm")
        .addField(config.prefix + "cointoss", "Toss a coin\nExample: " + config.prefix + "cointoss");          
      msg.author.sendEmbed(help);
  }
  
  if (command === "avatar") {
    msg.reply(msg.author.avatarURL);
  }

  if (command === "8ball") {
    msg.channel.sendMessage(doMagic8BallVoodoo())
  }

  if (command === "invite") {
    msg.reply("It seems you want to invite me to your server. Check your DMs. ")
    msg.author.sendMessage("https://discordapp.com/oauth2/authorize?client_id=293427086855503872&scope=bot&permissions=305212430")
  }

  if (command === "cointoss") {
    msg.channel.sendMessage(coinToss())
  }
  
  if (command === "checkperm") {
    if (msg.author.id === config.owner) {
      msg.reply("You are the owner of this bot!")
    } else {
      msg.reply("You have normal permissions.");
      }
  }
  
  if (command === "spam") {
    if (msg.author.id === config.owner) {
      for(count = 0; count < 100; count++){
          msg.channel.sendMessage("Message " + count)
      }
    } else {
      msg.channel.sendMessage("You don't have permission to run this command.")
      }
  }
  
  if (command === "fish") {
    var random = new RandomOrg({ apiKey: config.randkey });
    random.generateIntegers({ min: 1, max: 6, n: 1 })
    .then(function(result) {
      var caught = fish[result.random.data];
      msg.reply("You caught a " + caught + "!");
      msg.react(caught);
    });
  }


});

bot.login(config.token);
