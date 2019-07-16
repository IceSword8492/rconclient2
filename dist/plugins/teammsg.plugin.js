const util = require("../lib/util");

module.exports = {
    name: "teammsg",           // command name
    usage: "helpを参照",          // usage
    description: "チームへメッセージを送信する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};