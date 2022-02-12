import { fileURLToPath } from 'url';
import { resolve, join, dirname } from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    entry: join(__dirname, './src/js/index.js'),
    target: 'web',
    output: {
        filename: './static/js/bruception.bundle.js',
        path: resolve(__dirname, './dist'),
        clean: true,
    },
    devServer: {
        static: resolve(__dirname, './dist'),
        compress: true,
        port: 3000,
        open: true,
        client: {
            overlay: false,
        },
    },
    plugins: [
        new ESLintPlugin({
            context: './src/js',
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/static', to: './static' },
            ],
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            templateParameters: {
                hello: 'world',
            },
            minify: true,
        }),
    ],
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ],
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }]
                        ]
                    }
                },
                resolve: {
                    fullySpecified: false,
                },
            },
        ],
    },
};
