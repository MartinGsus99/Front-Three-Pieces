const path=requrie('path');
const webpack=require('webpack');

module.exports={
    entry:'./app/index/jsx',
    output:{path:__dirname,filename:'dist/bundle.js'},  //输出文件
    module:{
        loaders:[
            {
                test:'/.jsx?$/',            //匹配所有jsx文件
                loader:'babel-loader',      
                exclude:/node_modules/,
                query:{
                    presets:['es2015','react']          //使用Babel Es2015和React插件；
                }
            }
        ]
    }
}