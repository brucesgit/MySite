/**
 * cpu占用率
 */

exports.check = function () {
    return true;
};

exports.mockData = function () {

    return {
        "data": [{
            data: 10,
            name: '>80%',
            color: '#FF4D00'
        }, {
            data: 20,
            name: '50~80%',
            color: '#F9B700'
        }, {
            data: 10,
            name: '20~50%',
            color: '#00CC33'
        }, {
            data: 30,
            name: '<20%',
            color: '#1BD0DC'
        }],
        "success": true
    }

};
