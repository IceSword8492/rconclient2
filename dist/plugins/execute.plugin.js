const util = require("../lib/util");

module.exports = {
    name: "execute",           // command name
    usage: "helpを参照",          // usage
    description: "他のコマンドを実行する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};