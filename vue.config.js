module.exports = {
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-pxtorem')({ // 把px单位换算成rem单位
                    rootValue: 37.5, //通常结合 lib-flexible 设置 rem 基准值,默认用37.5,不然容易出问题
                    selectorBlackList: ['.ignore'],  //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换
                    propList: ['*']
  
            })
          ]
        }
      }
    },
    devServer: {
      open: true,
	  proxy: {
	  	'/api': {
	  		target:'http://v.juhe.cn/joke/content',
	  		ws: true,
	  		changeOrigin: true,
	  		pathRewrite: {
	  			'^/api':'' //路径的替换规则
	  			//这里的配置是正则表达式，以/api开头的将会被用用‘/api’替换掉，假如后台文档的接口是 /api/list/xxx
	  			//前端api接口写：axios.get('/api/list/xxx') ， 被处理之后实际访问的是：http://news.baidu.com/api/list/xxx
	  		},
	  	},
	  	'/foo':{
	  		target:'http://apis.juhe.cn/mobile/get',
	  		ws:true,
	  		changeOrigin:true,
	  		pathRewrite:{
	  			'^/foo':''
	  		}
	  	}
	  }
  },
}