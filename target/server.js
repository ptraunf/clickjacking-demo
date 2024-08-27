import express from "express";

export const targetServer = express();

export const targetLog = function(...args) {
    console.log(`TARGET: ${args.join(" ")}`);
}


targetServer.use(express.static('target/frontend'));
targetServer.use((req, res, next) => {
    targetLog(`${req.method} ${req.originalUrl}`);
    next();
});

export const targetPort = 3333;