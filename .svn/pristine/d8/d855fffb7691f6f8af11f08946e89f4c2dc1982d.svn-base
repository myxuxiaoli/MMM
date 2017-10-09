// (function (angular) {
//     var app = angular.module("getbrandtitle_getbrand", ["ngRoute"]);

//     app.config(["$locationProvider", function ($locationProvider) {
//         $locationProvider.hashPrefix("");
//     }]);

//     app.config(["$routeProvider", function ($routeProvider) {
//         $routeProvider.when("/", {
//             templateUrl: "../getbrandtitle/brandTitle.html"
//         }).when("/:brandtitleid", {
//             templateUrl: "./getbrand/getbrand.html",
//             controller: "getbrandController"
//         })
//     }]);

//     app.controller("getbrandController", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
//         $http({
//             url: "http://192.168.70.248:9090/api/getbrand",
//             params: {
//                 brandtitleid: routeParams.brandtitleid
//             }
//         }).then(function (response) {
//             $scope.data = response.data.result;
//             console.log($scope.data);
//         })
//     }])
// })(angular);