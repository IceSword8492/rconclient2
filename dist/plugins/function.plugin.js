const util = require("../lib/util");

module.exports = {
    name: "function",           // command name
    usage: "helpを参照",          // usage
    description: "関数を実行する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};