const util = require("../lib/util");

module.exports = {
    name: "tellraw",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーにJSONメッセージを表示する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};