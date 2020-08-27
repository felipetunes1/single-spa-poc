'use strict'

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");

new WebpackDevServer(webpack(config), {
   publicPath: config.output.publicPath,
   hot: true,
   historyApiFallback: true,
   stats: { colors : true}
}).listen(3040, (err) => {
   if(err) {
      return console.err(err);
   } 
   console.log("Listening on http://localhost:3040");
});
