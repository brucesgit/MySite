/**
 * 管理日志表格数据
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
                "time": "2017-08-08 08:08:01",
                "log": "登录系统",
                "operation_object": "资源管理",
                "result": "成功",
                "admin": "admin1",
                "ip": "172.16.11.112"
            }, {
                "time": "2017-08-09 08:08:02",
                "log": "退出系统",
                "operation_object": "资源管理",
                "result": "失败",
                "admin": "admin2",
                "ip": "172.16.11.113"
            }, {
                "time": "2017-08-10 08:08:03",
                "log": "登录系统",
                "operation_object": "资源管理",
                "result": "成功",
                "admin": "admin3",
                "ip": "172.16.11.114"
            }, {
                "time": "2017-08-11 08:08:04",
                "log": "登录系统",
                "operation_object": "用户管理",
                "result": "成功",
                "admin": "admin4",
                "ip": "172.16.11.115"
            }, {
                "time": "2017-08-10 08:08:05",
                "log": "退出系统",
                "operation_object": "用户管理",
                "result": "成功",
                "admin": "admin5",
                "ip": "172.16.11.116"
            }, {
                "time": "2017-08-11 08:08:06",
                "log": "退出系统",
                "operation_object": "用户管理",
                "result": "成功",
                "admin": "admin6",
                "ip": "172.16.11.117"
            }],
        }, "success": true
    }

};
