/**
 * 资源管理树
 */

exports.check = function () {
    return false;
};

exports.mockData = function () {

    return {
        "success": true,
        "data": {
            "group_name": "全部",
            "group_id": "59b33820823d55c98435250b",
            "children": [{
                "group_name": "资源1",
                "group_id": "59b3384d670907028b7c8877",
                "children": []
            }, {
                "group_name": "资源2",
                "group_id": "59b33854670907028c6c93d8",
                "children": []
            }, {
                "group_name": "资源3",
                "group_id": "59b3385b67090702884a1c57",
                "children": []
            }]
        }
    };
};
