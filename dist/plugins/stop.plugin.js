const util = require("../lib/util");

module.exports = {
    name: "stop",           // command name
    usage: "helpを参照",          // usage
    description: "サーバーを停止する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error).finally(_ => process.exit(0));
    }
};