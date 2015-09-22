/*
 * scripts.js contains all the custom javascript for all pages
 * scripts for each page generally start by a condition to see if we are on that page
 *
 */

$(document).ready(function(){
  'use strict';

  // solving hover problem in touch screens
  $('body').bind('touchstart', function() {});

  // a legacy function used in advertisers and publishers page
  function activateItemOnClick (i){
      $('#button' + i).click(
          function() {
            //Clear active item
            $('#carousel-cases .carousel-inner .item.active').removeClass('active');
            //Activate item number #item
            $('#item' + i).addClass('active');
            //console.log("active" + i);
          }
          );

      $('#button' + i + '-mobile').click(
          function() {
            //Clear active item
            $('#carousel-cases .carousel-inner .item.active').removeClass('active');
            //Activate item number #item
            $('#item' + i).addClass('active');
            //console.log("active" + i);
          }
          );

    }
  // hide the floating-footer (call to action)  when page loads//{{{
  $(window).scroll(function() {
    if ($(this).scrollTop() < 200) {
      $('.floating-footer').slideUp();
    }
    else {
      $('.floating-footer').slideDown();
      $('.second-row-header').slideUp(200);
      $('.header-menu-advertisers').fadeOut();
      $('.header-menu-services').fadeOut();
    }
  });//}}}

  // a functions that scrolls to id//{{{
  function goToByScroll(id){
    // Scroll
    $('html,body').animate({
      scrollTop: $('#' + id).offset().top - 55
    },
    'fast');
  }//}}}

// match heights//{{{

// match height for images in team page
$('.team-page #last-picture-rows img').matchHeight();//}}}

// All homepage scripts//{{{

/* hideAllShowOne
 * input css selector, string
 * It hides other texts, and shows the input,
 * used on front page gallery
 */

/* details gallery deprecated code
   function hideAllShowOne(elm, elm2) {
   $('.text-holder', '#details').css('display', 'none');
   $(elm, '#details').css('visibility', 'visible');
   $(elm).fadeIn(150);
   $('.ghost-btn-holder', '#details' ).css('display', 'none');
   $('.ghost-btn-holder', elm2 ).css('display', 'block');
   }
   */

//}}}
// details gallery text/pic callery

function addActiveClass(el) {
  $(el).addClass('active');
}

$(function isFrontPage()
    {
      // are we on home page?
      if($('.front-page').length > 0)
      {

        // Highlight the mobile menu on front page
         addActiveClass('#home-link');




        // homepage tabs hiding/fadeIning//{{{
        $('#overview-th').on('click touchstart', function(){
          goToByScroll('overview-th');
          $('.thumb-holder').removeClass('active');
          $(this).addClass('active');
          $('#tab-advertisers').hide();
          $('#tab-services').hide();
          $('#tab-publishers').hide();
          $('#tab-overview').fadeIn('fast');
          var src = 'edge-animates/overview/home-devices.html';
          $('#ovr-frm').attr('src', src);
        });
        $('#publishers-th').on('click touchstart', function(){
          goToByScroll('overview-th');
          $('.thumb-holder').removeClass('active');
          $(this).addClass('active');
          $('#tab-overview').hide();
          $('#tab-advertisers').hide();
          $('#tab-services').hide();
          $('#tab-publishers').fadeIn('fast');
          var src = 'edge-animates/publishers-v2/publisher-device-animation.html';
          $('#pub-frm').attr('src', src);

        });
        $('#advertisers-th').on('click touchstart', function(){
          goToByScroll('overview-th');
          $('.thumb-holder').removeClass('active');
          $(this).addClass('active');
          $('#tab-overview').hide();
          $('#tab-services').hide();
          $('#tab-publishers').hide();
          $('#tab-advertisers').fadeIn('fast');
          var src = 'edge-animates/advertisers/advertisers-device-animation.html';
          $('#advr-frm').attr('src', src);
        });
        $('#services-th').on('click touchstart', function(){
          goToByScroll('overview-th');
          $('.thumb-holder').removeClass('active');
          $(this).addClass('active');
          $('#tab-overview').hide();
          $('#tab-advertisers').hide();
          $('#tab-publishers').hide();
          $('#tab-services').fadeIn('fast');
        });//}}}

        // HP tabs swipe

        // using hammerjs for swipe
        var tabOverview = document.getElementById('tab-overview');
        delete Hammer.defaults.cssProps.userSelect;
        var mc = new Hammer(tabOverview);
        mc.get('swipe').set({ threshold: 2 });

        mc.on('dragright swiperight', function showPublishersMobile() {
          $('.thumb-holder').removeClass('active');
          $('#publishers-th').addClass('active');
          $('#tab-overview').hide();
          $('#tab-publishers').fadeIn('fast');
          $('.tab-row-mobile li').removeClass('active');
          $('.tab-row-mobile li.publishers').addClass('active');

          var src = 'edge-animates/publishers/publisher-device-animation.html';
          $('#pub-frm').attr('src', src);
        });

        var tabPublishers = document.getElementById('tab-publishers');

        var tb = new Hammer(tabPublishers);
        tb.get('swipe').set({ threshold: 2 });

        tb.on('dragright swiperight', function() {
          $('.thumb-holder').removeClass('active');
          $('#advertisers-th').addClass('active');
          $('#tab-publishers').hide();
          $('#tab-advertisers').fadeIn('fast');
          $('.tab-row-mobile li').removeClass('active');
          $('.tab-row-mobile li.advertisers').addClass('active');
          var src = 'edge-animates/advertisers/advertisers-device-animation.html';
          $('#advr-frm').attr('src', src);
        });

        tb.on('dragleft swipeleft', function() {
          $('.thumb-holder').removeClass('active');
          $('#overview-th').addClass('active');
          $('#tab-publishers').hide();
          $('#tab-overview').fadeIn('fast');
          $('.tab-row-mobile li').removeClass('active');
          $('.tab-row-mobile li.overview').addClass('active');
          var src = 'edge-animates/overview/home-devices.html';
          $('#ovr-frm').attr('src', src);
        });

        var tabAdvertisers = document.getElementById('tab-advertisers');
        var ta = new Hammer(tabAdvertisers);
        ta.get('swipe').set({ threshold: 2 });
        ta.on('dragright swiperight', function() {
          $('.thumb-holder').removeClass('active');
          $('#services-th').addClass('active');
          $('#tab-advertisers').hide();
          $('#tab-services').fadeIn('fast');
          $('.tab-row-mobile li').removeClass('active');
          $('.tab-row-mobile li.services').addClass('active');
        });
        ta.on('dragleft swipeleft', function() {
          $('.thumb-holder').removeClass('active');
          $('#publishers-th').addClass('active');
          $('#tab-advertisers').hide();
          $('#tab-publishers').fadeIn('fast');
          $('.tab-row-mobile li').removeClass('active');
          $('.tab-row-mobile li.publishers').addClass('active');
        });

        var tabServices = document.getElementById('tab-services');
        var ts = new Hammer(tabServices);
        ts.get('swipe').set({ threshold: 2 });
        ts.on('dragleft swipeleft', function() {
          $('.thumb-holder').removeClass('active');
          $('#advertisers-th').addClass('active');
          $('#tab-services').hide();
          $('#tab-advertisers').fadeIn('fast');
          $('.tab-row-mobile li').removeClass('active');
          $('.tab-row-mobile li.advertisers').addClass('active');
        });

        // play/pausing videos on mouse over on home page
        var $formatsVid = $('video', '#formats-modal');
        $formatsVid.hover(function() {
          this.play();
        },
        function(){
          this.pause();
        });

        $formatsVid.on('touchstart', function(){
          this.play();
        });


        // homepage tabs hiding/fadeIning on mobile //{{{
        $('.overview', '.tab-row-mobile').on('click touchstart', function(){
          $(this).addClass('active');
          $('#tab-advertisers').hide();
          $('#tab-services').hide();
          $('#tab-publishers').hide();
          $('#tab-overview').fadeIn('fast');
          $('.tab-row-mobile li').removeClass('active');
          $('.tab-row-mobile li.overview').addClass('active');
        });
        $('li.publishers', '.tab-row-mobile').on('click touchstart', function(){
          $('.thumb-holder').removeClass('active');
          $(this).addClass('active');
          $('#tab-overview').hide();
          $('#tab-advertisers').hide();
          $('#tab-services').hide();
          $('#tab-publishers').fadeIn('fast');
          $('.tab-row-mobile li').removeClass('active');
          $('.tab-row-mobile li.publishers').addClass('active');

        });
        $('li.advertisers', '.tab-row-mobile').on('click touchstart', function(){
          $('.thumb-holder').removeClass('active');
          $(this).addClass('active');
          $('#tab-overview').hide();
          $('#tab-services').hide();
          $('#tab-publishers').hide();
          $('#tab-advertisers').fadeIn('fast');
          $('.tab-row-mobile li').removeClass('active');
          $('.tab-row-mobile li.advertisers').addClass('active');
        });
        $('li.services', '.tab-row-mobile').on('click touchstart', function(){
          $('.thumb-holder').removeClass('active');
          $(this).addClass('active');
          $('#tab-overview').hide();
          $('#tab-advertisers').hide();
          $('#tab-publishers').hide();
          $('#tab-services').fadeIn('fast');
          $('.tab-row-mobile li').removeClass('active');
          $('.tab-row-mobile li.services').addClass('active');
        });//}}}



        // match height for success frame
        $('.success-frame .story').matchHeight();

        /*
        // show/hide text in details section
        $('.text-holder', '#details').css('display', 'none');
        $('.text-holder.active', '#details').css('display', 'block');

        $('#first-cell').on('mouseenter touchstart', function() {
        hideAllShowOne('#text-holder-one', this);
        });
        $('#second-cell').on('mouseenter touchstart', function() {
        hideAllShowOne('#text-holder-two', this);
        });
        $('#third-cell').on('mouseenter touchstart', function() {
        hideAllShowOne('#text-holder-three', this);
        });
        $('#fourth-cell').on('mouseenter touchstart', function() {
        hideAllShowOne('#text-holder-four', this);
        });
        $('#fifth-cell').on('mouseenter touchstart', function() {
        hideAllShowOne('#text-holder-five', this);
        });
        $('#sixth-cell').on('mouseenter touchstart', function() {
        hideAllShowOne('#text-holder-six', this);
        });
        */
(function MosaicGalleryModule() {
        var setting, content, MosaicGallery = {
          settings: {
            $container: $('#text-holder'),
            $firstCell: $('#first-cell'),
            $secondCell: $('#second-cell'),
            $thirdCell: $('#third-cell'),
            $fourthCell: $('#fourth-cell'),
            $fifthCell: $('#fifth-cell'),
            $sixthCell: $('#sixth-cell')

          },
          contents: {

            mosOne:' <h2>VIDEO – THE KIOSKED WAY </h2> <p > Kiosked Video Ads animate into view within the content on the publisher’s site or between paragraphs and breaks. All placements can be customized by the publisher. By using our targeting options, Kiosked Video Ads maximize viewability by placing the ad where your viewers are actively looking.</p>'
              ,
            mosTwo:
              ' <h2> CHECK OUT OUR MOBILE DEMO CENTER </h2> <p> Our DemoCenter lets you see how our different ad units and placements work. You will find placement related information, infographics, media cards, presentations, videos, one pagers and much more. </p>',
            mosThree:'<h2> Services and features </h2> <p> Our cross-functional services team provide you the industry’s best services including simplified workflow, weekly performance insights and recommended actions to increase revenues and impressions, global demand matching and cultivation, PMP concierge service, ad unit mix and set-up, ad quality assurance and custom reporting and forecasting and much more.  </p> ',
            mosFour: ' <h2> GLOBAL COMPANY WITH A FINNISH SOUL </h2> <p > Kiosked was founded in Finland in 2010 as a content monetization platform for publishers. We have evolved into the global leader of programmatic in-content advertising. We currently employ 70+ employees spanning 32 nationalities across 5 international offices in Helsinki, London, New York, Los Angeles and Singapore.  </p>',
            mosFive: ' <h2> Value Ads. Precisely.  </h2> <p > Kiosked offers advertisers and publishers a better platform for buying and placing in-view ads. By helping you place the most relevant ads into content you will get more out of every ad, every time </p>',
            mosSix: ' <h2> Will we see you at dmexco?  </h2> <p> Kiosked will be attending dmexco, Europe\'s largest Digital Marketing Exposition and Conference in Cologne. You will find us in the turquoise Kiosked Booth in Hall 9 / C010. Schedule a meeting with us on the 16th and 17th of September and let us show you how we are solving the industry’s major issues around viewability and relevancy of ads.  </p>'

          },
          init: function() {
            setting = this.settings;
            content = this.contents;
            setting.$container.html(this.contents.mosOne);
            this.uiBindings();

          },
          uiBindings: function() {
          setting.$firstCell.on('mouseenter touchstart', function() {
            setting.$container.hide().html(content.mosOne).fadeIn();
        });
          setting.$secondCell.on('mouseenter touchstart', function() {
            setting.$container.hide().html(content.mosTwo).fadeIn();
        });
          setting.$thirdCell.on('mouseenter touchstart', function() {
            setting.$container.hide().html(content.mosThree).fadeIn();
        });
          setting.$fourthCell.on('mouseenter touchstart', function() {
            setting.$container.hide().html(content.mosFour).fadeIn();
        });
          setting.$fifthCell.on('mouseenter touchstart', function() {
            setting.$container.hide().html(content.mosFive).fadeIn();
        });
          setting.$sixthCell.on('mouseenter touchstart', function() {
            setting.$container.hide().html(content.mosSix).fadeIn();
        });

          }


        };
        MosaicGallery.init();
})();
        // match images in second part of homepage
        // var $detailsSectionDivs = $('.details-section div');
       // $detailsSectionDivs.matchHeight();
        // slick carousel details section mobile  //{{{
        $('#details-carousel').slick({
          infinite: false,
          slidesToShow: 1,
          mobileFirst: 1,
          speed: 300,
          dots: false,
          arrows: false,
          slidesToScroll: 1,
          variableWidth: false,
          responsive: [
          {
            breakpoint: 768,
            settings: "unslick"
          }
          ]
        });//}}}



        // slick carousel in homepage//{{{
        $('.success-frame').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 600,
          autoplaySpeed: 5500,
          variableWidth: false,
          responsive: [
          {
            breakpoint: 670,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false
            }
          }
          ]
        });//}}}

      }
    });

