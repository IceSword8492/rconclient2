const util = require("../lib/util");

module.exports = {
    name: "teleport",           // command name
    usage: "helpを参照",          // usage
    description: "エンティティをテレポートさせる",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};