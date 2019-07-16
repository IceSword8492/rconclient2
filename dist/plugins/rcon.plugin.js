module.exports = {
    name: "rcon",
    usage: "rcon <subcommand> [arg]...\n\tsubcommand:\n\t\tcommands: コマンド一覧を表示 (arg[0]: command)\n\t\thelp: ヘルプを表示 (arg[0]: command)",
    exec: async ({line, rcon, settings, util}) => {
        const parser = require("../lib/parser");
        const command = parser.parse(line);
        switch (command[1])
        {
        case "commands":
            settings.plugins.forEach(entry => {
                if (command[2] && command[2].includes(entry.name) || !command[2])
                {
                    console.log(entry.name);
                }
            });
            break;
        case "help":
            settings.plugins.forEach(entry => {
                if (command[2] && command[2] === entry.name || !command[2])
                {
                    console.log(`\n${entry.name}`);
                    if (entry.usage)
                    {
                        console.log(`\tUsage: ${entry.usage}`);
                    }
                    if (entry.description)
                    {
                        console.log(`\tDescription: ${entry.description.replace(/(\\r)?\\n/g, "\n\t\t")}`);
                    }
                    if (entry.option)
                    {
                        console.log(`\tOptions: \n\t\t${entry.option.replace(/(\\r)?\\n/g, "\n\t\t")}`);
                    }
                }
            });
            break;
        }
    }
};