//}}}

// all scripts for publishers page
$(function isPublishersPage() {
  if($('.publishers-page').length > 0) {
    addActiveClass('#publishers-link');

    var i;
    var length = 9;
    for (i = 1; i < length; i++){
      activateItemOnClick(i);
    }
  }
  });
// end publishers page

// all scripts for about page
$(function isAboutPage() {
      if($('.about-page').length > 0) {
         addActiveClass('#about-link');
         (function OfficeInfo() {
         var $helsinkiIcon = $('#helsinkiIcon');
         var $singaporeIcon = $('#singaporeIcon');
         var $laIcon = $('#laIcon');
         var $nyIcon = $('#nyIcon');
         var $londonIcon = $('#londonIcon');

        var $nyOffice = $('#nyOffice');
        var $laOffice = $('#laOffice');
        var $helsinkiOffice = $('#helsinkiOffice');
        var $singaporeOffice = $('#singaporeOffice');
        var $londonOffice = $('#londonOffice');

         function revealOneAddress(el){
            $('.offices-box').hide();
            el.show();
         }
        $helsinkiIcon.on('mouseenter touchstart', function() {
        revealOneAddress($helsinkiOffice, this);
        });
        $singaporeIcon.on('mouseenter touchstart', function() {
        revealOneAddress($singaporeOffice, this);
        });
        $laIcon.on('mouseenter touchstart', function() {
        revealOneAddress($laOffice, this);
        });
        $nyIcon.on('mouseenter touchstart', function() {
        revealOneAddress($nyOffice, this);
        });
        $londonIcon.on('mouseenter touchstart', function() {
        revealOneAddress($londonOffice, this);
        });
         })();
      }
});
// end about page
// all scripts for press page
$(function isPressPage() {
      if($('body.press').length > 0) {
         addActiveClass('#press-link');
      }
});
// all scripts for careers page
$(function isCareersPage() {
      if($('body.careers-page').length > 0) {
         addActiveClass('#careers-link');
      }
});
// end career page

