const util = require("../lib/util");

module.exports = {
    name: "deop",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーのop権限を削除する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};