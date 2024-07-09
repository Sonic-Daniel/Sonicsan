module.exports = {
    config: {
        name: "❤️",
        version: "1.0",
        author: "ʬʆʬ Sønïč Shïsûį ʬɸʬ", // do not change this credits
        countDown: 2,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "❤️") return message.reply("ʬʆʬ Sønïč Shïsûį ʬɸʬ 😊❤ 𝐣𝐞 𝐭'𝐚𝐢𝐦𝐞 𝐭𝐞𝐥𝐥𝐞𝐦𝐞𝐧𝐭");
}
};