// showing second-row menu//{{{//{{{
$('.global-header').hover(
    function() {
      $('.second-row-header').slideDown(100);
    }, function() {
    }
    );

// showing vids in popus using magnificPopup plugin//{{{
$('#product-tour-vid-btn').magnificPopup({
  items: {
    src: 'http://vimeo.com/122082128',
    type: 'iframe'
  }
});

$('#rant-vid-btn').magnificPopup({
  items: {
    src: '//vimeo.com/122084390',
    type: 'iframe'
  }
});//}}}

//Interactivity of the bookmarklet//{{{
var bookmarklet = $('.bookmarklet');
bookmarklet.animate({right: '0px'}, 800);
bookmarklet.animate({right: '-20px'}, 800);//}}}


// popup for trying bookmarklet//{{{
bookmarklet.on('click touchstart', function() {
  $('.try-popup').fadeIn('fast');
});

$('#newsletter-btn').on('click', function() {
  $('.news-letter-form').fadeIn('fast');
});
$('#close-btn').on('click', function() {
  $('.try-popup').hide();
});
$('#close-btn-nws').on('click', function() {
  $('.news-letter-form').hide();
});
$('#close-btn-question').on('click', function() {
  $('.ask-a-question').hide();
});
$(document).mouseup(function (e)
    {
      var container = $('.try-popup');

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        container.hide();
      }
      var containerNws = $('.news-letter-form');

      if (!containerNws.is(e.target) // if the target of the click isn't the container...
          && containerNws.has(e.target).length === 0) // ... nor a descendant of the container
      {
        containerNws.hide();
      }
    });

