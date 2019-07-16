import Rcon from "./lib/rcon"
import * as readline from "readline"
import * as fs from "fs"
import * as path from "path"
import util from "./lib/util"
import * as parser from "./lib/parser"

// define settings
const settings = {
    file: __dirname + "/settings.json",
    plugindir: "./plugins",
    plugins: new Array<Object>(),
    rconhost: "localhost",
    rconport: 25575,
    rconpass: "",
    rcontimeout: 5000,
    loaded: false,
    silent: false
};

// load settings from settings.json
try
{
    const file = JSON.parse(fs.readFileSync(settings.file, "utf8"));
    Object.assign(settings, file);
    if (file.plugins && file.plugins.length)
    {
        settings.loaded = true;
    }
}
catch
{
    util.warn(`failed to load settings file: ${settings.file}`);
}

// load settings from command line options
for (let i = 0; i < process.argv.length; i++)
{
    switch (process.argv[i])
    {
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

// define walk
const walk = (dir: string): void =>
{
    
    let f = fs.readdirSync(dir, {withFileTypes: true});
    f.forEach((d: any, i: any, dirents: any): void => {
        if (d.isDirectory())
        {
            walk(dir + "/" + d.name);
        }
        else
        {
            d.name = dir + (dir.lastIndexOf("/") === dir.length - 1 ? "" : "/") + d.name;
            if (d.name.match(/\.plugin\.js/g))
            {
                if (!settings.loaded || (
                        settings.loaded
                    &&  settings.plugins.find((entry: any) => 
                        entry === d.name.substring(d.name.lastIndexOf("/") + 1, d.name.lastIndexOf(".plugin.js"))                    
                    )
                ))
                {
                    const plugin = require(d.name);
                    settings.plugins.push(plugin);
                    if (!settings.silent)
                    {
                        util.info(`plugin loaded: ${plugin.name}`);
                    }
                }
            }
        }
    });
};

walk(path.join(__dirname, settings.plugindir));

// add default plugin (exit)
settings.plugins.push({
    name: "exit",
    usage: "exit",
    description: "exit rcon process",
    exec: (_: any): void => process.exit(0)
});

if (!settings.silent)
{
    util.info(`plugin loaded: exit`);
}

settings.plugins.sort((a: any, b: any): number => ~~(a.name > b.name) * 2 - 1);

util.info("loading completed: plugins");

// create Rcon instance
const rcon = new Rcon(settings.rconhost, settings.rconport, settings.rconpass, settings.rcontimeout);

// define exec
const exec = (line: string): void => {
    settings.plugins.forEach((plugin: any): void => {
        if (parser.parse(line)[0] === plugin.name)
        {
            plugin.exec({line, rcon, settings, util});
        }
    });
};

// define reader
const reader: any = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on("line", (line: string) => exec(line))