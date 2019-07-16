const util = require("../lib/util");

module.exports = {
    name: "forceload",           // command name
    usage: "helpを参照",          // usage
    description: "チャンクを常に読み込ませるかどうかを切り替える",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};