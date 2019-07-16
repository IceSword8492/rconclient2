const util = require("../lib/util");

module.exports = {
    name: "debug",           // command name
    usage: "helpを参照",          // usage
    description: "デバッグセッションを開始または停止する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};