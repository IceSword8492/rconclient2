# RconClient2


## 概要


Minecraftのバニラ鯖を外部から操作できます。 (Mod不要)

Node.jsが必要です。 **(v12.1.0以上で動作確認済み)**


## 使用法


[前バージョンの使用法](https://github.com/IceSword8492/rconclient#%E4%BD%BF%E7%94%A8%E6%B3%95)
  
付属プラグインに含まれるコマンドの一部
```sh
Command: rcon
Usage: rcon <subcommand: string> [argument: string]
SubCommands:
    commands: show list of commands
    help: show help of commands

Command: list
Usage: list [uuids: string]
```
  
ビルトインコマンド
```sh
exit
```

## オプション


```sh
Usage: node . [option...]

Options:
    --plugin-dir <directory: string>    プラグイン読み込みディレクトリを指定します。
    --host <host: string>               サーバアドレスを指定します。
    --port <port: integer>              Rconポートを指定します。
    --pass <password: string>           Rconパスワードを指定します
    --timeout <millisecond: integer>    Rconタイムアウト時間を指定します。[ms]
    --silent                            一部のコンソール出力を停止します。
```