(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('webteamCtrl', webteamCtrl);

    webteamCtrl.$inject = ['$scope', '$http'];

    /* @ngInject */
    function webteamCtrl($scope, $http) {
        var vm = this;
        vm.title = 'webteamCtrl';

        activate();

        ////////////////

        function activate() {


            $(".sidebar-toggle").click(function (e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
            $("#overlay").click(function (e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
            $("#myModal").on("shown.bs.modal", function () {
                $('#myModal').focus();
            });
            $("#myModal").on("hidden.bs.modal", function () {
                $('#currCmd').focus();
            });
            $http({
                method: 'GET',
                url: 'js/data/webteam.json'
            }).then(function successCallback(response) {
                $scope.members = response.data.members;
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }
})();
