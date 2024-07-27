module.exports = {
    config: {
        name: "🍂",
        version: "1.0",
        author: "ʬʆʬ Sønïč Shïsûį ʬɸʬ", // do not change this credits
        countDown: 5,
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
    if (event.body && event.body.toLowerCase() == "🍂") return message.reply("Ce n’est pas parce que tu es fort que tu pourras gagner⚪🍂🏁. Ce n’est pas parce que tu ne seras pas fort que tu perdras🐝🎶☘️");
}
};
