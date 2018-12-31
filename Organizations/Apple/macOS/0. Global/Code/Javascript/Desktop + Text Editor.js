// GLOBAL VARIABLES
var mac_os = $('.mac-os'),
    desktop_file = $('.mac-os .files-row .file'),
    primary_desktop_file = $('.mac-os .files-row .file.primary'),
    newly_selected_desktop_file,
    background_credits = $('.mac-os > .background-credits');




// DEVICE SPECIFICATIONS
if (desktop) {
  draggableElementWithBlur('.mac-os', '.application', '.header', '.application > .blur', 'background-image'); 
}

if (mobile) {
  if (ios) {
    enableInlineVideo($('.application .media video')[0]);
  }

  if (android) {
    enableInlineVideoAndroid('.application .media video');
  }
}


 

// DETECT MAC OS OR APPLICATION MOVEMENT
function macOsOrApplicationMovement() {    
  $('.mac-os, .application').mutate('width height top left', function(el, info) {
    function deviceCurrentSize() {
      checkDeviceLength();
      if (device_width_longer) {
        if ($('.application').hasClass('quick-look')) {
          titleOverflow('.application.quick-look .title', '.application.quick-look .title-scroll');
          return;
        } 
        
        if ($('.application').hasClass('world-clock')) {
          return;
        }
        
        if ($('.application').hasClass('text-editor')) {
          var unwatched_video_present = $('.primary-container .media.visible').length == 1;
          if (unwatched_video_present) {
            applicationRemove();
            application.addClass('video-player');
            applicationChange();
          }
        }
      }  
      
      if (device_height_longer) {
        if ($('.application').hasClass('quick-look')) {
          setTimeout(function() {
            titleOverflow('.application.quick-look .title', '.application.quick-look .title-scroll');
            return;
          }, 1000);
        } 

        if ($('.application').hasClass('video-player')) {
          $(window).off('resize');
          media = $('.primary-container .media.visible');
          video = media.find('video');
          mediaVariableAssignments();

          applicationRemove();
          application.addClass('text-editor');
          applicationChange();
          previous_block.after(media);
        }
      }
    }
    deviceCurrentSize();
    
    imageBlur('.mac-os', '.mac-os > .menu-bar', '.mac-os > .menu-bar > .blur-container .blur', 'background-image');
    imageBlur('.mac-os', '.application', '.application > .blur', 'background-image');
    automatedScrollAdjustment();
    
    if (desktop) {
      repositionDraggable();
    }
  });
}
macOsOrApplicationMovement();




