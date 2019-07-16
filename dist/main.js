Object.defineProperty(exports, "__esModule", { value: true });
const rcon_1 = require("./lib/rcon");
const readline = require("readline");
const fs = require("fs");
const path = require("path");
const util_1 = require("./lib/util");
const parser = require("./lib/parser");
const settings = {
    file: __dirname + "/settings.json",
    plugindir: "./plugins",
    plugins: new Array(),
    rconhost: "localhost",
    rconport: 25575,
    rconpass: "",
    rcontimeout: 5000,
    loaded: false,
    silent: false
};
try {
    const file = JSON.parse(fs.readFileSync(settings.file, "utf8"));
    Object.assign(settings, file);
    if (file.plugins && file.plugins.length) {
        settings.loaded = true;
    }
}
catch {
    util_1.default.warn(`failed to load settings file: ${settings.file}`);
}
for (let i = 0; i < process.argv.length; i++) {
    switch (process.argv[i]) {
        case "--plugin-dir":
            settings.plugindir = process.argv[++i];
            break;
        case "--host":
            settings.rconhost = process.argv[++i];
            break;
        case "--port":
            settings.rconport = parseInt(process.argv[++i]);
            break;
        case "--pass":
            settings.rconpass = process.argv[++i];
            break;
        case "--timeout":
            settings.rcontimeout = parseInt(process.argv[++i]);
            break;
        case "--silent":
            settings.silent = true;
            break;
    }
}
const walk = (dir) => {
    let f = fs.readdirSync(dir, { withFileTypes: true });
    f.forEach((d, i, dirents) => {
        if (d.isDirectory()) {
            walk(dir + "/" + d.name);
        }
        else {
            d.name = dir + (dir.lastIndexOf("/") === dir.length - 1 ? "" : "/") + d.name;
            if (d.name.match(/\.plugin\.js/g)) {
                if (!settings.loaded || (settings.loaded
                    && settings.plugins.find((entry) => entry === d.name.substring(d.name.lastIndexOf("/") + 1, d.name.lastIndexOf(".plugin.js"))))) {
                    const plugin = require(d.name);
                    settings.plugins.push(plugin);
                    if (!settings.silent) {
                        util_1.default.info(`plugin loaded: ${plugin.name}`);
                    }
                }
            }
        }
    });
};
walk(path.join(__dirname, settings.plugindir));
settings.plugins.push({
    name: "exit",
    usage: "exit",
    description: "exit rcon process",
    exec: (_) => process.exit(0)
});
if (!settings.silent) {
    util_1.default.info(`plugin loaded: exit`);
}
settings.plugins.sort((a, b) => ~~(a.name > b.name) * 2 - 1);
util_1.default.info("loading completed: plugins");
const rcon = new rcon_1.default(settings.rconhost, settings.rconport, settings.rconpass, settings.rcontimeout);
const exec = (line) => {
    settings.plugins.forEach((plugin) => {
        if (parser.parse(line)[0] === plugin.name) {
            plugin.exec({ line, rcon, settings, util: util_1.default });
        }
    });
};
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on("line", (line) => exec(line));
