const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "━━━━━━━━━━━━━━━━\n╔╦══• •✠•🫀•✠ • •══╦╗\n ʬʆʬ𝐒𝐎𝐍𝐈𝐂ʚʆɞ𝐒𝐇𝐈𝐒𝐔𝐈ʬɸʬ\n╚╩══• •✠•🫀•✠ • •══╩╝"; // changing this wont change the goatbot V2 of list cmd it is just a decoyy

module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "NTKhang", // original author leeza 
    countDown: 0,
    role: 0,
    shortDescription: {
      en: "View command usage and list all commands directly",
    },
    longDescription: {
      en: "View command usage and list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);

    if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += `╔╦══• •✠•🫀•✠ • •══╦╗\n ʬʆʬ𝐒𝐎𝐍𝐈𝐂 ʚʆɞ 𝐒𝐇𝐈𝐒𝐔𝐈ʬɸʬ\n╚╩══• •✠•🫀•✠ • •══╩╝\n━━━━━━━━━━━━━━━━`; // replace with your name 

      for (const [name, value] of commands) {
        if (value.config.role > 1 && role < value.config.role) continue;

        const category = value.config.category || "Uncategorized";
        categories[category] = categories[category] || { commands: [] };
        categories[category].commands.push(name);
      }

      Object.keys(categories).forEach((category) => {
        if (category !== "info") {
          msg += `\n🌱 🩸☞${category.toUpperCase()}☜🩸 🌱\n`;


          const names = categories[category].commands.sort();
          for (let i = 0; i < names.length; i += 3) {
            const cmds = names.slice(i, i + 3).map((item) => `🥷✨🦠 ✰${item}✰`);
            msg += `\n ${cmds.join(" ".repeat(Math.max(1, 10 - cmds.join("").length)))}`;
          }

          msg += `\n━━━━━━━━━━━━━━━━`;
        }
      });

      const totalCommands = commands.size;
      msg += `\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁𝗹𝘆, 𝘁𝗵𝗲 𝗯𝗼𝘁 𝗵𝗮𝘀 🏁${totalCommands} 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀🏁 𝘁𝗵𝗮𝘁 𝗰𝗮𝗻 𝗯𝗲 𝘂𝘀𝗲𝗱\n`;
      msg += `𝗧𝘆𝗽𝗲 ${prefix} 𝗵𝗲𝗹𝗽 𝗰𝗺𝗱𝗡𝗮𝗺𝗲 𝘁𝗼 𝘃𝗶𝗲𝘄 𝘁𝗵𝗲 𝗱𝗲𝘁𝗮𝗶𝗹𝘀 𝗼𝗳 𝘁𝗵𝗮𝘁 𝗰𝗼𝗺𝗺𝗮𝗻𝗱\n`;
      msg += `🎯 | ۞❦『𝙃𝙄𝙉𝘼𝙏𝘼』❦۞`; // its not decoy so change it if you want 

      const helpListImages = [
        "https://i.ibb.co/NsK606S/image.jpg", // add image link here
        "https://i.ibb.co/NYxrs6P/image.jpg",
        "https://i.ibb.co/P5zqVNS/image.jpg",
        "https://i.ibb.co/5cBBmy0/image.jpg",
        "https://i.ibb.co/ZMzZgDP/image.jpg",
        // Add more image links as needed
      ];

      const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];

      await message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(helpListImage),
      });
    } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Unknown";

        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

        const guideBody = configCommand.guide?.en || "No guide available.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `❦ঔৣ☬𝐒𝐎𝐍𝐈𝐂☬ঔৣ❦
  ❍⌇─➭  ${configCommand.name}
  ❍⌇─➭  𝙄𝙉𝙁𝙊
  ❍⌇─➭  𝘿𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣: ${longDescription}
  ❍⌇─➭  𝙊𝙩𝙝𝙚𝙧 𝙣𝙖𝙢𝙚𝙨: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"}
  ❍⌇─➭  𝙊𝙩𝙝𝙚𝙧 𝙣𝙖𝙢𝙚𝙨 𝙞𝙣 𝙮𝙤𝙪𝙧 𝙜𝙧𝙤𝙪𝙥: 𝘿𝙤 𝙣𝙤𝙩 𝙝𝙖𝙫𝙚
  ❍⌇─➭  𝙑𝙚𝙧𝙨𝙞𝙤𝙣: ${configCommand.version || "1.0"}
  ❍⌇─➭  𝙍𝙤𝙡𝙚: ${roleText}
  ❍⌇─➭  𝙏𝙞𝙢𝙚 𝙥𝙚𝙧 𝙘𝙤𝙢𝙢𝙖𝙣𝙙: ${configCommand.countDown || 1}s
  ❍⌇─➭  𝘼𝙪𝙩𝙝𝙤𝙧: ${author}
  ❍⌇─➭  𝙐𝙨𝙖𝙜𝙚
  ❍⌇─➭  ${usage}
  ❍⌇─➭  𝙉𝙤𝙩𝙚𝙨
  ❍⌇─➭  𝙏𝙝𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙩 𝙞𝙣𝙨𝙞𝙙𝙚 <𝙓𝙓𝙓𝙓𝙓> 𝙘𝙖𝙣 𝙗𝙚 𝙘𝙝𝙖𝙣𝙜𝙚𝙙
  ❍⌇─➭  𝙏𝙝𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙩 𝙞𝙣𝙨𝙞𝙙𝙚 [𝙖|𝙗|𝙘] 𝙞𝙨 𝙖 𝙤𝙧 𝙗 𝙤𝙧 𝙘 \n━━━━━━━━━━━━━━━━\n 🏁 𝙚𝙙𝙞𝙩𝙚 𝙗𝙮 : ❦ঔৣ☬𝐒𝐎𝐍𝐈𝐂☬ঔৣ❦
  `;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (All users)";
    case 1:
      return "1 (Group administrators)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Unknown role";
  }
}
