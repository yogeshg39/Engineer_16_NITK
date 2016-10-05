(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('workshopsCtrl', workshopsCtrl);

    workshopsCtrl.$inject = ['$scope', '$http'];

    /* @ngInject */
    function workshopsCtrl($scope, $http) {
        var vm = this;
        vm.title = 'workshopsCtrl';

        activate();

        ////////////////

        function activate() {


            $(".sidebar-toggle").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
            $("#overlay").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
        }
    }
})();
