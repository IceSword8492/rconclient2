const util = require("../lib/util");

module.exports = {
    name: "locate",           // command name
    usage: "helpを参照",          // usage
    description: "最も近い構造物の座標を表示する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};