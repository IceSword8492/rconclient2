module.exports = {
    name: "help",
    usage: "help [command]",
    description: "コマンドのヘルプを表示",
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line);
        console.log(response.replace(/\/([^/]+)/g, "\n/$1"));
    }
};