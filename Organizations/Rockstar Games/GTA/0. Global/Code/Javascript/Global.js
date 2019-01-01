// LOADING SCREEN
function loadingScreenGTA() {
  var scene,
      character,
      battery_alert,
      loader_hasnt_been_skipped,
      check_animation_completion_interval,
      end_of_title_interval;
  
  removeLoaderCover();

  function infoContainer() {
    if (mobile) {
      if (ios) {
        $('.gta .battery-adjustment').addClass('show').html("<span class='info white icon'></span> If '<span class='title'>Low Power Mode</span>'<span class='battery low-power-mode icon'></span>is turned on, turn it off for peak performance.");
        
        native_browser = "Safari";
      } 

      if (android) {
        $('.gta .battery-adjustment').addClass('show').html("<span class='info white icon'></span> If '<span class='title'>Battery Saver Mode</span>' is turned on, turn it off for peak performance.");
        
        native_browser = "Chrome or Firefox";
      }

      $('.gta .open-in-different-browser').addClass('show').html("<span class='info white icon'></span> If opened in a social networks browser, open in native browser instead for peak performance.");
      $('.open-in-different-browser').html($('.open-in-different-browser').html().replace("native browser", native_browser));
    }

    if (computer) {
      if (windows) {
        if (firefox) {
          $('.gta .open-in-different-browser').addClass('firefox show').html("<span class='info white icon'></span>Please use Chrome or Safari. Firefox on Windows has ugly scrollbars.");
          $('.mac-os > .menu-bar, .mac-os > .desktop').remove();
        }
      }
    } 
  } 
  infoContainer();
  
  if (computer && windows && firefox || twitter_in_app || instagram_in_app) {
    setTimeout(function() {
      $('.gta .animations-container.first').addClass('show');
      moveLoop();
    }, 1000);
    return;
  }
  
  function moveLoop() {
    scene = $('.gta.five .animations-container.show').find('.scene');
    character = $('.gta.five .animations-container.show').find('.character');
    
    checkDeviceLength();
    if (device_width_longer) {
      $('.gta.five .animations-container .character').removeClass('move');

      setTimeout(function() {
        character.addClass('move'); 
        if (!$('.gta.five .animations-container .scene').hasClass('move')) {
          $('.gta.five .animations-container .scene').addClass('move')
        }
      }, 100);
    }

    if (device_height_longer) {
      $('.gta.five .animations-container .scene, .gta.five .animations-container .character').removeClass('move');

      setTimeout(function() {
        $(scene, character).addClass('move');
      }, 100);
    }
  }

  function transitions() { 
    function checkSkippedStatus() {
      loader_hasnt_been_skipped = $('.loader').length == 1 && !$('.loader').hasClass('skipped');
    }
    
    // FIRST
    $('.gta .animations-container.first').addClass('show');
    moveLoop();
    setTimeout(function() {
      $('.gta .animations-container.first').removeClass('show');
      $('.gta .product-logo.icon').text("");
      $('.gta .skip-loader').addClass('show').click(function() {
        if (!$('.gta div.fast-forward-automated-text').hasClass('show')) {
          $('.gta div.fast-forward-automated-text').addClass('show');
        }
        $('.gta .skip-loader').removeClass('unclicked show');
        webpage_loader.addClass('skipped');
        $('.gta .animations-container').removeClass('show');
        if (mobile) {
          $('.gta .battery-adjustment, .gta .open-in-different-browser').removeClass('show');
        }

        setTimeout(function() {
          $('.gta .skip-loader').remove();
        }, 200);

        setTimeout(function() {
          $('.gta .animations-container .scene, .gta .animations-container .character').removeClass('move');
          $('.gta .animations-container.first, .gta .animations-container.second, .gta .animations-container.third').remove();
        }, 1500);

        setTimeout(function() {
          $('.gta').addClass('custom');
          $('.gta.custom .product-logo').removeClass('gta-5 icon').addClass('text unread');
          $('.gta.custom .organization-logo').removeClass('rockstar-games');
          $('.gta.custom .animations-container.fourth').addClass('show');
        }, 1900);
        
        setTimeout(function() {
          if ($('.gta div.fast-forward-automated-text').hasClass('show')) {
            $('.gta div.fast-forward-automated-text').removeClass('show');
          }
        }, 2300);

        setTimeout(function() { 
          titleThenRemoveLoader();
        }, 3300); 
      });
    }, 4150); 
    setTimeout(function() {
      checkSkippedStatus();
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.first').remove();
        if (computer) {
          $('.gta div.fast-forward-automated-text').addClass('show');
        }
      }
    }, 5650);

    // SECOND
    setTimeout(function() { 
      checkSkippedStatus();
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.second').addClass('show');
        moveLoop();
      }
    }, 6050);
    setTimeout(function() {
      checkSkippedStatus();
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.second').removeClass('show');
        if (mobile) {
          $('.gta div.fast-forward-automated-text').addClass('show');
        }
      }
    }, 9200);
    setTimeout(function() {
      checkSkippedStatus();
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.second').remove();
        $('.gta .skip-loader').removeClass('show');

        if (mobile) {
          $('.gta .battery-adjustment').removeClass('show');
        }
      }
    }, 10700);

    // THIRD
    setTimeout(function() {
      checkSkippedStatus();
      if (loader_hasnt_been_skipped) {
        if (computer) {
          $('.gta div.fast-forward-automated-text').removeClass('show');
        }
        $('.gta .animations-container.third').addClass('show');
        moveLoop();
      }
    }, 11100);
    setTimeout(function() {
      checkSkippedStatus();
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.third').removeClass('show');
        if (mobile) {
          $('.gta .open-in-different-browser').removeClass('show');
        } 
      }
    }, 14250);
    setTimeout(function() {
      checkSkippedStatus();
      if (loader_hasnt_been_skipped) {
        $('.gta .animations-container.third').remove();
      }
    }, 15750);

    // FOURTH
    setTimeout(function() {
      checkSkippedStatus();
      if (loader_hasnt_been_skipped) {
        if (mobile) {
          $('.gta div.fast-forward-automated-text').removeClass('show');
        }
        $('.gta').addClass('custom');
        $('.gta.custom .product-logo').removeClass('gta-5 icon').addClass('text unread');
        $('.gta.custom .organization-logo').removeClass('rockstar-games');
        $('.gta.custom .animations-container.fourth').addClass('show');
        moveLoop();
      }
    }, 16150);
    setTimeout(function() {
      checkSkippedStatus();
      if (loader_hasnt_been_skipped) {
        check_animation_completion_interval = setInterval(checkAnimationCompletion, 200);
        function checkAnimationCompletion() {
          if ($('.gta').hasClass('five')) {
            character = $('.gta.five .animations-container.fourth .character').css('background-position-x');

            checkDeviceLength();
            if (device_width_longer) {
              scene = $('.gta.five .animations-container.fourth .scene').css('transform');
              if (character == '60%') {
                window.clearInterval(check_animation_completion_interval);
                setTimeout(function() {
                  titleThenRemoveLoader();
                }, 1000);
              }
            }

            if (device_height_longer) {
              scene = $('.gta.five .animations-container.fourth .scene').css('background-position-x');
              if (scene == '60%' && character == '50%') {
                window.clearInterval(check_animation_completion_interval); 
                setTimeout(function() {
                  titleThenRemoveLoader();
                }, 1000);
              }
            }
          }
        }
      }
    }, 19500);
  }

  function titleThenRemoveLoader() {
    $('.gta .product-logo.text').text(product_title);
    automatedText('.gta .product-logo.text', 2000, [''], 0, '-break-', 800);

    end_of_title_interval = setInterval(endOfTitle, 200);
    function endOfTitle() {
      if ($('.gta .product-logo.text').text().includes(product_title)) {
        window.clearInterval(end_of_title_interval); 
        setTimeout(function() {
          callRemainderFunctions();
        }, 100); 
        setTimeout(function() {
          removeLoader(webpage_loader, 'slide-up', 0, 3000);
        }, 3600); 
      }
    }
  }
  
  setTimeout(function() {
    transitions();  
  }, 4500);
}
