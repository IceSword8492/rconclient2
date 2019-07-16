const util = require("../lib/util");

module.exports = {
    name: "clear",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーのインベントリからアイテムを消去する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};