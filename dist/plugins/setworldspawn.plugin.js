const util = require("../lib/util");

module.exports = {
    name: "setworldspawn",           // command name
    usage: "helpを参照",          // usage
    description: "ワールドのスポーン地点を設定する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};