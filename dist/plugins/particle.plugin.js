const util = require("../lib/util");

module.exports = {
    name: "particle",           // command name
    usage: "helpを参照",          // usage
    description: "パーティクルを発生させる",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};