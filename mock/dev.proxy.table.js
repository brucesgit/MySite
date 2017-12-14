/**
 * Created by ued on 2016/11/10.
 */

var hook = require('./hook');

/**
 *
 * @param proxyReq
 * @param req
 * @param res
 * @param options
 */

function onProxyReq (proxyReq, req, res, options) {
    hook(proxyReq, req, res, options);

    console.log('\n-------------------- Proxy Request ----------------------');
    console.log('url: ', JSON.stringify(proxyReq.path));
    console.log('method: ', JSON.stringify(proxyReq.method));
    console.log('headers: ', JSON.stringify(proxyReq._headers, true, 4));
    console.log('-------------------- Proxy Request ----------------------\n');
}

function onProxyRes (proxyRes, req, res, options) {

    console.log('\n-------------------- Proxy Response ----------------------');
    //console.log('url: ' + JSON.stringify(proxyRes.path));
    res.setHeader('Content-Type', 'application/json');
    console.log('headers: ', JSON.stringify(proxyRes.headers, true, 4));
    console.log('\n-------------------- Proxy Response ----------------------');
}


/**
 * 映射列表，匹配上URL时，会走代理
 * 把后台请求都用代理转发，这样有下面两个优点：
 * 1. 可以做到无缝跟后台联调，使用npm run dev后，静态资源都是访问本地，后台请求转发到对应的后台请求上面
 * 2. 转后请求时可以定制，比如直接使用本地json文件，模拟后台各种异常数据
 *
 */
module.exports = {

    // key 为匹配上的URL，相对于整个根目录，比如http://localhost/vapi则配置/vapi即可
    '/cloud': {

        // 目标地址，比如 http://localhost/vapi => https://13.1.0.8/vapi
        target: 'https://10.18.26.24/',
        
        // 关闭证书错误提醒
        secure: false,

        // 日志提示
        //logLevel: 'debug',
        // 发送到目标服务器时添加自定义头部
        headers: {},

        // proxy 定制，转发到目标服务器前可以hook到本地json
        onProxyReq: onProxyReq,

        // 代理数据返回时触发，可以修改后台返回的数据，比如统一添加http头部等
        onProxyRes: onProxyRes
    }
};
