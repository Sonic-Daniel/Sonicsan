const fs = require('fs');

module.exports = {
  config: {
    name: "ai",
    version: "1.0",
    author: "Sønïč Shïsûį", // this cmd will expire if you change this credits
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "reply",
  },
 
  onStart: async function() {},
 
  onChat: async function({ event, message, getLang, api }) {
   const link = [
"https://i.ibb.co/xjN5mq3/image.jpg",
]
  let img =
link[Math.floor(Math.random()*link.length)]
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "ai":
          const replies = [
            "🚫| 𝐒𝐚𝐥𝐞 𝐝𝐞𝐥𝐢𝐧𝐪𝐮𝐚𝐧𝐭 𝐚𝐩𝐩𝐞𝐥𝐥𝐞𝐬 𝐦𝐨𝐢 𝐩𝐚𝐫 𝐬𝐡𝐢𝐬𝐮𝐢....𝐩𝐚𝐬 𝐚𝐢 !",
          ];
          api.setMessageReaction("🖕", event.messageID, event.messageID, api); 
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
