const util = require("../lib/util");

module.exports = {
    name: "seed",           // command name
    usage: "helpを参照",          // usage
    description: "シード値を表示する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};