module.exports = {
    name: "advancement",
    usage: "helpを参照",
    description: "プレイヤーの進捗を付与、削除または確認する",
    exec: async ({line, rcon, settings, util}) => {
        const response = await rcon.send(line).catch(util.error);
        util.info(response);
    }
};
