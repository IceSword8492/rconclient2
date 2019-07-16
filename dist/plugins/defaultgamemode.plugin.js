const util = require("../lib/util");

module.exports = {
    name: "defaultgamemode",           // command name
    usage: "helpを参照",          // usage
    description: "デフォルトのゲームモードを設定する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};