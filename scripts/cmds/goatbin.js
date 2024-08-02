const fs = require('fs');

const path = require('path');

const axios = require('axios');



module.exports = {

  config: {

    name: "goatbin",
    aliases: ["bin"],

    version: "1.0",

    author: "ArYAN | @ GoatMart",

    countDown: 5,

    role: 2,

    shortDescription: {

      en: "Upload files to goatbin and send the cmd link"

    },

    longDescription: {

      en: "This command allows you to upload files to goatbin and sends the link to the file."

    },

    category: "admin",

    guide: {

      en: "To use this command, type goatbin <filename>. The file must be located in the 'cmds' folder."

    }

  },



  onStart: async function({ api, event, args }) {

    const permission = ["100090405019929"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("𝑩𝒂𝒕𝒂𝒓𝒅 𝒊𝒏𝒅𝒊𝒈𝒏𝒆...😒🔑❌ 𝒔𝒆𝒖𝒍 ʬɸʬ Shïsûį Dånïęl ʬɸʬ 𝒑𝒆𝒖𝒕 𝒖𝒕𝒊𝒍𝒊𝒔𝒆𝒓 𝒄𝒆𝒕𝒕𝒆 𝒇𝒐𝒏𝒄𝒕𝒊𝒐𝒏...😒🔒🍀", event.threadID, event.messageID);
    }
    const fileName = args[0];

    const filePathWithoutExtension = path.join(__dirname, '..', 'cmds', fileName);

    const filePathWithExtension = path.join(__dirname, '..', 'cmds', fileName + '.js');



    if (!fs.existsSync(filePathWithoutExtension) && !fs.existsSync(filePathWithExtension)) {

      return api.sendMessage('Command not found. Please check your command list by typing .help to see all available commands.', event.threadID, event.messageID);

    }



    const filePath = fs.existsSync(filePathWithoutExtension) ? filePathWithoutExtension : filePathWithExtension;



    fs.readFile(filePath, 'utf8', async (err, data) => {

      if (err) {

        return api.sendMessage('An error occurred while reading the file.', event.threadID, event.messageID);

      }



      try {

        const response = await axios.post('https://goatbin-v1.onrender.com/api/goatbin/v1', { code: data });



        if (response.data && response.data.link) {

          const goatbinLink = response.data.link;

          api.sendMessage(`🖇| Link👉 ${goatbinLink}`, event.threadID, event.messageID);

        } else {

          api.sendMessage('🚫| Failed to upload the command to goatbin. Please try again later.', event.threadID, event.messageID);

        }

      } catch (uploadErr) {

        console.error(uploadErr);

        api.sendMessage('An error occurred while uploading the command to goatbin.', event.threadID, event.messageID);

      }

    });

  },

};
