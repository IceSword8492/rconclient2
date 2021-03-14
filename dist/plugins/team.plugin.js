const util = require("../lib/util");

module.exports = {
    name: "team",           // command name
    usage: "helpを参照",          // usage
    description: "チームを操作する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
