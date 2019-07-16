const util = require("../lib/util");

module.exports = {
    name: "kick",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーをサーバーからキックする",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};