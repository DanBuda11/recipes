const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  // specify the path for the entrypoint into our app.
  entry: {
    main: path.resolve(__dirname, './src/scripts/index.js'),
  },

  output: {
    // specify that the resultant bundle should be built in the bundle.js file
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        // configure our styles. watch specifically for any imports that have the file extension .scss
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
        ],
      },
      {
        // configure our javascript. watch specifically for any imports that have the file extension .js or .jsx
        test: /\.jsx?$/,
        // don't try to compile node_modules into memory!
        exclude: /node_modules/,
        // when matching files are imported, run them through the babel loader to process them.
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 8192,
            name: 'images/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: '*.ico' },
        {
          from: '*.png',

          globOptions: {
            ignore: ['**/budafooda.*'],
          },
        },
        { from: '*.xml' },
        { from: '*.svg' },
        { from: 'manifest.json' },
      ],
    }),
  ],
};
