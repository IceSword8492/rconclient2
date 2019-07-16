const util = require("../lib/util");

module.exports = {
    name: "fill",           // command name
    usage: "helpを参照",          // usage
    description: "領域を指定したブロックで埋める",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};