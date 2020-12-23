(function () {
    'use strict'
    angular
        .module('app')
        .controller('app', app);
    
        function app () {
            var vm = this;

            vm.activate = activate;

            activate(); 

            function activate () {
                console.log('app js ---------???');
            }
        }
})(); 