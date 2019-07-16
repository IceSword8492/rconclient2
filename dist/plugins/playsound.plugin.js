const util = require("../lib/util");

module.exports = {
    name: "playsound",           // command name
    usage: "helpを参照",          // usage
    description: "サウンドを再生する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};