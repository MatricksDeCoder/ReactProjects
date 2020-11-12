module.exports = {

    entry: ['./src/index.js'], //entry for js file
    output: {
        path: __dirname + '/dist/', //put into dist file path.resolve(__dirname ,
        publicPath: '/',
        filename: 'bundle.js'//name of bundled output js file 
    },
    devServer: {
        contentBase: './dist', //where to serve content from
    },
    module: {
        rules : [
            {test: /\.(js | jsx)$/,
            exclude: '/node_modules',
            use: ['babel-loader'] }//run through babel
            ,
            {test: /\.(js | jsx)$/,
                exclude: '/node_modules',
                use: ['eslint-loader'] }//run through eslint
        ]
    }, 
    resolve: { //allows picking up extensions to files no need to use .js when importing
        extensions: ['.js','.jsx'],
        //modules: ["src", "node_modules"]
    }
   
}

