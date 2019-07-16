const util = require("../lib/util");

module.exports = {
    name: "say",           // command name
    usage: "helpを参照",          // usage
    description: "複数のプレイヤーにメッセージを表示する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};