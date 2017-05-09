# MagicalCat
The most magical bot you'll ever use. Prefix is - (by default) <br>
For Discord.
### Commands
help - DMs you the bot commands.

8ball - Talk to the magic 8ball.

say - Makes the bot say whatever you want it to say, deletes your message too.

calculateadd - Calculates, only adding.

avatar - Shows you your avatar.

ping - Tests latency and if the bot is online

invite - DMs you the invite link for this bot.

checkperm - Debugging command to check if you set the owner in the config correctly.

fish - Go fishing!

cointoss - Cointoss command.
# Installation
You will need:
- NodeJS
- npm
- git
- A 24/7 VPS
#### Step 1
Clone the repo using git.
```shell
git clone https://github.com/Ultie0/MagicalCat.git && cd MagicalCat-master
```
#### Step 2
Install the required dependencies
```shell
npm install
```
#### Step 3
Edit the config
```json
{
 "prefix": "-",
 "token": "TOKEN",
 "game": "-help for commands list",
 "owner": "YOUR USER ID (NOT NAME)",
 "randkey": "Your random.org API key here"
}
```
### Step3.5
**Aquiring the random.org API key**
Go to the random.org beta API [key regristration page.](https://api.random.org/api-keys/beta) and enter your email to receive your key. 
<br>
**Getting your bot token and client ID** <br>
Go to the [Discord Developers bot regristration page.](https://discordapp.com/developers/applications/me/create)<br>
Then when the form is filled out, you should see a button that says "Create a Bot User", click it. <br>
I recommend that under "App Bot User" public bot is **checked** if you want the invite command to work.<br>
Above the public bot tickbox there is a link to reveal your token, click it.<br>
The first thing you see on the page, "App Details", your Client ID is right underneath it.<br>

#### Step 4
Start the bot!
```shell
npm start
```
### WHAT?! I can't do that
Alternatively you can skip all that and deploy to heroku. <br>
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#### I don't want to use heroku
Join the [BoxOfDevs Discord Server](https://discord.gg/NkgHp) to ask me for help self-hosting it, or in general. <br>
My bot usually is running on there if you want to try it.

#### I don't want to self-host. At all.
Feel free to [add the bot](https://discordapp.com/oauth2/authorize?client_id=293427086855503872&scope=bot&permissions=305212430) that I host onto your server. <br>
It's not always up though.
