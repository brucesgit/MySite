/**
 * 部署规划数据
 */

exports.check = function () {
    return false;
};

exports.mockData = function () {

    return {
        "success": true,
        "data": [{
            "branch_id": "59bf2f2467090702a1081338",
            "branch_name": "分支控制器",
            "ap_auth": 10,
            "switch_auth": 100,
            "run_resource": "Host"
        }, {
            "branch_id": "59bfb31067090702a6657093",
            "branch_name": "一个分支控制器",
            "ap_auth": 10,
            "switch_auth": 100,
            "run_resource": "Host"
        }]
    };
};
