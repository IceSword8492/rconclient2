Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new class Util {
    info(message) {
        const date = new Date;
        console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} INFO]: ${message}`);
    }
    warn(message) {
        const date = new Date;
        console.warn(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} WARN]: ${message}`);
    }
    error(message) {
        const date = new Date;
        console.error(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ERROR]: ${message}`);
    }
};
