const util = require("../lib/util");

module.exports = {
    name: "pardon",           // command name
    usage: "helpを参照",          // usage
    description: "BANリストから項目を削除する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
