const util = require("../lib/util");

module.exports = {
    name: "me",           // command name
    usage: "helpを参照",          // usage
    description: "コマンド実行者に関するメッセージを表示する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};