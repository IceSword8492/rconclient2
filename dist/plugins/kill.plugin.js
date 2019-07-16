const util = require("../lib/util");

module.exports = {
    name: "kill",           // command name
    usage: "helpを参照",          // usage
    description: "エンティティ(プレイヤー、Mob、アイテムなど)をキル(抹消)する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};