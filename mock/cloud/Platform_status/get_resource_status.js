/**
 * 资源状态表格和树
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
                "name": "172.16.12.11",
                "group": "基础资源",
                "ip": "172.16.12.11",
                "type": "基础资源",
                "cpu": "80%",
                "memory": "80%",
                "rom_residue": "100GB",
                "io":"3/8",
                "session":"100",
                "user_num":"4",
                "user_detail": [{
                    "user_name": "张三"
                }, {
                    "user_name": "李四"
                }, {
                    "user_name": "王二"
                }, {
                    "user_name": "何以琛"
                }],
                "bandwidth": {
                    "normal": '10',
                    "more": '20'
                },
                "version": '1.0'
            }, {
                "name": "172.16.12.12",
                "group": "UI资源",
                "ip": "172.16.12.12",
                "type": "基础资源",
                "cpu": "60%",
                "memory": "60%",
                "rom_residue": "80GB",
                "io":"3/8",
                "session":"100",
                "user_num":"2",
                "user_detail": [{
                    "user_name": "张三"
                }, {
                    "user_name": "李四"
                }],
                "bandwidth": {
                    "normal": '10',
                    "more": '20'
                },
                "version": '1.0'
            }, {
                "name": "172.16.12.11",
                "group": "数据库资源",
                "ip": "172.16.12.11",
                "type": "基础资源",
                "cpu": "90%",
                "memory": "90%",
                "rom_residue": "50GB",
                "io":"3/8",
                "session":"100",
                "user_num":"0",
                "user_detail":[],
                "bandwidth": {
                    "normal": '10',
                    "more": '20'
                },
                "version": '1.0'
            }, {
                "name": "172.16.12.11",
                "group": "默认组",
                "ip": "172.16.12.11",
                "type": "增值资源",
                "cpu": "20%",
                "memory": "30%",
                "rom_residue": "10GB",
                "io":"3/8",
                "session":"100",
                "user_num":"0",
                "user_detail":[],
                "bandwidth": {
                    "normal": '10',
                    "more": '20'
                },
                "version": '1.0'
            }],
            "branch_cnt": 3,
            "children": [{
                "group_name": "自带默认组",
                "branches": [],
                "level": 1,
                "group_id": "6000000000000000000000000000",
                "status": [],
                "branch_cnt": 0,
                "children": []
            }, {
                "group_name": "基础资源",
                "branches": [],
                "level": 1,
                "group_id": "5000000000000000000000000000",
                "status": [],
                "branch_cnt": 0,
                "children": []
            }, {
                "group_name": "增值资源",
                "branches": [],
                "level": 1,
                "group_id": "4000000000000000000000000000",
                "status": [],
                "branch_cnt": 0,
                "children": []
            }, {
                "group_name": "UI资源",
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
                    "group_name": "a2",
                    "branches": [],
                    "level": 2,
                    "group_id": "3001000000000000000000000000",
                    "status": [],
                    "branch_cnt": 0,
                    "children": [{
                        "group_name": "a3",
                        "branches": [],
                        "level": 3,
                        "group_id": "3001001000000000000000000000",
                        "status": [],
                        "branch_cnt": 0,
                        "children": [{
                            "group_name": "4",
                            "branches": [],
                            "level": 4,
                            "group_id": "3001001001000000000000000000",
                            "status": [],
                            "branch_cnt": 0,
                            "children": [{
                                "group_name": "5",
                                "branches": [],
                                "level": 5,
                                "group_id": "3001001001001000000000000000",
                                "status": [],
                                "branch_cnt": 0,
                                "children": [{
                                    "group_name": "6aaa",
                                    "branches": [],
                                    "level": 6,
                                    "group_id": "3001001001001001000000000000",
                                    "status": [],
                                    "branch_cnt": 0,
                                    "children": [{
                                        "group_name": "7",
                                        "branches": [],
                                        "level": 7,
                                        "group_id": "3001001001001001001000000000",
                                        "status": [],
                                        "branch_cnt": 0,
                                        "children": [{
                                            "group_name": "8",
                                            "branches": [],
                                            "level": 8,
                                            "group_id": "3001001001001001001001000000",
                                            "status": [],
                                            "branch_cnt": 0,
                                            "children": [{
                                                "group_name": "9a",
                                                "branches": [],
                                                "level": 9,
                                                "group_id": "3001001001001001001001001000",
                                                "status": [],
                                                "branch_cnt": 0,
                                                "children": [{
                                                    "group_name": "10bbb",
                                                    "branches": [],
                                                    "level": 10,
                                                    "group_id": "3001001001001001001001001001",
                                                    "status": [],
                                                    "branch_cnt": 0,
                                                    "children": []
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }, {
                "group_name": "数据库资源",
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
                    "group_name": "分组2",
                    "branches": [],
                    "level": 2,
                    "group_id": "2001000000000000000000000000",
                    "status": [],
                    "branch_cnt": 0,
                    "children": [{
                        "group_name": "分组3",
                        "branches": [],
                        "level": 3,
                        "group_id": "2001001000000000000000000000",
                        "status": [],
                        "branch_cnt": 0,
                        "children": [{
                            "group_name": "分组4",
                            "branches": [],
                            "level": 4,
                            "group_id": "2001001001000000000000000000",
                            "status": [],
                            "branch_cnt": 0,
                            "children": [{
                                "group_name": "分组51",
                                "branches": [],
                                "level": 5,
                                "group_id": "2001001001001000000000000000",
                                "status": [],
                                "branch_cnt": 0,
                                "children": [{
                                    "group_name": "分组6a",
                                    "branches": [],
                                    "level": 6,
                                    "group_id": "2001001001001001000000000000",
                                    "status": [],
                                    "branch_cnt": 0,
                                    "children": [{
                                        "group_name": "分组7b",
                                        "branches": [],
                                        "level": 7,
                                        "group_id": "2001001001001001001000000000",
                                        "status": [],
                                        "branch_cnt": 0,
                                        "children": [{
                                            "group_name": "分组8",
                                            "branches": [],
                                            "level": 8,
                                            "group_id": "2001001001001001001001000000",
                                            "status": [],
                                            "branch_cnt": 0,
                                            "children": [{
                                                "group_name": "分组9",
                                                "branches": [],
                                                "level": 9,
                                                "group_id": "2001001001001001001001001000",
                                                "status": [],
                                                "branch_cnt": 0,
                                                "children": []
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }, {
                "group_name": "数据库资源",
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
                    "group_name": "DC1",
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
