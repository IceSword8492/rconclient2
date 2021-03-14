const util = require("../lib/util");

module.exports = {
    name: "give",           // command name
    usage: "helpを参照",          // usage
    description: "プレイヤーにアイテムを与える",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
