(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('workshop1Ctrl', workshop1Ctrl);
    var myApp = angular.module('myApp');
    workshop1Ctrl.$inject = ['$scope', '$http', '$rootScope'];

    /* @ngInject */
    function workshop1Ctrl($scope, $http, $rootScope) {
        var vm = this;
        vm.title = 'workshop1Ctrl';

        activate();
        function activate() {

            $http({
                method: 'GET',
                url: 'js/data/workshops.json'
            }).then(function successCallback(response) {
                $scope.workshopDetails = response.data;
                console.log(response.data.Workshops);
            }, function errorCallback(response) {
                console.log(response);
            });

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
        }
    }
})();
