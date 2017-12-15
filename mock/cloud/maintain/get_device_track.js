/**
 * 设备跟踪页面数据
 */

exports.check = function () {
    return true;
};

exports.mockData = function () {

    return {
        "data": {
            "group_name": "全部",
            "group_id": "0",
            "manage_log": [{
                "time": "2017-8-8 08:08:01",
                "operation": "新增",
                "result": "成功",
                "admin": "admin1",
                "ip": "172.16.11.112"
            }],
        }, "success": true
    }

};
