const {REST, Routes} = require("discord.js");

const command = [{
    name: "ping",
    description: "Replies with Pong",
},];

const rest = new REST({version: "10"}).setToken("MTIxMDYwMjE1NTA1NzA4NjUzNQ.GFZbCh.QwAAYJUJXIsIjpmbt3j1z3EN_bdIdvvL3O7WSI");
(async () => {  
try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1210602155057086535'), {body: command});

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
})();