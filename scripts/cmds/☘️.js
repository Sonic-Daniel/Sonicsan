module.exports = {
    config: {
        name: "☘️",
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
    if (event.body && event.body.toLowerCase() == "☘️") return message.reply("Salut l'ami(e)🏁✨💜🎶 devines quoi....c'est ton jour de chance ☘ saisis #shadowgc pour rejoindre mon grp de jeu et essais de gagner 1e+21€💰✨🏁🎶 pour être admin du bot 3h. Dès que t'as la somme contactes mon admin🏁");
}
}
