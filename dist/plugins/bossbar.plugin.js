const util = require("../lib/util");

module.exports = {
    name: "bossbar",           // command name
    usage: "helpを参照",          // usage
    description: "ボスバーを作成、変更する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};