const util = require("../lib/util");

module.exports = {
    name: "fill",           // command name
    usage: "helpを参照",          // usage
    description: "領域を指定したブロックで埋める",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
