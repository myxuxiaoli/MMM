;
(function (angular) {
    var app = angular.module("getbrandtitle", [
        "getbrandtitle_home", "ngSanitize"
    ])

    app.filter('trustHtml', function ($sce) {
        return function (input) {
            return $sce.trustAsHtml(input);
        }
    });
})(angular);