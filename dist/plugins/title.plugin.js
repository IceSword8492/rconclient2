const util = require("../lib/util");

module.exports = {
    name: "title",           // command name
    usage: "helpを参照",          // usage
    description: "画面に表示するタイトルを管理する",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};