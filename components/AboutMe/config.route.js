(function () {
    'use strict'
    
    angular
        .module('app.aboutMe')
        .run(routeConfig);

    function routeConfig(routeHelper) {
        routeHelper.configureRoutes(getRoutes());
    }

    function getRoutes () {
        return [
            {
                state: 'aboutMe',
                config: {
                    url: '/aboutMe',
                    title: 'aboutMe',
                    templateUrl: '/components/AboutMe/aboutMe.html',
                    controller: 'aboutMe',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();