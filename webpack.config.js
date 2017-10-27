module.exports = {
  context: __dirname + "/dist/test",
  entry: __dirname + "/src/test/index.js",
  output: {
    path: __dirname + "/dist/test",
    filename: "bundle_index.js"
  },
  module: {
    rules: [
      // the 'transform-runtime' plugin tells babel to require the runtime
      // instead of inlining it.
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              "env",
              "stage-2"
            ],
            "plugins": [
              [
                "transform-runtime",
                {
                  "polyfill": true,
                  "regenerator": true
                }
              ]
            ]
          }
        }
      }
    ]
  }
};