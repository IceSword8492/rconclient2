const util = require("../lib/util");

module.exports = {
    name: "gamemode",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーのゲームモードを設定する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};