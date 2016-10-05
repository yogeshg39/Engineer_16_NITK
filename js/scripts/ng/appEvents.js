(function() {
    'use strict';

    angular
        .module('myApp', []);
    angular
        .module('myApp', []).run(function($rootScope){
              $rootScope.$on("$includeContentLoaded", function(event, templateName){
                 function getParameterByName(key) {
            key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
            var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
            var slide = match && decodeURIComponent(match[1].replace(/\+/g, " "));
            if (Math.floor(slide) == slide && $.isNumeric(slide))
                return parseInt(slide);
            else
                return 0;
        }
        var slideNumber = getParameterByName('slide');

        $('#myCarousel').carousel(slideNumber);
        $('.carousel-indicators-tabs>li').removeClass('active');
        $('.carousel-indicators-tabs>li[data-slide-to='+slideNumber+']').addClass('active');
        $('.animatedSVG').css({opacity:1});
              });
            });

})();
