const util = require("../lib/util");

module.exports = {
    name: "setblock",           // command name
    usage: "helpを参照",          // usage
    description: "ブロックを設置または置換する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
