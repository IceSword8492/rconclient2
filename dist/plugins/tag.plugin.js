const util = require("../lib/util");

module.exports = {
    name: "tag",           // command name
    usage: "helpを参照",          // usage
    description: "エンティティのタグを操作する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
