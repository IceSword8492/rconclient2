const util = require("../lib/util");

module.exports = {
    name: "clone",           // command name
    usage: "helpを参照",          // usage
    description: "ブロックのまとまりを別の場所にコピーする",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
