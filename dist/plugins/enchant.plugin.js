const util = require("../lib/util");

module.exports = {
    name: "enchant",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーのアイテムをエンチャントする",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};