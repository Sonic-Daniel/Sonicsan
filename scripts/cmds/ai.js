module.exports = {
	config: {
		name: "ai",
		aliases: ["ai"],
		version: "1.0",
		author: "ʬɸʬ Sønïč Shïsûį ʬɸʬ", // do not change this credits
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of fleetway super Sonic ",
		longDescription: "send you pic of fleetway super Sonic",
		category: "no prefix",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.ibb.co/xjN5mq3/image.jpg",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: "𝐕𝐨𝐲𝐨𝐮 𝐨𝐧 𝐝𝐢𝐭 𝐇𝐢𝐧𝐚𝐭𝐚...𝐩𝐚𝐬 𝐚𝐢🙍",attachment: await global.utils.getStreamFromURL(img)
})
}
}
