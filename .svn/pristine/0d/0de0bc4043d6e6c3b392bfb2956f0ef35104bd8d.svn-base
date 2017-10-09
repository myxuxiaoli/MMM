
// 顶部通栏
//$("#topbar .left").on("click", function () {
//    location.href = "https://www.baidu.com"
//})
$.ajax({
    url: "http://192.168.70.62:9090/api/getgsproduct?shopid=" + 0 + "&areaid=" + 0,
    dataType: "json",
    data: {
        shopId: 0,
        areaId: 0
    },
    success: function (data) {
        var str1 = {
            items: data.result
        };
        var html1 = template("content_product", str1);
        $("#content ul").html(html1);
    }
})

//  下拉导航
$("#header .btn-group1").on("click", function () {
    $.ajax({
        url: "http://192.168.70.62:9090/api/getgsshop",
        success: function (data) {
            var str = {
                items: data.result
            };
            var html = template("nav_sort", str);
            $("#header .btn-group1 ul").html(html);

            $(".btn-group1").on('click', 'li', function () {
                var $shopId = $(this).attr('shopId');
                $.ajax({
                    url: "http://192.168.70.62:9090/api/getgsproduct?shopid=" + $shopId + "&areaid=" + 0,
                    dataType: "json",
                    data: {
                        shopId: $shopId,
                        areaId: 0
                    },
                    success: function (data) {
                        var str1 = {
                            items: data.result
                        };
                        var html1 = template("content_product", str1);
                        $("#content ul").html(html1);
                    }
                })
            })
        }
    })
});

$("#header .btn-group2").on("click", function () {
    $.ajax({
        url: "http://192.168.70.62:9090/api/getgsshoparea",
        success: function (data) {
            // alert(data);
            var str = {
                items: data.result
            };
            // console.log(data.result)
            var html = template("nav_area", str);
            $("#header .btn-group2 ul").html(html);


            $(".btn-group2").on('click', 'li', function () {
                var $shopId = $(".btn-group1 li").attr("shopId")
                var $areaId = $(this).attr('areaId');
                $.ajax({
                    url: "http://192.168.70.62:9090/api/getgsproduct?shopid=" + $shopId + "&areaid=" + $areaId,
                    dataType: "json",
                    data: {
                        shopId: $shopId,
                        areaId: $areaId
                    },
                    success: function (data) {
                        var str1 = {
                            items: data.result
                        };
                        var html1 = template("content_product", str1);
                        $("#content ul").html(html1);
                    }
                })
            })
        }
    })
});

$("#header .btn-group4 .btn-default").on("click", function () {
    $(".nav_search").toggle();
})




// var a = document.getElementById("sort_list");
// var shopId = a.getAttribute("shopId");
// var areaId = $("#area_list").data("areaId");
// console.log(shopId)












