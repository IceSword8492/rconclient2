const util = require("../lib/util");

module.exports = {
    name: "ban",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーをブラックリストに追加する",    // description
    option: undefined,         // description of option
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
