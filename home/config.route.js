(function () {
    'use strict'
    
    angular
        .module('app.home')
        .run(routeConfig);

    function routeConfig(routeHelper) {
        routeHelper.configureRoutes(getRoutes());
    }

    function getRoutes () {
        return [
            {
                state: 'home',
                config: {
                    url: '/home',
                    title: 'home',
                    templateUrl: '/home/home.html',
                    controller: 'home',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();