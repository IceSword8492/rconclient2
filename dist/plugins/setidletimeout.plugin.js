const util = require("../lib/util");

module.exports = {
    name: "setidletimeout",           // command name
    usage: "helpを参照",          // usage
    description: "アイドル状態のプレイヤーがキックされるまでの時間を設定する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
