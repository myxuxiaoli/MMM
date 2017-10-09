/**
 * Created by ???? on 2017/9/26.
 */

(function (angular) {
    var app = angular.module("details", ['ngRoute', "ngSanitize"]);
    app.config(["$locationProvider", function ($locationProvider) {
        $locationProvider.hashPrefix("");
    }])

    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/details/:productid", {
            templateUrl: "./details/detailsTpl.html",
            controller: "controls"
        })
    }]);

    app.controller("controls", ["$scope", "$http", "$routeParams", "$window", function ($scope, $http, $routeParams, $window) {
        console.log($routeParams.productid);
        $http({
            url: "http://192.168.70.32:9090/api/getmoneyctrlproduct",
            params: {
                productid: $routeParams.productid
            },
            method: "get"
        }).then(function (res) {
            $scope.info = res.data.result[0];

            $scope.info.productImgSm = $($scope.info.productImgSm)[0];
            $(".pic").html($($scope.info.productImgSm)[0]);
            $scope.info.productImg2 = $($scope.info.productImg2)[0];
            $(".bigimg").html($($scope.info.productImg2)[0]);
        });
    }])

})(angular);