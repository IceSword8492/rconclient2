const util = require("../lib/util");

module.exports = {
    name: "save-off",           // command name
    usage: "helpを参照",          // usage
    description: "サーバーの自動セーブを無効にする",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
