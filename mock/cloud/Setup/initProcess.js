/**
 * 管理日志
 */

exports.check = function () {
    return false;
};

exports.mockData = function () {

    return {
        "code": 1014,
        "logs": ['开始初始化', '初始化数据库', '初始化磁盘'],
        "msg": "系统已初始化"
    }

};
