const util = require("../lib/util");

module.exports = {
    name: "recipe",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーのレシピを解除、ロックする",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};