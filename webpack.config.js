const path = require("path");

module.exports = {
    entry: ["./src/InputForm.js", "./src/App.js", "./src/Output.js", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
