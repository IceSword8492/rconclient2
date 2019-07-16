const util = require("../lib/util");

module.exports = {
    name: "tag",           // command name
    usage: "helpを参照",          // usage
    description: "エンティティのタグを操作する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};