const path = require("path");
const ProgressPlugin = require("progress-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

let Env = "local";

let settings = {
    entry: {
        app: "./src/index.ts",
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "js/[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass"),
                        },
                    },
                ],
            },
        ],
    },
    // devtool: 'eval-cheap-module-source-map',
    mode: "development",
    devServer: {
        open: {
            app: {
                name: 'chrome',
                arguments: ['--incognito', '--new-window'],
            },
        },
        host: "localhost",
        // static: {
      	// directory: path.join(__dirname,'..', 'public'),
        // },
        compress: true,
        port: 9000,
        devMiddleware: {
            writeToDisk: true
        }
    },
    resolve: {
        enforceExtension: false,
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    plugins: [
        
        new ProgressPlugin({
            activeModules: false,
            entries: true,
            handler(percentage, message, ...args) {
                // custom logic
            },
            modules: true,
            modulesCount: 5000,
            profile: false,
            dependencies: true,
            dependenciesCount: 10000,
            percentBy: null,
        }),
        
        new HtmlWebpackPlugin({
            chunks: ["app"],
            template: "./src/html/index.html",
            //filename:"index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: "src/assets", to: "assets" },
            //   { from: "other", to: "public" },
            ],
          }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: "vendor",
                    chunks: "all",
                },
            },
        },
    },
};

module.exports = (env, argv) => {
    if (argv.env.NODE_ENV == "production")
        settings.module.rules[2].use[0] = MiniCssExtractPlugin.loader;

    if (argv.mode === "production") settings.devtool = "source-map";

    return settings;
};
