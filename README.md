# MagicalCat
The most magical bot you'll ever use. Prefix is - (by default)
For Discord.
### Commands
help - DMs you the bot commands.

8ball - Talk to the magic 8ball. (BROKEN)

say - Makes the bot say whatever you want it to say, deletes your message too.

calculateadd - Calculates, only adding.

avatar - Shows you your avatar.

ping - Tests latency and if the bot is online

invite - DMs you the invite link for this bot.

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
 "owner": "YOUR USER ID (NOT NAME)"
}
```
#### Step 4
Start the bot!
```shell
node app.js
```