const util = require("../lib/util");

module.exports = {
    name: "particle",           // command name
    usage: "helpを参照",          // usage
    description: "パーティクルを発生させる",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
