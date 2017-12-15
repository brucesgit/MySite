/**
 * 用户状态-地区
 */

exports.check = function () {
    return true;
};

exports.mockData = function () {

    return {
        "data": {
            "group_name": "全部",
            "group_id": "0",
            "status": [{
                "user_name":"张三",
                "group":"美国",
                "controller_state":"3/8",
                "ap_status":"81/85",
                "swicth_status":"83/85",
                "normal":"172.16.11.01",
                "more":"172.16.11.01",
                "detail":"查看",
                "cpu": '60%',
                "memory": '60%',
                "disk": '60%',
                "io": '读50M/S，写50M/S',
                "bandwidth": '30Mbps',
                "version": '1.0'
            }, {
                "user_name":"李四",
                "group":"英国",
                "controller_state":"4/8",
                "ap_status":"82/85",
                "swicth_status":"83/86",
                "normal":"172.16.11.02",
                "more":"172.16.11.02",
                "detail":"查看",
                "cpu": '70%',
                "memory": '70%',
                "disk": '70%',
                "io": '读50M/S，写50M/S',
                "bandwidth": '30Mbps',
                "version": '1.0'
            }, {
                "user_name":"王二",
                "group":"中国",
                "controller_state":"5/8",
                "ap_status":"83/85",
                "swicth_status":"83/87",
                "normal":"172.16.11.03",
                "more":"172.16.11.03",
                "detail":"查看",
                "cpu": '80%',
                "memory": '80%',
                "disk": '80%',
                "io": '读50M/S，写50M/S',
                "bandwidth": '30Mbps',
                "version": '1.0'
            }, {
                "user_name":"何以琛",
                "group":"中国",
                "controller_state":"6/8",
                "ap_status":"84/85",
                "swicth_status":"83/88",
                "normal":"172.16.11.04",
                "more":"172.16.11.04",
                "detail":"查看",
                "cpu": '90%',
                "memory": '90%',
                "disk": '90%',
                "io": '读50M/S，写50M/S',
                "bandwidth": '30Mbps',
                "version": '1.0'
            }],
            "branch_cnt": 3,
            "children": [{
                "group_name": "美国",
                "branches": [],
                "level": 1,
                "group_id": "6000000000000000000000000000",
                "status": [],
                "branch_cnt": 0,
                "children": []
            }, {
                "group_name": "英国",
                "branches": [],
                "level": 1,
                "group_id": "5000000000000000000000000000",
                "status": [],
                "branch_cnt": 0,
                "children": []
            }, {
                "group_name": "印度",
                "branches": [],
                "level": 1,
                "group_id": "4000000000000000000000000000",
                "status": [],
                "branch_cnt": 0,
                "children": []
            }, {
                "group_name": "中国",
                "branches": [],
                "level": 1,
                "group_id": "3000000000000000000000000000",
                "status": [{
                    "comment": "a",
                    "st_id": 5,
                    "version": "12.0.0.0",
                    "device_type": 2,
                    "user_name": "admin",
                    "template_name": "a1策略",
                    "opr_time": 1500344773,
                    "group_id": "3000000000000000000000000000"
                }],
                "branch_cnt": 0,
                "children": [{
                    "group_name": "广东",
                    "branches": [],
                    "level": 2,
                    "group_id": "3001000000000000000000000000",
                    "status": [],
                    "branch_cnt": 0,
                    "children": [{
                        "group_name": "深圳",
                        "branches": [],
                        "level": 3,
                        "group_id": "3001001000000000000000000000",
                        "status": [],
                        "branch_cnt": 0,
                        "children": [{
                            "group_name": "龙岗区",
                            "branches": [],
                            "level": 4,
                            "group_id": "3001001001000000000000000000",
                            "status": [],
                            "branch_cnt": 0,
                            "children": []
                        }]
                    }]
                }]
            }, {
                "group_name": "中国",
                "branches": [{
                    "comment": "",
                    "status": "un_connect",
                    "region_id": 1120300,
                    "branch_name": "abc",
                    "pwd": "1",
                    "branch_id": 13,
                    "contacts": "s",
                    "group_id": "2000000000000000000000000000",
                    "devices": [{
                        "physical_state": 1,
                        "bandwidth_usage": 0.0,
                        "disk": 0.0,
                        "children": [],
                        "gateway_id": "",
                        "vm_dev": [],
                        "conf_version": "12.0.0.0",
                        "send": 0,
                        "parent_id": -1,
                        "version": "",
                        "online": 0,
                        "status": "un_connect",
                        "mem": 0.0,
                        "is_gateway": 1,
                        "vnet_dev": [],
                        "inner_library": [],
                        "alert": 0,
                        "recv": 0,
                        "device_id": 16,
                        "product_id": 1,
                        "device_name": "aBOS",
                        "vnet": "",
                        "vm_num": 0,
                        "cpu": 0.0
                    }],
                    "product_ids": [1],
                    "email": "2@qq.com"
                }],
                "level": 1,
                "group_id": "2000000000000000000000000000",
                "status": [],
                "branch_cnt": 1,
                "children": [{
                    "group_name": "江苏",
                    "branches": [],
                    "level": 2,
                    "group_id": "2001000000000000000000000000",
                    "status": [],
                    "branch_cnt": 0,
                    "children": [{
                        "group_name": "南京",
                        "branches": [],
                        "level": 3,
                        "group_id": "2001001000000000000000000000",
                        "status": [],
                        "branch_cnt": 0,
                        "children": [{
                            "group_name": "玄武区",
                            "branches": [],
                            "level": 4,
                            "group_id": "2001001001000000000000000000",
                            "status": [],
                            "branch_cnt": 0,
                            "children": []
                        }]
                    }]
                }]
            }, {
                "group_name": "中国",
                "branches": [{
                    "comment": "abc",
                    "status": "alert",
                    "region_id": 1130101,
                    "branch_name": "分支2",
                    "pwd": "123456",
                    "branch_id": 12,
                    "contacts": "1",
                    "group_id": "1000000000000000000000000000",
                    "devices": [{
                        "physical_state": 1,
                        "bandwidth_usage": 0.0,
                        "disk": 0.09,
                        "children": [],
                        "gateway_id": "B55F43CE",
                        "vm_dev": [],
                        "conf_version": "13.0.0.0",
                        "send": 71242,
                        "parent_id": -1,
                        "version": "AC12.0 B",
                        "online": 1,
                        "status": "alert",
                        "mem": 0.3,
                        "is_gateway": 1,
                        "vnet_dev": [],
                        "inner_library": [{
                            "version": "20170316",
                            "type": "virus",
                            "sn_expired": "0"
                        }, {
                            "version": "20170626/09:00:00",
                            "type": "url",
                            "sn_expired": "0"
                        }, {"version": "20170711/12:34:56", "type": "contchkr", "sn_expired": "0"}, {
                            "version": "20170714",
                            "type": "newtrace",
                            "sn_expired": "0"
                        }],
                        "alert": 0,
                        "recv": 3614,
                        "device_id": 15,
                        "product_id": 2,
                        "device_name": "AC",
                        "vnet": "",
                        "vm_num": 0,
                        "cpu": 0.2
                    }],
                    "product_ids": [2],
                    "email": "1@qq.com"
                }],
                "level": 1,
                "group_id": "1000000000000000000000000000",
                "status": [{
                    "comment": "",
                    "st_id": 6,
                    "version": "12.0.0.0",
                    "device_type": 2,
                    "user_name": "zone1",
                    "template_name": "sf",
                    "opr_time": 1500345478,
                    "group_id": "1000000000000000000000000000"
                }],
                "branch_cnt": 1,
                "children": [{
                    "group_name": "上海",
                    "branches": [],
                    "level": 2,
                    "group_id": "1001000000000000000000000000",
                    "status": [],
                    "branch_cnt": 0,
                    "children": []
                }]
            }]
        }, "success": true
    }

};
