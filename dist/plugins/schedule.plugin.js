const util = require("../lib/util");

module.exports = {
    name: "schedule",           // command name
    usage: "helpを参照",          // usage
    description: "関数を遅延実行させる",    // description
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};