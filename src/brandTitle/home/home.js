(function (angular) {
    var app = angular.module("getbrandtitle_home", ["ngRoute"]);
    // 去掉感叹号
    app.config(["$locationProvider", function ($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);

    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "./home/home.html",
            controller: "homeController"
        }).when("/:brandtitleid/:productid?", {
            templateUrl: "./getbrand/getbrand.html",
            controller: "getbrandController"
        })
    }]);

    app.controller("homeController", ["$scope", "$http",
        function ($scope, $http) {
            $http({
                url: "http://192.168.70.26:9090/api/getbrandtitle"
            }).then(function (data) {
                $scope.data = data.data;
            }, function () {
                console.log("error!");
            });
        }
    ]);

    // 十大品牌
    app.controller("getbrandController", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
        $http({
            url: "http://192.168.70.26:9090/api/getbrand",
            params: {
                brandtitleid: $routeParams.brandtitleid
            }
        }).then(function (response) {
            $scope.data = response.data;
        })
    }]);

    // 销量排行
    app.controller("productlistController", ["$scope", "$http", "$routeParams", "$rootScope", "$route", function ($scope, $http, $routeParams, $rootScope, $route) {
        $http({
            url: "http://192.168.70.26:9090/api/getbrandproductlist",
            params: {
                brandtitleid: $routeParams.brandtitleid,
                pagesize: 4
            }
        }).then(function (response) {
            $scope.data = response.data;
        })
    }]);

    // // 商品评论
    app.controller("comIdController", ["$scope", "$http", "$routeParams", "$rootScope", function ($scope, $http, $routeParams, $rootScope) {

        console.log($routeParams.productid)
        $http({
            url: "http://192.168.70.26:9090/api/getproductcom",
            params: {
                productid: 0,
            }
        }).then(function (response) {
            $scope.cont = response.data;
            console.log($scope.cont);
        })
    }]);
})(angular);