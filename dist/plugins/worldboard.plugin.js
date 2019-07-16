const util = require("../lib/util");

module.exports = {
    name: "worldboard",           // command name
    usage: "helpを参照",          // usage
    description: "ワールドの境界を管理する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};