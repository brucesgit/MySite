/**
 * Created by ued on 2016/11/12.
 */

var mockPolicy = require('../../mock/index');

module.exports = function (proxyReq, req, res, options) {
    var data = new Buffer(0);

    req.on('data', function (chunk) {
        data = Buffer.concat([data, chunk]);
    });

    req.on('end', function () {
        // 这里再根据情况判断是不是要本地mock数据
        var option = {
            path: req.path,
            data: data.toString(),
            method: req.method.toLowerCase(),
            req: req,
            res: res
        };
        var mockData = mockPolicy(option);
        if (mockData && mockData.mock) {
            // 不响应代码请求
            proxyReq.abort();
            proxyReq.destroy();
            //
            if (typeof mockData.data === 'string' && mockData.data instanceof Buffer) {
                res.end(mockData.data);
            } else {
                res.end(JSON.stringify(mockData.data));
            }
        }
    });
};
