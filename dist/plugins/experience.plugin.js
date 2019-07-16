const util = require("../lib/util");

module.exports = {
    name: "experience",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーの経験値を付与または削除する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};