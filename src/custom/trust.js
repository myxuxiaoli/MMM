(function (angular) {
    var myApp = angular.module('myApp', ['ngSanitize'])
    myApp.filter('main', function ($sce) {
        return function (input) {
            return $sce.trustAsHtml(input);
        }
    });
})(angular)