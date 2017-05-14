(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('teamCtrl', teamCtrl);

    teamCtrl.$inject = ['$scope', '$http'];

    /* @ngInject */
    function teamCtrl($scope, $http) {
        var vm = this;
        vm.title = 'teamCtrl';

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
                url: 'js/data/team.json'
            }).then(function successCallback(response) {
                $scope.members = response.data.members;
            }, function errorCallback(response) {
                console.log(response);
            });

            $http({
                method: 'GET',
                url: 'js/data/committee.json'
            }).then(function successCallback(response) {
                $scope.committee = response.data.members;
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }
})();
