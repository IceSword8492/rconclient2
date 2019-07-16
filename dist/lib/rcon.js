Object.defineProperty(exports, "__esModule", { value: true });
class Rcon {
    constructor(host, port, password, timeout) {
        if (!host || (host && host.length === 0))
            throw new Error("length of host must be more than 0");
        if (!Number.isInteger(port))
            throw new TypeError("port must be integer");
        if (!password || (password && password.length === 0))
            throw new Error("length of password must be more than 0");
        if (!Number.isInteger(timeout))
            throw new TypeError("timeout must be integer");
        this.host = host;
        this.port = port;
        this.password = password;
        this.timeout = timeout;
    }
    async send(command, callback = undefined) {
        return new Promise(async (resolve) => {
            const r = new Rcon.ModernRcon(this.host, this.port, this.password, this.timeout);
            await r.connect();
            const res = (await r.send(command)) || "";
            await r.disconnect();
            if (callback) {
                callback(res);
            }
            resolve(res);
        });
    }
}
Rcon.ModernRcon = require("modern-rcon");
exports.default = Rcon;
;
