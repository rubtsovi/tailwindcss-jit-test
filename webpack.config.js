/* eslint-disable @typescript-eslint/no-var-requires */
const Encore = require("@symfony/webpack-encore");
const HtmlWebpackPlugin = require("html-webpack-plugin");


if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "development");
}

Encore
    .setOutputPath("dist")
    .setPublicPath("/")
    .addEntry("app", "./src/app.js")
    .addEntry("styles", "./src/app.css")
    .enablePostCssLoader()
    .splitEntryChunks()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(Encore.isDev())
    .enableSingleRuntimeChunk()
    .configureDevServerOptions((options) => {
        options.allowedHosts = 'all';
        options.open = true;
        delete options.client.host;
    })
    .addPlugin(new HtmlWebpackPlugin({
        chunks: "all"
    }));

const config = Encore.getWebpackConfig();

module.exports = config;
