const path = require('path');


module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
    },
    module:{
        rules:[
          {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              exclude: /node_modules/,
              use: [{
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-react']
                }
              }]
          }
      ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9090,
      },
};
  