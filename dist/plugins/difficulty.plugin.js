const util = require("../lib/util");

module.exports = {
    name: "difficulty",           // command name
    usage: "helpを参照",          // usage
    description: "難易度を設定する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};