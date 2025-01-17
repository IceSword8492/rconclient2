const util = require("../lib/util");

module.exports = {
    name: "tell",           // command name
    usage: "helpを参照",          // usage
    description: "他のプレイヤーにプライベートメッセージを表示する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
