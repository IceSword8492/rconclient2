const util = require("../lib/util");

module.exports = {
    name: "ban-ip",           // command name
    usage: "helpを参照",          // usage
    description: "IPアドレスをブラックリストに追加する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