// MENU BAR 
function menuBar() {
  $('.menu-bar .section-container > button').click(function(event) {
    var section_container = $(this).parent(),
        this_element = $(this),
        menu = $(this).next('.menu'),
        this_is_selected = section_container.hasClass('selected'),
        this_is_not_selected = !this_is_selected,
        selected_exists = $('.menu-bar .section-container.selected').length == 1,
        button_is_icon = this_element.hasClass('icon'),
        apple_menu = this_element.hasClass('apple-logo'),
        date_and_time = this_element.hasClass('time'),
        profile = this_element.hasClass('name'),
        notification_center = this_element.hasClass('notification-center');
    
    if (button_is_icon) {
      this_element.removeClass('black').addClass('white');
    }
    
    if (selected_exists) {
      $('.menu-bar .section-container.selected > .icon').removeClass('white').addClass('black');
      $('.menu-bar .section-container').removeClass('selected');
    }
    
    if (this_is_not_selected) {
      section_container.addClass('selected');
    }
    
    
    // APPLE MENU 
    if (apple_menu) {
      function appleMenu() {
        return;
      }
      appleMenu();
    }
    
    
    // DATE AND TIME
    if (date_and_time) {
      function dateAndTime() {
        $('.date-and-time .menu .item.checked').on('mouseenter mouseover touchstart', function() {
          $(this).removeClass('black').addClass('white');
        })
        
        $('.date-and-time .menu .item.checked').on('mouseleave touchend', function() {
          $(this).removeClass('white').addClass('black');
        })
        
        $('.date-and-time .menu .item').click(function() {
          var this_item = $(this),
              menu = this_item.parent(),
              title_button = menu.prev('button'),
              analog_clock = $(this).hasClass('analog-clock'),
              digital_clock = $(this).hasClass('digital-clock'),
              location_and_time_preferences_exists = $('.date-and-time .menu .item.location-and-time-preferences').length == 1,
              location_and_time_preferences = $(this).hasClass('location-and-time-preferences');

          function analogOrDigital() {
            if (analog_clock || digital_clock) {
              $('.date-and-time .menu .item').removeClass('checked black white icon');
              this_item.addClass('checked black icon');
            }
            
            if (analog_clock) {
              title_button.removeClass('digital').addClass('analog');
            }

            if (digital_clock) {
              title_button.removeClass('analog').addClass('digital');
            }
          }
          analogOrDigital();
          
          if (location_and_time_preferences_exists) {
            function worldClock() {
              if (location_and_time_preferences) {
                if ($('.application').hasClass('video-player') || $('.application').hasClass('error')) {
                  return;
                }

                applicationRemove();
                application.addClass('world-clock');
                applicationChange();
              }
            }
            worldClock();
          }
        })
      }
      dateAndTime(); 
    }
      
    
    // PROFILE
    if (profile) {
      function profile() {
        return;
      }
      profile();
    }
    
    
    // NOTIFICATION CENTER
    if (notification_center) {
      var desktop_height = $('.mac-os .desktop').height(),
          height_reiteration_interval,
          covered = menu.hasClass('cover');
      
      function heightPlacement(element) {
        $(element).css('height', desktop_height);
      }
      heightPlacement(menu);
      
      function updateOnResize(element) {
        $(window).on('resize', function() {
          desktop_height = $('.mac-os .desktop').height();
          heightPlacement(element);
        });
      }
      updateOnResize(menu);
      
      if (covered) {
        setTimeout(function() {
          menu.removeClass('cover icon');
          $(window).trigger('resize');
        }, 3000);
      }
      
      if (menu.hasClass('twitter')) {
        function twitterEmbed() {
          function heightReiteration() {
            setTimeout(function() {
              window.clearInterval(height_reiteration_interval);
            }, 3000);

            setTimeout(function() {
              heightPlacement('iframe.twitter-timeline');
            }, 4000);

            setTimeout(function() {
              heightPlacement('iframe.twitter-timeline');
            }, 5000);

            setTimeout(function() {
              heightPlacement('iframe.twitter-timeline');
            }, 6000);

            setTimeout(function() {
              heightPlacement('iframe.twitter-timeline');
            }, 8000);

            setTimeout(function() {
              heightPlacement('iframe.twitter-timeline');
            }, 13000);
          }

          if (covered) {
            setTimeout(function() {
              menu.removeClass('twitter white');
            }, 3000);
          }

          var iframe_doesnt_exist = $('iframe.twitter-timeline').length == 0;
          if (iframe_doesnt_exist) {
            height_reiteration_interval = setInterval(heightPlacement('iframe.twitter-timeline'), 100);
            updateOnResize('iframe.twitter-timeline');
            heightReiteration();
            twitterWidgetScript();
          }
        }
        twitterEmbed();
      }
    }
    
    event.stopPropagation();
  })
}
menuBar();


 
 
// ON DESKTOP FILE CLICK
function onDesktopFileClick() {
  $('.mac-os .files-row .file')  
    .mutate('top left', function(el, info) {
    setTimeout(function() {
      repositionDraggable();
    }, 1000);
  })
  
    .on('click', function() {
    if ($(this).hasClass('selected')) {
      return;
    }

    if (!$(this).hasClass('selected')) {
      if ($(this).hasClass('primary')) {
        primary_desktop_file.addClass('selected');
        application.removeClass('hide');
        background_credits.removeClass('show');
        
        if ($('.application').hasClass('video-player')) {
          mac_os.addClass('dim');
        }
      }
    }
  })

    .on('contextmenu', function() {
    return false;
  })
  
    .draggable({
      cancel: false,
      cursor: 'move'
    });
}
onDesktopFileClick();




// ON MAC OS WINDOW CLICK
function onMacOSWindowClick() {
  $('.mac-os').click(function() {    
    selected_exists = $('.menu-bar .section-container.selected').length == 1;
    if (selected_exists) {
      $('.menu-bar .section-container.selected > .icon').removeClass('white').addClass('black');
      $('.menu-bar .section-container').removeClass('selected');
    }
  })
}
onMacOSWindowClick();
