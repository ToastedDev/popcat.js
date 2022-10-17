const { shorten } = require("../lib");

(async () => {
  console.log(await shorten("https://tcabn.tk", "tcabn"));
})();
