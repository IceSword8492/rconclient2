export default class Rcon {
    private static ModernRcon: any = require("modern-rcon");

    private host: string;
    private port: number;
    private password: string;
    private timeout: number;

    constructor (host: string, port: number, password: string, timeout: number)
    {
        // Error Handling
        if (!host || (host && host.length === 0)) throw new Error("length of host must be more than 0");
        if (!Number.isInteger(port)) throw new TypeError("port must be integer");
        if (!password || (password && password.length === 0)) throw new Error("length of password must be more than 0");
        if (!Number.isInteger(timeout)) throw new TypeError("timeout must be integer");

        // Initializing members
        this.host = host;
        this.port = port;
        this.password = password;
        this.timeout = timeout;
    }

    async send (command: string, callback: (message: string) => void = undefined): Promise<string>
    {
        return new Promise(async (resolve: any) => {
            const r = new Rcon.ModernRcon(this.host, this.port, this.password, this.timeout);
            await r.connect();
            const res = (await r.send(command)) || "";
            await r.disconnect();
            if (callback)
            {
                callback(res);
            }
            resolve(res);
        });
    }
};