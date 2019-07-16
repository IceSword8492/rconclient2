const util = require("../lib/util");

module.exports = {
    name: "weather",           // command name
    usage: "helpを参照",          // usage
    description: "天候を設定する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};