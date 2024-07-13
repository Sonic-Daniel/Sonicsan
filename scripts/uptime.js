#cmd install stats.js const { getStreamFromURL } = require("fb-watchman");

module.exports = {
  config: {
    name: "uptime",
    aliases: ["upt","time"],
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "stats",
    },
    longDescription: {
      en: "shows stats of bot.",
    },
    category: "system",
    guide: {
      en: "Use {p}stats to see stats of bot.",
    },
  },

  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();
     const days = 
Math.floor(uptime / 86400);
      const hours = Math.floor((uptime % 86400) / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${days}days ${hours}hrs ${minutes}min ${seconds}sec`;

      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "❤🌱𝙃𝙄𝙉𝘼𝙏𝘼 𝙎𝘼𝙉 𝙐𝙕𝙐𝙈𝘼𝙆𝙄🌱❤",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "Not smooth throw your router, buddy";
      if (ping < 400) {
        pingStatus = "Smooth like your tiny pussy";
      }

      // Assuming global.utils.getStreamFromURL(img) is correctly defined
      const imgURL= "https://i.imgur.com/BBB4l52.jpeg";
      const attachment = await global.utils.getStreamFromURL(imgURL); api.sendMessage({
        body: `♣♦𝐍𝐈𝐍𝐉𝐀 𝐃𝐄 𝐊𝐎𝐍𝐎𝐇𝐀♦♣\n━━━━━━━━━━━━━━━━
🎯 | 𝐇𝐈𝐍𝐀𝐓𝐀 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 𝐓𝐈𝐌𝐄﹞\n━━━━━━━━━━━━━━━━\n ♥${uptimeString}♥\n━━━━━━━━━━━━━━━━
📅 | 𝗗𝗔𝗧𝗘﹞: ${date}\n━━━━━━━━━━━━━━━━\n   𝗧𝗲𝗺𝗽: ${time}\n━━━━━━━━━━━━━━━━
🏂 | 𝐓𝐨𝐭𝐚𝐥 𝐯𝐢𝐜𝐭𝐢𝐦𝐞𝐬: ${allUsers.length}\n━━━━━━━━━━━━━━━━
🏢 | 𝘛𝘰𝘵𝘢𝘭 𝘛𝘩𝘳𝘦𝘢𝘥𝘴﹞: ${allThreads.length}\n━━━━━━━━━━━━━━━━\n 🎶| 𝗔𝗶𝗻𝗲 ﹞: ${ping}ms\n━━━━━━━━━━━━━━━━\n status: ${pingStatus}`,
        attachment: attachment,
      }, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
}
