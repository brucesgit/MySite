/**
 * session数
 */

exports.check = function () {
    return true;
};

exports.mockData = function () {

    return {
        "data": [{
            data: 10,
            name: '>10000',
            color: '#FF4D00'
        }, {
            data: 20,
            name: '5000~10000',
            color: '#F9B700'
        }, {
            data: 10,
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
