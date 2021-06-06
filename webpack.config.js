import {dirname} from "path";
import {fileURLToPath} from "url";

import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    entry: {
        background: "./source/background.ts",
        options: "./source/options.tsx"
    },
    devtool: "inline-source-map",
    output: {
        filename: "[name].js",
        path: __dirname + "/extension/js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    /* Disable the type checker because the fork plugin takes
                       care of that. */
                    transpileOnly: true
                }
            }
        ]
    },
    plugins: [new ForkTsCheckerWebpackPlugin()]
};
