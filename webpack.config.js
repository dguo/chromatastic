const config = {
    entry: {
        background: "./source/background.js"
    },
    devtool: "inline-source-map",
    output: {
        filename: "[name].js",
        path: __dirname + "/extension/js"
    }
};

module.exports = config;
