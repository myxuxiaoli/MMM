/**
 * Created by wangyue on 2017/9/26.
 */
//$.ajax({
//    url:'http://192.168.70.62:9090/api/getcoupon',
//    success: function (res) {
//        console.log(res);
//        var str = '';
//        for (var i = 0; i < res.result.length; i++) {
//            str += '            <div class="col-xs-4 list">'+
//                '<img src="'+res.result[i].couponImg+'" alt=""/>'+
//                '<p>'+res.result[i].couponTitle+'</p>'+
//                '</div>'
//        }
//        $('.content .container').html(str);
//    }
//});

;(function (angular) {
    var app = angular.module('coupon',['ngRoute']);
    app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }])
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/',{
            templateUrl:'./template/list.html',
            controller:'couponContent'
        }).when('/:id/:name',{
            templateUrl:'./template/details.html',
            controller:'details'

        })
    }])
    app.controller('couponContent',['$scope','$http', function ($scope,$http) {
        $http({
            url:'http://192.168.70.62:9090/api/getcoupon',
        }).then(function (res) {
            $scope.data = res.data.result;
            //console.log($scope.data);
            $scope.isShow = false;
        });
    }])
    app.controller('details',['$scope','$http','$routeParams', function ($scope,$http,$routeParams) {
        $scope.name = $routeParams.name;
        $http({
            url:'http://192.168.70.62:9090/api/getcouponproduct',
            params:{
                couponid:$routeParams.id
            }
        }).then(function (res) {
            console.log(res);
            $scope.data = res.data.result;
            for (var i = 0; i <$scope.data.length; i++) {
                $scope.data[i].couponProductImg = $($scope.data[i].couponProductImg).attr('src');
            }

            console.log($scope.data);
        });
        $scope.zzlbt = function () {
            $scope.index = this.$index;
            console.log($scope.index);
            $('#lbt img').attr('src',$scope.data[$scope.index].couponProductImg);
            //for (var i = 0; i < $scope.data.length; i++) {
            //    if($scope.data[i].couponProductId == index){
            //        $('#lbt img').attr('src',$scope.data[i].couponProductImg);
            //    }
            //}
            $('#lbt').modal();
        }
        $scope.getPage = function (index) {
            if(index<0||index>$scope.data.length-1){return}
            $scope.index = index;
            console.log($scope.index);
            $('#lbt img').attr('src',$scope.data[index].couponProductImg);
            //for (var i = 0; i < $scope.data.length; i++) {
            //    if($scope.data[i].couponProductId == index){
            //        $('#lbt img').attr('src',$scope.data[i].couponProductImg);
            //    }
            //}
        }
    }])
})(angular)