const util = require("../lib/util");

module.exports = {
    name: "gamerule",           // command name
    usage: "helpを参照",          // usage
    description: "ゲームルールの値を設定、確認する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};