// import the text plugin used to handle the stylesheets
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  // specify the path for the entrypoint into our app.
  entry: {
    main: path.resolve(__dirname, './src/scripts/index.js'),
  },

  output: {
    // specify that all static assets should be sent to the dist folder
    path: path.resolve(__dirname, 'dist'),

    // specify that the resultant bundle should be built in the bundle.js file
    filename: '[name].bundle.js',
  },
  // optimization: {
  //   minimize: false,
  // },
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
          // MiniCssExtractPlugin.loader,
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
          },
        },
      },
    ],
  },
  // turn on the source map, for easier debugging
  // devtool: 'source-map',

  plugins: [
    // create an instance of the extract-text-webpack-plugin which will create the style.css file. this tells the style loader (above) where to put that text it extracted from the scss files after it finishes processing it.
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'app'),
    //       to: path.resolve(__dirname, 'dist'),
    //       globOptions: {
    //         gitignore: true,
    //         ignore: [
    //           'budafooda.png',
    //           '*.json',
    //           '*.js',
    //           '*.md',
    //           'index.html',
    //           // '**/images/**',
    //           // '**/scripts/**',
    //           '**/styles/**',
    //         ],
    //       },
    //     },
    //   ],
    // }),
  ],
};
