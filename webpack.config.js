var path = require("path");

var config={
    entry:{
        main:"./src/main.js" //执行命令的路径开始
    },
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"main.js",
        publicPath: "dist/"
    },
    devServer: {
        open:true,
        port:3000,
        contentBase:"src"
    },
    module:{
        rules:[
            {test: /\.css$/, use: ["style-loader","css-loader"]},
            /*
                limit给定的值是图片的大小单位是byte,如果我们引用的图片大于给定的limit值,则不会被转为
                base64格式的字符串。
             */
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ["url-loader?limit=7000&name=[hash:8]-[name].[ext]"]},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: ["url-loader"]}, //处理字体文件的配置项
            {test:/\.vue$/,use:"vue-loader"}
        ]
    }
}

module.exports=config;//nodejs中的语法

