const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode:'development',
    entry : path.resolve(__dirname,'../src/index.ts'),
    output: {
    	filename:'app.js'
    },
    resolve: {
        //模板导入扩展处理
    	extensions:['.ts','.js','.tsx'],
    },
    devtool:'eval-cheap-module-source-map',
    module:{
    	rules:[
            {
            	test:/\.ts$/,
              include: path.resolve(__dirname,'../src'),
              use:['ts-loader']
            }
        ]
    },
    plugins:[
    	new HtmlWebpackPlugin({
        	template:'./public/index.html'
        })
    ]
} 