(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('gamingCtrl', gamingCtrl);

    gamingCtrl.$inject = ['$scope', '$http', '$sce'];

    /* @ngInject */
    function gamingCtrl($scope, $http, $sce) {
        var vm = this;
        vm.title = 'gamingCtrl';

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
            $http({
                method: 'GET',
                url: 'js/data/gaming.json'
            }).then(function successCallback(response) {
                
                $scope.games = response.data.gaming;
                
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }
})();
