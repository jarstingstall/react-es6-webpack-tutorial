module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: './public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/}
        ]
    },
    devServer: {
        contentBase: './public/'
    }
}