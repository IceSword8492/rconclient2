const util = require("../lib/util");

module.exports = {
    name: "title",           // command name
    usage: "helpを参照",          // usage
    description: "画面に表示するタイトルを管理する",    // description
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
