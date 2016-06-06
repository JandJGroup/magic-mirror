var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
      main: "./app.js",
    },
    output: {
          path: path.join(__dirname),
          filename: "[name].bundle.js"
        },
        plugins: [
                  new webpack.optimize.OccurenceOrderPlugin(),
                  new webpack.HotModuleReplacementPlugin(),
                  new webpack.NoErrorsPlugin(),
                  new webpack.ProvidePlugin({ // needed for bootstrap
                    $: "jquery",
                    jQuery: "jquery"
                })
                ],
        module: {
            loaders: [
                { test: /\.css$/, loader: "style-loader!css-loader" },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
                { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader:"url?prefix=font/&limit=10000&mimetype=application/font-woff" },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },

                {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  loader: 'babel', // 'babel-loader' is also a legal name to reference
                  query: {
                    presets: ['react', 'es2015']
                  }
                }
            ]
        },
    };
