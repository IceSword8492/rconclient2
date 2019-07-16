const util = require("../lib/util");

module.exports = {
    name: "stopsound",           // command name
    usage: "helpを参照",          // usage
    description: "サウンドを停止する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};