const util = require("../lib/util");

module.exports = {
    name: "summon",           // command name
    usage: "helpを参照",          // usage
    description: "エンティティを召喚する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
