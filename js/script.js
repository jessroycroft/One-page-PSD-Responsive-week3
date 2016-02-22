$(function() {
      audiojs.events.ready(function() {
        var as = audiojs.createAll();
      });
      // Toggle for mobile header nav
      $('.header-hamburger').on('click', function(event){
      	event.preventDefault();
      	$('.header-nav ul').slideToggle();
      });
      // Toggle for load more episodes
      $('.load-more').on('click', function(event){
      	event.preventDefault();
      	$('.load-more-ep').slideToggle();
      });
      // Toggle states for footer sections
      $('.read-more1').on('click', function(event){
      	event.preventDefault();
      	$('.contents ul.seasons').slideToggle();
      });
      $('.read-more2').on('click', function(event){
      	event.preventDefault();
      	$('.contents ul.archives').slideToggle();
      });
      $('.read-more3').on('click', function(event){
      	event.preventDefault();
      	$('.contents ul.news').slideToggle();
      });
      $('.read-more4').on('click', function(event){
      	event.preventDefault();
      	$('.contents ul.follow').slideToggle();
      });
      // End toggles for footer navs
}); 