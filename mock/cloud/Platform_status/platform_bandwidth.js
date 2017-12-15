/**
 * 平台状态 - 平台出口带宽
 */

exports.check = function () {
    return false;
};

exports.mockData = function () {

    return {
        data: {
            yAxis: [{
                data: [10, 13, 15, 18, 16, 14, 13],
                unit: 'Mbps',
                name: '发送'
            }, {
                data: [20, 23, 25, 18, 26, 24, 23],
                unit: 'Mbps',
                name: '接收'
            }],
            xAxis: [
                '8-20', '8-21', '8-22', '8-23', '8-24', '8-25', '8-26'
            ],
            title: '平台带宽趋势'
        },
        code: 0
    }

};
