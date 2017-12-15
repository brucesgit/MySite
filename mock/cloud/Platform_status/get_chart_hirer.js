/**
 * 用户个数
 */

exports.check = function () {
    return true;
};

exports.mockData = function () {

    return {
        "data": [{
            data: 20,
            name: '5000~10000',
            color: '#F9B700'
        }, {
            data: 25,
            name: '2000~5000',
            color: '#00CC33'
        }, {
            data: 30,
            name: '<2000',
            color: '#1BD0DC'
        }],
        "success": true
    }

};
