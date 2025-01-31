import express from "express";

export const attackerServer = express();
export const attackerLog = function (...args) {
    console.log(`ATTACKER: ${args.join(" ")}`);
}

attackerServer.use(express.static('attacker/dist'));
attackerServer.use((req, res, next) => {
    attackerLog(`${req.method} ${req.originalUrl}`);
    next()
});
export const attackerPort = 6660;
attackerServer.listen(attackerPort, () => {
    attackerLog(`listening on port ${attackerPort}`);
});
