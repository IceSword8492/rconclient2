const util = require("../lib/util");

module.exports = {
    name: "teammsg",           // command name
    usage: "helpを参照",          // usage
    description: "チームへメッセージを送信する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
