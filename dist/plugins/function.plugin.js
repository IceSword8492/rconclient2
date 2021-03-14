const util = require("../lib/util");

module.exports = {
    name: "function",           // command name
    usage: "helpを参照",          // usage
    description: "関数を実行する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
