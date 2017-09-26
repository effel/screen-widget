const path = require('path');
const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');

module.exports = {
    watch: true,
    devtool: debug ? "inline-sourcemap" : null,
    entry:  ["./assets/js/irt.js"],
    output: {
      path: path.resolve('./assets/js/bundle'),
      filename: 'irt_bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.js$/],
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
					query: {
						presets: ['es2015']
					}
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader',  'sass-loader']
            }
        ]
    },
	plugins: [
	   new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
}

