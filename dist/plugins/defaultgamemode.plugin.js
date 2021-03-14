const util = require("../lib/util");

module.exports = {
    name: "defaultgamemode",           // command name
    usage: "helpを参照",          // usage
    description: "デフォルトのゲームモードを設定する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
