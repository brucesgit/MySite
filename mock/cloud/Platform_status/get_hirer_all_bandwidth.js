/**
 * 用户状态-总带宽趋势
 */

exports.check = function () {
    return true;
};

exports.mockData = function () {

    return {
        "data": {
            "data": [10, 13, 15, 18, 16, 14, 13],
            name: [
                '8-20', '8-21', '8-22', '8-23', '8-24', '8-25', '8-26'
            ],
            bandwidth: [
                {normal: 10, more: 20},
                {normal: 10, more: 20},
                {normal: 10, more: 20},
                {normal: 10, more: 20},
                {normal: 10, more: 20},
                {normal: 10, more: 20},
                {normal: 10, more: 20}
            ],
            title: '总带宽趋势'
        },
        "success": true
    }

};
