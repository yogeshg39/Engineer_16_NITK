(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('specialsCtrl', specialsCtrl);

    specialsCtrl.$inject = ['$scope', '$http', '$sce'];

    /* @ngInject */
    function specialsCtrl($scope, $http, $sce) {
        var vm = this;
        vm.title = 'specialsCtrl';

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
                url: 'js/data/specials.json'
            }).then(function successCallback(response) {
                for(var i=0;i<response.data.specials.length;i++) {
                    console.log(response.data.specials[i].content);
                    response.data.specials[i].content=$sce.trustAsHtml(response.data.specials[i].content);

                }
                $scope.specials = response.data.specials;
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }
})();
