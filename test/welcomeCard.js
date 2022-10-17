const { WelcomeCard } = require("../lib");

const welcomeCard = new WelcomeCard({
  background: "https://.png",
  avatar: "https://.png",
  text1: "haha",
  text2: "haha",
  text3: "haha",
});

console.log(welcomeCard.render());
