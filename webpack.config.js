module.exports = {
    module: {
      rules: [
        {
          test: /\.(pdf|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };