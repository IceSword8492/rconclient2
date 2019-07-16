const util = require("../lib/util");

module.exports = {
    name: "whitelist",           // command name
    usage: "helpを参照",          // usage
    description: "サーバーのホワイトリストを管理する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};