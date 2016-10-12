(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('eventsCtrl', eventsCtrl);
    var myApp = angular.module('myApp');
    eventsCtrl.$inject = ['$scope', '$http', '$rootScope'];

    /* @ngInject */
    function eventsCtrl($scope, $http, $rootScope) {
        var vm = this;
        vm.title = 'eventsCtrl';

        activate();

        ////////////////

        function activate() {



            $http({
                method: 'GET',
                url: 'js/data/events.json'
            }).then(function successCallback(response) {
                $scope.events = response.data;
                $scope.eventTitles = ['CHEMICAL EVENTS', 'COMPUTER EVENTS', 'BUSINESS EVENTS', 'SOCIALLY CONSCIOUS ENGINNERING', 'ASTRO EVENTS', 'MECHANICAL EVENTS', 'CIVIL EVENTS', 'MATERIALS EVENTS', 'TRONIX EVENTS'];
                $('.nav-tabs').scrollingTabs();
            }, function errorCallback(response) {
                console.log(response);
            });

            $('.carousel').carousel({
                interval: false
            });
            //             $( document ).ready(function() {
            //     var widths = $(".carousel-indicators.tabs>li").map(function() {
            //         return $(this).width();
            //     }).get(),

            //     maxWidth = Math.max.apply(null, widths);

            //     $(".carousel-indicators.tabs>li").attr('style EVENTS', 'width:'+ (maxWidth+15) +'px !important');

            // });
            $('.carousel-indicators-tabs>li').on('click', function() {
                $('.carousel-indicators-tabs>li').removeClass('active');
                $(this).addClass('active');
            });

            $('.animatedSVG').css({ opacity: 0 });
            $('.chemical').velocity('transition.slideDownIn', {
                delay: 1000
            });
            $('.bulbLight').velocity('transition.expandIn', {
                delay: 1200
            });
            $('.bubbles').velocity('transition.slideDownIn', {
                delay: 1100
            });
            $('.vessel').velocity('transition.slideUpIn', {
                delay: 100
            });
            $('.equipment').velocity('transition.slideUpIn', {
                delay: 200
            });
            $('.bulb').velocity('transition.slideDownIn', {
                delay: 500
            });
            $('.wiring').velocity('transition.slideLeftIn', {
                delay: 500
            });
            $('.wiringRight').velocity('transition.slideRightIn', {
                delay: 500
            });
            $('.timer').velocity({ opacity: 1 }, {
                delay: 700
            });
            $('#myCarousel').bind('slide.bs.carousel', function(e) {
                $('.animatedSVG').css({ opacity: 0 });
            });
            $('#myCarousel').bind('slid.bs.carousel', function(e) {

                if ($('.carousel-inner>div.active').eq(0).hasClass('chemSVG')) {

                    $('.chemical').velocity('transition.slideDownIn', {
                        delay: 1000
                    });
                    $('.bulbLight').velocity('transition.expandIn', {
                        delay: 1200
                    });
                    $('.bubbles').velocity('transition.slideDownIn', {
                        delay: 1100
                    });
                    $('.vessel').velocity('transition.slideUpIn', {
                        delay: 100
                    });
                    $('.equipment').velocity('transition.slideUpIn', {
                        delay: 200
                    });
                    $('.bulb').velocity('transition.slideDownIn', {
                        delay: 500
                    });
                    $('.wiring').velocity('transition.slideLeftIn', {
                        delay: 500
                    });
                    $('.wiringRight').velocity('transition.slideRightIn', {
                        delay: 500
                    });
                    $('.timer').velocity({ opacity: 1 }, {
                        delay: 700
                    });
                } else if ($('.carousel-inner>div.active').eq(0).hasClass('miningSVG')) {
                    $('.miningCart').velocity('transition.slideRightIn', { delay: 0 });
                } else if ($('.carousel-inner>div.active').eq(0).hasClass('sceSVG')) {
                    $('.hill').velocity('transition.slideRightIn', { delay: 0 });
                    $('.mountain').velocity('transition.slideLeftIn', { delay: 500 });
                    $('.trees').velocity('transition.slideUpIn', { delay: 700 });
                    $('.sun').velocity('transition.expandIn', { delay: 400 });
                    $('.clouds').velocity('transition.slideLeftIn', { delay: 400 });
                    $('.hand').velocity('transition.slideRightIn', { delay: 0, duration: 1000 });
                    $('.rain').velocity('transition.slideUpIn', { delay: 1200 });
                } else if ($('.carousel-inner>div.active').eq(0).hasClass('compSVG')) {
                    $('.table').velocity('transition.slideRightIn', { delay: 0 });
                    $('.man').velocity('transition.slideLeftIn', { delay: 200 });
                    $('.desktop').velocity('transition.slideUpIn', { delay: 100 });
                    $('.page1').velocity('transition.expandIn', { delay: 400 });
                    $('.page2').velocity('transition.expandIn', { delay: 400 });
                    $('.page3').velocity('transition.expandIn', { delay: 400 });
                    $('.cup').velocity('transition.slideLeftIn', { delay: 1000 });
                } else if ($('.carousel-inner>div.active').eq(0).hasClass('bizSVG')) {
                    $('.bizHand').velocity('transition.slideLeftIn', { delay: 100 });
                    $('.bizCloud').velocity('transition.slideUpIn', { delay: 100 });
                    $('.bizItems').velocity('transition.slideDownIn', { delay: 100 });
                    $('.dart').velocity('transition.slideLeftIn', { delay: 100 });
                    $('.bizGraph').velocity('transition.slideLeftIn', { delay: 100 });
                    $('.bizCoin').velocity('transition.slideLeftIn', { delay: 100 });
                    $('.bizArrow').velocity('transition.slideRightIn', { delay: 600 });
                } else if ($('.carousel-inner>div.active').eq(0).hasClass('astroSVG')) {
                    $('.satellite').velocity('transition.slideUpIn', { delay: 400 });
                    $('.astronaut').velocity('transition.slideRightIn', { delay: 700 });
                    $('.asteroid').velocity('transition.expandIn', { delay: 1000 });
                    $('.shuttle').velocity('transition.slideDownIn', { delay: 0 });
                } else if ($('.carousel-inner>div.active').eq(0).hasClass('mechSVG')) {
                    $('.animatedSVG').velocity({ opacity: 1 });
                } else if ($('.carousel-inner>div.active').eq(0).hasClass('civilSVG')) {
                    $('.blueprint').velocity('transition.slideRightIn', { delay: 0 });
                    $('.plans').velocity('transition.slideLeftIn', { delay: 200 });
                    $('.tools').velocity('transition.slideUpIn', { delay: 600 });
                    $('.bulb').velocity('transition.expandIn', { delay: 800 });
                    $('.engineer').velocity('transition.slideDownIn', { delay: 400 });
                } else if ($('.carousel-inner>div.active').eq(0).hasClass('matSVG')) {
                    $('.molecules').velocity('transition.expandIn', { delay: 0 });
                }
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
