const { github } = require("../lib");

(async () => {
  console.log(await github("tcaNPM"));
})();
