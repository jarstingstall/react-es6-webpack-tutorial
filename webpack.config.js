module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: './public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules|bower_components/}
        ]
    },
    devServer: {
        contentBase: './public/'
    }
}