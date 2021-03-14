const util = require("../lib/util");

module.exports = {
    name: "clear",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーのインベントリからアイテムを消去する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
