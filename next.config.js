
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

const url = process.env.NEXT_PUBLIC_HOST
console.log(url)

module.exports = withCSS(withSass({
    assetPrefix: url + '/',
    publicRuntimeConfig: {
        folderStatic: url
    },
    cssLoaderOptions: {
        url: false
    },
    webpack(config, options) {

        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        },
        );

        return config;
    }
}));


