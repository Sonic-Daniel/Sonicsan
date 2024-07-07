module.exports = {
	config: {
		name: "Lb",
		aliases: [],
		version: "1.0",
		author: "ʬɸʬ Sønïč Shïsûį ʬɸʬ", // do not change this credits
		countDown: 5,
		role: 0,
		shortDescription: "like profile picture of my creator",
		longDescription: "like profile picture",
		category: "Utility",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.ibb.co/zx1mTvq/image.jpg",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: "❛ ━𝄇━━･❪🫀𝐋𝐁🫀❫ ･━━𝄇━ ❜\n\n 🦠✨❤️‍🩹 https://www.facebook.com/100090405019929/posts/429226023434228/?substory_index=348683571370980&app=fbl ❤️‍🩹✨🦠\n\n❛ ━𝄇━━･❪🫀𝐋𝐁🫀❫ ･━━𝄇━ ❜\n\n 𝐔𝐍 𝐂𝐎𝐄𝐔𝐑 𝐎𝐔 𝐋𝐀 𝐌𝐎𝐑𝐓...🫶🩸🥷",attachment: await global.utils.getStreamFromURL(img)
})
}
}
