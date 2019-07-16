const util = require("../lib/util");

module.exports = {
    name: "data",           // command name
    usage: "helpを参照",          // usage
    description: "ブロックエンティティやエンティティのNBTデータを取得、マージ、変更、消去する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};