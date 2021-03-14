const util = require("../lib/util");

module.exports = {
    name: "seed",           // command name
    usage: "helpを参照",          // usage
    description: "シード値を表示する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
