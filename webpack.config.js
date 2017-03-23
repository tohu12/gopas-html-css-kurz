module: {
    entry: "prvni.html"
    output: {
        filename: 'bundle.js'
    }
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }