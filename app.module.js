(function () {
    'use strict'

    angular
        .module('app' [
            'app',
            'app.home'
        ]).run(function ($state, logger) {
            logger.debug('Defined states: ', $state.get().length);
            var obj = {isActivate: true};
            $state.go('home', obj, {reload: true});
        });
})();