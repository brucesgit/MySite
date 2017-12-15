/**
 * 用户管理列表数据
 */

exports.check = function () {
    return false;
};

exports.mockData = function () {

    return {
        "success": true,
        "data": [{
            "user_id": "59ba31a4670907029a2ecbaf",
            "user_name": "一个用户",
            "version": "3.5.3",
            "controller_auth": "77\/1",
            "ap_auth": "56\/100",
            "switch_auth": "21\/20",
            "resource": "bbn",
            "status": "2017-09-14",
            "controller_status": "17\/60",
            "ap_status": "48\/8",
            "switch_status": "1\/20",
            "public_ip": "192.168.0.1",
            "inside_ip": "2.2.2.2"
        }, {
            "user_id": "59ba31c3670907029731f9a0",
            "user_name": "第二个",
            "version": "3.5.3",
            "controller_auth": "23\/1",
            "ap_auth": "51\/20",
            "switch_auth": "95\/5",
            "resource": "test",
            "status": "2017-09-14",
            "controller_status": "22\/1",
            "ap_status": "38\/13",
            "switch_status": "48\/47",
            "public_ip": "192.168.0.1",
            "inside_ip": "2.2.2.2"
        }]
    };
};
