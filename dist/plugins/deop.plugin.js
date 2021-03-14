const util = require("../lib/util");

module.exports = {
    name: "deop",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーのop権限を削除する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
