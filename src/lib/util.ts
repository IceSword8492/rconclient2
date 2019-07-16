export default new class Util
{
    public info (message: string): void
    {
        const date = new Date;
        console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} INFO]: ${message}`);
    }
    public warn (message: string): void
    {
        const date = new Date;
        console.warn(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} WARN]: ${message}`);
    }
    public error (message: string): void
    {
        const date = new Date;
        console.error(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ERROR]: ${message}`);
    }
}