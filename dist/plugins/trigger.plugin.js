const util = require("../lib/util");

module.exports = {
    name: "trigger",           // command name
    usage: "helpを参照",          // usage
    description: "トリガー型オブジェクトを使用する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};