 module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "kivv",
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
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝐒𝐚𝐥𝐮𝐭𝐚𝐭𝐢𝐨𝐧𝐬....𝐭𝐞𝐫𝐫𝐢𝐞𝐧🙂👋𝐦𝐨𝐢 𝐜'𝐞𝐬𝐭 𝐒𝐚𝐧𝐠𝐨𝐤𝐮....𝐂𝐨𝐦𝐦𝐞𝐧𝐭 𝐜𝐚 𝐯𝐚 !?🎧🎶");
}
};
