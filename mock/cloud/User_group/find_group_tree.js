/**
 * 用户管理树
 */

exports.check = function () {
    return false;
};

exports.mockData = function () {

    return {
        "success": true,
        "data": {
            "group_name": "全部",
            "group_id": "59b2a1e3a9d3f6c5896bf97f",
            "children": [{
                "group_name": "黄金",
                "group_id": "59b337b9670907028d0fc373",
                "children": [
                    {
                        "group_name": "黄金子分组",
                        "group_id": "59ba321c6709070295307cef",
                        "children": []
                    }]
            }, {
                "group_name": "自定义",
                "group_id": "59ba320c67090702915b56cd",
                "children": []
            }]
        }
    };
};
