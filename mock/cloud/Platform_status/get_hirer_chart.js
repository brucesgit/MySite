/**
 * 用户状态柱状图
 */

exports.check = function () {
    return true;
};

exports.mockData = function () {

    return {
        "data": {
            "data": [
                4,
                3,
                2,
                1
            ],
            "name": [
                "1~5",
                "6~10",
                "11~50",
                ">50"
            ]
        }, "success": true
    }

};
