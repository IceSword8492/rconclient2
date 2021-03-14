const util = require("../lib/util");

module.exports = {
    name: "save-all",           // command name
    usage: "helpを参照",          // usage
    description: "サーバーのワールドをセーブする",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
