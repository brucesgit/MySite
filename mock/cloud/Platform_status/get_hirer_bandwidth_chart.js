/**
 * 用户状态-总带宽柱状图
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
                1,
                1
            ],
            "name": [
                "0~1",
                "2~5",
                "6~10",
                "11~50",
                ">50"
            ]
        }, "success": true
    }

};
