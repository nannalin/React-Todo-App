//var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    //devtool: debug ? "inline-source-map" : null,
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src' // default: look for index.js in ./src
    ],
    // webpack will ouptput files for production
    output: {path: path.join(__dirname, 'public'),
        filename: 'bundle.js'},
    
    //watch: true,
    resolve: {
        moduleDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader/webpack', 'babel?presets[]=react,presets[]=es2015']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ] 
    /**
    : // Production    
    [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin( { 
            mangle: false,
            sourcemap: false
        } )
    ]
    */
};