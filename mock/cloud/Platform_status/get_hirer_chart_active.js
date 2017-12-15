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
            name: '12个月无设备在线',
            color: '#FF4D00'
        }, {
            data: 20,
            name: '6个月无设备在线',
            color: '#F9B700'
        }, {
            data: 30,
            name: '3个月无设备在线',
            color: '#00CC33'
        }, {
            data: 40,
            name: '1个月无设备在线',
            color: '#1BD0DC'
        }],
        "success": true
    }

};
