const { screenshot } = require("../lib");

(async () => {
  console.log(await screenshot("https://tcabn.tk"));
})();
