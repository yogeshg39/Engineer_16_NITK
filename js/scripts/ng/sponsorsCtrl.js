(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('sponsorsCtrl', sponsorsCtrl);

    sponsorsCtrl.$inject = ['$scope', '$http'];

    /* @ngInject */
    function sponsorsCtrl($scope, $http) {
        var vm = this;
        vm.title = 'sponsorsCtrl';

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
            $("#myModal").on("shown.bs.modal", function() {
                $('#myModal').focus();
            });
            $("#myModal").on("hidden.bs.modal", function() {
                $('#currCmd').focus();
            });
            $http({
                method: 'GET',
                url: 'js/data/sponsors.json'
            }).then(function successCallback(response) {
                $scope.sponsors = response.data.sponsors;
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }
})();
