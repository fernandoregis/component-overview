module.exports = {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 100000,
        maxSize: 9900000  
      },
    },
  };