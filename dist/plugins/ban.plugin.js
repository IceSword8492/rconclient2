const util = require("../lib/util");

module.exports = {
    name: "ban",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーをブラックリストに追加する",    // description
    option: undefined,         // description of option
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};