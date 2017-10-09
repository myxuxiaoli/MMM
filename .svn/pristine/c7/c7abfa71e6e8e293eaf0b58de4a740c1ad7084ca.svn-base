(function (angular) {

    var app = angular.module("heima", []);
    var id = 1;


    app.factory("hmjsonp", ["$window", function ($window) {
        return function (opts) {
            //拼接url
            var url = opts.url + "?";
            for (var key in opts.params) {
                url += (key + "=" + opts.params[key] + "&");
            }
            //保存回调.
            var callbackName = "hmjsonp_" + (id++);
            window[callbackName] = opts.callback;
            url += "callback=" + callbackName;

            //创建script标签.
            var script = $window.document.createElement("script");
            script.src = url;
            $window.document.body.appendChild(script);

            //$window服务和全局的window对象完全等价.
            //ng将其封装了一次.
        }
    }]);
})(angular);