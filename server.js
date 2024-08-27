import express from 'express';
import {targetLog, targetPort, targetServer} from "./target/server.js";
import {attackerLog, attackerPort, attackerServer} from "./attacker/server.js"

const banner = `Clickjacking Demo`;

console.log(banner);


targetServer.listen(targetPort, () => {
    targetLog(`listening on port ${targetPort}`);
});
attackerServer.listen(attackerPort, () => {
    attackerLog(`listening on port ${attackerPort}`);
});


