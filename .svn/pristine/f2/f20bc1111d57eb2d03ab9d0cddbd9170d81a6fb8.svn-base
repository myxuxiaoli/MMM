/**
 * Created by wangyue on 2017/9/28.
 */
var app = angular.module('category',[]);
app.controller('listCtrl',['$scope','$http',function ($scope,$http) {
    $http({
        url:'http://192.168.70.62:9090/api/getcategorytitle',
    }).then(function (res) {
        console.log(res);
        $scope.data = res.data.result;
    })
    $scope.categoryList = function () {
        var number = this.$index;
        $http({
            url:'http://192.168.70.62:9090/api/getcategory',
            params:{
                titleid: number
            }
        }).then(function (res) {
            console.log(res);
            //var str = 'dataList'+number;
            //$scope[str] = res.data.result;
            $scope.dataList = res.data.result;
            //document.querySelector('li.show:nth-of-type('+(number+1)+')').classList.add('height');
            angular.element(document.querySelectorAll('ul.main li.show')).eq(number).toggleClass('height');
        })
    }
}]);