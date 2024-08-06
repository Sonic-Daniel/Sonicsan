module.exports = {
  config: {
    name: "age",
    author: "Samir Œ",
    countDown: 5,
    role: 0,
    category: "write",
    shortDescription: {
      en: "mention your friend and write something to post✍️",
    },
  },

  onStart: async function ({ api, event, args }) {
    const birthday = args[0];

    if (!birthday) {
      return api.sendMessage("Please provide your birthday in YYYY-MM-DD format.", event.threadID);
    }

    const currentDate = new Date();
    const birthDate = new Date(birthday);
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    birthDate.setFullYear(currentDate.getFullYear());
    const isBeforeBirthday = currentDate < birthDate;

    const finalAge = isBeforeBirthday ? age - 1 : age;

    api.sendMessage(`J'te parie que t'as 🍂${finalAge}🍂 pas vrai !?😼`, event.threadID);
  },
};
