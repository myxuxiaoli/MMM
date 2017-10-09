/**
 * Created by ���� on 2017/9/26.
 */

(function(angular){
    var app=angular.module("saveMoney",['ngRoute',"ngSanitize","details"]);
    app.config(["$locationProvider", function ($locationProvider) {
        $locationProvider.hashPrefix("");
    }])

    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/:pageid?",{
            templateUrl:"./home/home.html",
            controller:"control"
        })
    }]);

    app.controller("control",["$scope","$http","$routeParams","$window", function ($scope,$http,$routeParams,$window) {
        $scope.id=1;
        $scope.pages= function () {
            $http({
                url:"http://192.168.70.32:9090/api/getmoneyctrl",
                params:{
                    pageid:$scope.id-1
                },
                method:"get"
            }).then(function (response) {
                $scope.goodsList=response.data.result;
                $scope.totalCount=response.data.totalCount;//数据的总条数
                $scope.pagesize=response.data.pagesize;//每一页的条数
                $scope.totalPage=$window.Math.ceil( $scope.totalCount/$scope.pagesize);//总页数
                for(var i=0;i<response.data.length;i++){
                    $scope.data[i].productImgSm=$($scope.data[i].productImgSm).attr(src);

                }
            });
        }
        $scope.pages();//默认显示第一页

       //上一页
        $scope.prevPage= function () {
            $scope.id--;
            $scope.pages();

        }
        //下一页
        $scope.nextPage= function () {
            $scope.id++;
            $scope.pages();

        }

    }])



})(angular);






