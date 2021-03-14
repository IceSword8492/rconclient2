const util = require("../lib/util");

module.exports = {
    name: "spreadplayers",           // command name
    usage: "helpを参照",          // usage
    description: "エンティティをランダムな場所に配置する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
