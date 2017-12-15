/**
 * 用户状态柱状图
 */

exports.check = function () {
    return true;
};

exports.mockData = function () {

    return {
        "data": [{
            data: 10,
            name: '<30天',
            color: '#FF4D00'
        }, {
            data: 20,
            name: '<90天',
            color: '#F9B700'
        }, {
            data: 15,
            name: '已过期',
            color: '#00CC33'
        }],
        "success": true
    }

};
