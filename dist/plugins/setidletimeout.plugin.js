const util = require("../lib/util");

module.exports = {
    name: "setidletimeout",           // command name
    usage: "helpを参照",          // usage
    description: "アイドル状態のプレイヤーがキックされるまでの時間を設定する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};