//}}}

// Try bookmarklet form
(function bookmarkletForm() {
  var $tryForm = $('#getBookmarklet');
  var $askingPhase = $('.asking-phase');
  var $guidingPhase = $('.guiding-phase');
  $tryForm.submit(function(event) {

    $.post('api/adapter.php', {
      action: 'try-bookmarklet',
      source_url: '',
      name: $('#bookmarkletName').val(),
      email: $('#bookmarkletEmail').val()
    })
    .done(function() {
      $askingPhase.hide();
      $guidingPhase.fadeIn();


    });
    event.preventDefault();
  });
})();

(function newsletterForm() {

  var $questionPhase = $('.question-phase');
  var $thankingPhase = $('.thanking-phase');
  var $newsForm = $('#newsForm');
  $newsForm.submit(function(event) {


    $.post('api/adapter.php', {
      action: 'subscribe_email',
      source_url: '',
      email: $('#newsEmail').val()
    })
    .done(function() {
      $questionPhase.hide();
      $thankingPhase.show();


    });
    event.preventDefault();
  });

})();
(function singUpForm() {
  var $signupForm = $('#signUpToKiosked');
  var $firstSignupStep = $('#first-sign-up-step');
  var $secondSignupStep = $('#second-sign-up-step');

  $signupForm.submit(function(event) {

    $.post('api/adapter.php', {
      action: 'signup_step_1',
      source_url: '',
      name: $('#signUpName').val(),
      email: $('#signUpEmail').val()
    })
    .done(function() {
      $firstSignupStep.hide();
      $secondSignupStep.fadeIn();


    });
    event.preventDefault();
  });
})();
(function secondSingUpForm() {
  var $secondSignupForm = $('#secondStepSignUpToKiosked');
  var $secondSignupStep = $('#second-sign-up-step');
  var $signupThankYou = $('#signupThankYou');

  $secondSignupForm.submit(function(event) {

    $.post('api/adapter.php', {
      action: 'signup_step_2',
      source_url: '',
      website: $('#signUpURL').val(),
      category: $('#siteCategory').val(),
      monthly_traffic: $('#monthlyTraffic').val(),
      country: $('#signUpCountry').val()
    })
    .done(function() {
      $secondSignupStep.hide();
      $signupThankYou.fadeIn();

    });
    event.preventDefault();
  });
})();
// ask a question form in footer
(function bookmarkletForm() {
  var $questionForm = $('#questionForm');
  var $askPhase = $('.ask-phase');
  var $thankPhase = $('.thank-phase');
  $questionForm.submit(function(event) {

    $.post('api/adapter.php', {
      action: 'ask_a_question',
      source_url: '',
      question: $('#theQuestion').val(),
      email: $('#questionEmail').val()
    })
    .done(function() {
      $askPhase.hide();
      $thankPhase.fadeIn();
    });
    event.preventDefault();
  });
})();
// all scripts for advertisers page//{{{
$(function isAdvPage()
    {
      // are we on team page?
      if($('.advertisers-page').length > 0)
      {
         addActiveClass('#advertisers-link');

        $('.formats-showcase').slick({
          dots: true,
          arrows: false,
        });
    var i;
    var length = 9;
    for (i = 1; i < length; i++){
      activateItemOnClick(i);
    }
      }
    });//}}}

// media page scripts//{{{
$(function isMediaPage()
    {
      // are we on media page?
      if($('.press').length > 0)
      {

        var $subscribeForm = $('#subscribeMediaPage');
        $subscribeForm.submit(function(event) {


          $.post('api/adapter.php', {
            action: 'subscribe_email',
            source_url: '',
            email: $('#mediaEmail').val()
          })
          .done(function() {
            $subscribeForm.hide();
            $('.thank-you').show();


          });
          event.preventDefault();
        });

      }
    });//}}}

// push left sidebar menu mobile
  $('#simple-menu').sidr();

});// ending the page load function

