const { Chatbot } = require("../lib");

const chatbot = new Chatbot().setName("TCA").setGender("Male").setOwner("TCA");

(async () => {
  console.log(await chatbot.chat("hello world"));
})();
