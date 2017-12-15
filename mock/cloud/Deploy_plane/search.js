/**
 * 部署规划数据
 */

exports.check = function () {
    return false;
};

exports.mockData = function () {

    return {
        "success": true,
        "data": {
            "yun_server": {
                "eth": "eth0",
                "ip": "100.100.3.252",
                "mask": "255.255.255.0",
                "gateway": "100.100.131.252"
            },
            "focus_transmit": {
                "eth": "eth1",
                "ip": "100.100.3.254",
                "mask": "255.255.0.0",
                "gateway": "100.100.131.252"
            },
            "yun_inside_net": {
                "eth": "eth2",
                "ip": "100.100.3.251",
                "mask": "255.255.0.0",
                "gateway": "100.100.131.252"
            },
            "HCI_group": {"eth": "hci", "status": "已连接", "ip": "100.100.3.252"}
        }
    };
};
