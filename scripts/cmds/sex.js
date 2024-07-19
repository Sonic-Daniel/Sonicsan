module.exports = {
  config: {
    name: "sex",
    aliases: ["xxxxx"],
    version: "1.0",
    author: "ʬʆʬ Sønïč Shïsûį ʬɸʬ",
    countDown: 10,
    role: 0,
    shortDescription: "Pornography videos ",
    longDescription: "send you Pornography videos",
    category: "18+",
    guide: "{p}{n}hvdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "🔞 | xvideos.com.",
    });

    const link = [
"https://www.sex.com/fr/videos/140859-mei-matsumotos-teacher-threesome-make-her-jism-and-creampie-best-jav-ever",
"https://www.sex.com/fr/videos/135541-gizelle-blanco-has-orgasm-intensity",
"https://www.sex.com/fr/videos/135325-isabelle-deltore-leashed-and-fucked",
"https://www.sex.com/fr/videos/140850-squeaky-clean-fuck-after-shower-with-mila-ex-for-clubsweethearts",
    ];

    const availableVideos = link.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];

    this.sentVideos.push(randomVideo);

    if (senderID !== null) {
      message.reply({
        body: '❤🔞 Pornography loaded successfully 🔞❤',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
}
