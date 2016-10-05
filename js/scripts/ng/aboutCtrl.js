(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('aboutCtrl', aboutCtrl);

    aboutCtrl.$inject = ['$scope', '$http'];

    /* @ngInject */
    function aboutCtrl($scope, $http) {
        var vm = this;
        vm.title = 'aboutCtrl';

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
