const util = require("../lib/util");

module.exports = {
    name: "op",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーにOP権限を与える",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};