const util = require("../lib/util");

module.exports = {
    name: "forceload",           // command name
    usage: "helpを参照",          // usage
    description: "チャンクを常に読み込ませるかどうかを切り替える",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
