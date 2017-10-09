(function (angular) {
    var app = angular.module("mmm", ["myApp", 'ngSanitize']);

    app.controller("main", ["$scope", "$http", function ($scope, $http) {

        // 菜单栏
        $http({
            url: "http://192.168.70.62:9090/api/getindexmenu",
            method: "get",
        }).then(function (response) {
            $scope.lists = response.data.result;
            $scope.lists1 = $scope.lists.slice(0, 8);
            for (var i = 0; i < $scope.lists1.length; i++) {
                var x = $scope.lists1[i].titlehref.indexOf('.');
                if($scope.lists1[i].titlehref == '#'){continue;}
                $scope.lists1[i].titlehref = $scope.lists1[i].titlehref.slice(0,x)+'/'+$scope.lists1[i].titlehref;
                //console.log($scope.lists1[i].titlehref);
            }
             console.log($scope.lists1);
            $scope.lists2 = $scope.lists.slice(8);
            for (var i = 0; i < $scope.lists2.length; i++) {
                var x = $scope.lists2[i].titlehref.indexOf('.');
                if($scope.lists2[i].titlehref == '#'){continue;}
                $scope.lists2[i].titlehref = $scope.lists2[i].titlehref.slice(0,x)+'/'+$scope.lists2[i].titlehref;
                console.log($scope.lists2[i].titlehref);
            }
            // console.log($scope.lists2);
            var flag = true;
            $scope.more = function (name) {
                if (name == "更多") {
                    // console.log("haha");
                    var menu2 = document.getElementById("menu2");
                    if (flag) {
                        menu2.style.display = "block";
                        flag = false;
                    } else {
                        menu2.style.display = "none";
                        flag = true;
                    }
                }
            }
        }, function () {
            console.log("error!");
        })

        // 超值折扣推荐
        $http({
            url: "http://192.168.70.62:9090/api/getmoneyctrl",
            method: "get"
        }).then(function (res) {
            $scope.disLists = res.data.result;
            console.log($scope.disLists);
        }, function () {
            console.log("error!");
        })
    }])
})(angular)