const util = require("../lib/util");

module.exports = {
    name: "save-all",           // command name
    usage: "helpを参照",          // usage
    description: "サーバーのワールドをセーブする",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};