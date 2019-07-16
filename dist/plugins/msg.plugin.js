const util = require("../lib/util");

module.exports = {
    name: "msg",           // command name
    usage: "helpを参照",          // usage
    description: "他のプレイヤーにプライベートメッセージを表示する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};