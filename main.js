const Discord = require("Discord.js")
require("dotenv").config();

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds/* ,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers, */
    ]
});

client.once("ready", () => {
    console.log("Tsuki is now online.");
});

let channelIds = [
    "584168184152850454",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "586876967177945109",
    "720436686944993421"
];

function sendMsg() {
    channelIds.forEach(id => {
        const channel = client.channels.cache.get(id);
        channel.send("Test Channel");
        channel.send("Test mon message");
    });
}

setInterval(sendMsg, 2000);

client.login(process.env.TOKEN);