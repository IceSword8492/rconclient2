const util = require("../lib/util");

module.exports = {
    name: "replaceitem",           // command name
    usage: "helpを参照",          // usage
    description: "インベントリのアイテムを置き換える",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};