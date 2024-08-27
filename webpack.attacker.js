import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

process.env.NODE_ENV = process.env.NODE_ENV || "development";

function getTargetIframeSrc(env) {
    const LOCAL_TARGET_URL = "http://localhost:3333/target.html";
    const PROD_TARGET_URL = "https://clickjack-target.pages.dev/target.html";
    switch (env) {
        case "development":
            return LOCAL_TARGET_URL;
        case "production":
            return PROD_TARGET_URL;
        default:
            return LOCAL_TARGET_URL;
    }
}

export default (env, argv) => {
    const targetSrcUrl = getTargetIframeSrc(argv.mode);
    return {
        entry: "./attacker/frontend/dummy.js",
        plugins: [
            new HtmlWebpackPlugin({
                template: './attacker/frontend/index.ejs',
                templateParameters: {
                    targetSrc: targetSrcUrl,
                }
            }),
        ],
        module: {
            rules: [],
        },
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, 'attacker/dist'),
            publicPath: "/",
            clean: true,
        },
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 4800000
        }
    }
};