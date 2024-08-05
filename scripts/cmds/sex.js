module.exports = {
	config: {
		name: "sex",
		aliases: ["porno"],
		version: "1.0",
		author: "ʬʆʬ Sønïč Shïsûį ʬɸʬ", // this cmd will expire if you change this credits
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of nude",
		longDescription: "sends u pic of girls nude",
		category: "18+",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://tinyurl.com/2y3rejkg",
"https://tinyurl.com/2bxgeswv",
"https://tinyurl.com/23ovrxey",
"https://tinyurl.com/25qrbsx3",
"https://tinyurl.com/242q8f67",
"https://tinyurl.com/223rwzpp",
"https://tinyurl.com/2clxrozu",
"https://tinyurl.com/2ccxoswo",
"https://tinyurl.com/2cqn9h2b",
"https://tinyurl.com/24tz3szw",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 ❤️🔞 Pornography loaded successfully💦🥵 」',attachment: await global.utils.getStreamFromURL(img)
})
  } 
}
