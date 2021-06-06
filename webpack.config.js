/* eslint-env node */

import {dirname} from "path";
import {fileURLToPath} from "url";

import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    entry: {
        background: "./source/background.ts",
        options: "./source/options.tsx"
    },
    devtool:
        process.env.NODE_ENV === "production" ? undefined : "inline-source-map",
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
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },
    plugins: [new ForkTsCheckerWebpackPlugin()]
};
