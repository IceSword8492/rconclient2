const util = require("../lib/util");

module.exports = {
    name: "setworldspawn",           // command name
    usage: "helpを参照",          // usage
    description: "ワールドのスポーン地点を設定する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
