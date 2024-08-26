const fs = require('fs');

module.exports = {
  config: {
    name: "🍂",
    version: "1.0",
    author: "Sønïč Shïsûį",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "reply",
  },
 
  onStart: async function() {},
 
  onChat: async function({ event, message, getLang, api }) {
   const link = [
"https://i.ibb.co/By078j8/image.gif",
]
  let img =
link[Math.floor(Math.random()*link.length)]
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "🍂":
          const replies = [
            "📣| 𝙲𝙴 𝙽'𝙴𝚂𝚃 𝙿𝙰𝚂 𝙿𝙰𝚁𝙲𝙴 𝚀𝚄𝙴 𝚃𝚄 𝙴𝚂 𝙵𝙰𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝚃𝚄 𝙽'𝙸𝚁𝙰𝚂 𝙿𝙰𝚂 𝙹𝚄𝚂𝚀𝚄'𝙰𝚄 𝙱𝙾𝚄𝚃 𝙳𝙴 𝚃𝙴𝚂 𝚁𝙴𝚅𝙴𝚂 !🔮",
          ];
          api.setMessageReaction("🔮", event.messageID, event.messageID, api); 
          const randomIndex = Math.floor(Math.random() * replies.length);
          message.reply({
            body: replies[randomIndex],
attachment: await global.utils.getStreamFromURL(img)})
          break;
        default:
          return; 
      }
    }
  },
};
