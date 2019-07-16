const util = require("../lib/util");

module.exports = {
    name: "time",           // command name
    usage: "helpを参照",          // usage
    description: "ワールドの時間を変更、確認する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};