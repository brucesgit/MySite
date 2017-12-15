/**
 * Created by ued on 2016/11/12.
 */

var fs = require('fs');
var path = require('path');


/**
 * 根据请求的数据去加载不同路径下的本地数据
 * 比如: SCP 是所有URL都会自动以 / 结尾，要先自动去掉
 * 比如：HCI 是 restful 风格，可以访问目录或者文件，如果是目录，则自动加载目录下面的index.js
 * 比如: DC 是根据 app_args.name 找到相应的文件
 * 比如：AC、AF是直接访问 cgi-bin 目录
 *
 * <b>不同的产品线，这个需要相应的改动</b>
 *
 * @param {Object} option
 * @returns {String} realPath
 */
function mapPath (option) {
    // 不同产品线要改下这里的映射方式
    return mapPathCloud(option);
}

/**
 * 云控制器 产品线映射
 * @param {Object} option
 * @returns {String}
 */
function mapPathCloud (option) {
    var path = option.path;
    option.path = option.path.replace(/index.php/, 'cloud');
    var ret = mapPathHCI(option);
    option.path = path;

    return ret;
}

/**
 * SCP 产品线映射
 * @param {Object} option
 * @returns {String}
 */
function mapPathBBC (option) {
    var path = option.path;
    if (option.path.slice(-1) === '/') {
        option.path = option.path.slice(0, -1);
    }

    var ret = mapPathHCI(option);
    option.path = path;

    return ret;
}

/**
 * HCI 产品线映射
 * @param {Object} option
 * @returns {String}
 */
function mapPathHCI (option) {
    var realPath = path.join(__dirname, option.path);
    if (fs.existsSync(realPath) && fs.statSync(realPath).isDirectory()) {
        realPath = path.join(realPath, '/index.js');
    } else {
        realPath += '.js';
    }
    if (!fs.existsSync(realPath)) {
        return '';
    }
    return realPath;
}

/**
 * DC 产品线映射
 * @param option
 * @returns {*}
 */
function mapPathDC (option) {
    var data = option.data;
    // launch.php 的提示才需要读app_args，要不仍然是CGI
    if (!/launch\.php$/.test(option.path)) {
        return mapPathACAF(option);
    }
    try {
        data = JSON.parse(data);
    } catch (e) {
        data = {};
    }
    if (!data || !data.app_args || !data.app_args.name) {
        return '';
    }
    var realPath = __dirname;
    data.app_args.name.split('.').forEach(function (name, index, arr) {
        realPath.join(realPath, name + (index === arr.length - 1 ? '.js' : ''));
    });
    if (!fs.existsSync(realPath)) {
        return '';
    }
    return realPath;
}

/**
 * AC、AF 产品线映射
 * @param option
 * @returns {*}
 */
function mapPathACAF (option) {
    var realPath = path.join(__dirname, option.path + '.js');
    if (!fs.existsSync(realPath)) {
        return '';
    }
    return realPath;
}

module.exports = function (option) {
    console.log('[MOCK] searching path: ', path.join(__dirname, option.path));
    var realPath = mapPath(option);
    if (!realPath) {
        return {
            mock: false
        };
    }
    require.cache[require.resolve(realPath)] = null;
    var mockModule = require(realPath);
    if (!mockModule || typeof mockModule.mockData !== 'function') {
        return {
            mock: false
        };
    }
    return {
        mock: typeof mockModule.check === 'function' ? !!mockModule.check(option) : true,
        data: mockModule.mockData(option)
    };
};
