const util = require("../lib/util");

module.exports = {
    name: "recipe",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーのレシピを解除、ロックする",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
