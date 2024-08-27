import express from 'express';

const attackerServer = express();
const targetServer = express();

function targetLog(...args) {
    console.log(`TARGET: ${args.join(" ")}`);
}
function attackerLog(...args) {
    console.log(`ATTACKER: ${args.join(" ")}`);
}

attackerServer.use(express.static('attacker'));
attackerServer.use((req, res, next) => {
    attackerLog(`${req.method} ${req.originalUrl}`);
    next()
});

targetServer.use(express.static('target'));
targetServer.use((req, res, next) => {
    targetLog(`${req.method} ${req.originalUrl}`);
    next();
});

const banner = `Clickjacking Demo`;

console.log(banner);

const attackerPort = 6660;
attackerServer.listen(attackerPort, () => {
    attackerLog(`listening on port ${attackerPort}`);
});

const targetPort = 3333;
targetServer.listen(targetPort, () => {
    targetLog(`listening on port ${targetPort}`);
});
