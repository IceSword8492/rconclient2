const util = require("../lib/util");

module.exports = {
    name: "xp",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーの経験値を追加/削除する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
