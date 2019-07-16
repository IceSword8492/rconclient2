const util = require("../lib/util");

module.exports = {
    name: "",           // command name
    usage: "",          // usage
    description: "",    // description
    option: "",         // description of option
    version: "",        // version of plugin        e.g. 1.0.0
    target: "",         // target minecraft version e.g. >= 1.14
    exec: async ({line, rcon, settings, util}) => {
        rcon.send(line).then(util.info).catch(util.error);
    }
};