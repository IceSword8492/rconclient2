const util = require("../lib/util");

module.exports = {
    name: "publish",           // command name
    usage: "helpを参照",          // usage
    description: "ワールドをローカルのネットワークに開放する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};