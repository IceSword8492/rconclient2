const util = require("../lib/util");

module.exports = {
    name: "scoreboard",           // command name
    usage: "helpを参照",          // usage
    description: "スコアボードの対象、プレイヤー、チーム、タグを管理する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};