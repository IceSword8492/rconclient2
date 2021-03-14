const util = require("../lib/util");

module.exports = {
    name: "say",           // command name
    usage: "helpを参照",          // usage
    description: "複数のプレイヤーにメッセージを表示する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
