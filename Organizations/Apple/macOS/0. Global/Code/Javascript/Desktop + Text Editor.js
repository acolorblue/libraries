// GLOBAL VARIABLES
var product_title,
    mac_os = $('.mac-os'),
    desktop_file = $('.mac-os .files-row .file'),
    primary_desktop_file = $('.mac-os .files-row .file.primary'),
    newly_selected_desktop_file,
    background_credits = $('.mac-os > .background-credits'),
    application = $('.application'),
    text_editor = $('.application.text-editor'),
    video_player = $('.application.video-player'),
    quick_look = $('.application.quick-look'),
    world_clock = $('.application.world-clock'),
    error = $('.application.error'),
    window_controls,
    close,
    text_editor_title = product_title,
    quick_look_title = "Save Image Then Confirm",
    world_clock_title = "World Clock",
    error_title = "An Error Has Occured",
    top_bar = $('.application > .header .top-bar'),
    top_bar_children,
    title_scroll = $('.application > .header .title-scroll'),
    primary_container = $('.application > .primary-container'),
    scroll_container = $('.application > .primary-container .scroll-container');




// DEVICE SPECIFICATIONS
function deviceSpecificationsOnMacOS() {
  if (computer) {
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
}




// ON MAC OS WINDOW CLICK
function macOSWindowClick() {
  $('.mac-os').click(function() {    
    selected_exists = $('.menu-bar .section-container.selected').length == 1;
    if (selected_exists) {
      $('.menu-bar .section-container.selected > .icon').removeClass('white').addClass('black');
      $('.menu-bar .section-container').removeClass('selected');
    }
  })
}
macOSWindowClick();
 



// DETECT MAC OS OR APPLICATION MOVEMENT
function macOSOrApplicationMovement() {    
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
    
    if (computer) {
      repositionDraggable();
    }
  });
}
macOSOrApplicationMovement();




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
            function worldmenuBarClock() {
              if (location_and_time_preferences) {
                if ($('.application').hasClass('video-player') || $('.application').hasClass('error')) {
                  return;
                }

                applicationRemove();
                application.addClass('world-clock');
                applicationChange();
              }
            }
            worldmenuBarClock();
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




// MENU BAR CLOCK
function menuBarClock() {
  var clock_conversions_interval = setInterval(clockConversions, 1000);
  function clockConversions() {
 var date = new Date(),
     month,
     day_of_month,
     year,
     weekday,
     hour, 
     hour_hand,
     timezone_offset,
     minute,
     minute_hand,
     second,
     second_hand,
     meridiem,
     am,
     pm,
     time,
     abbreviations,
     weekday_three_letters,
     weekday_one_letter,
     full_alphabetical_date,
     full_numeric_date,
     full_numeric_time,
     mac_os;
  
  
  function monthConversions() {
    month = date.getMonth();

      if (month == 0) {
        month = 'January';
      }

      if (month == 1) {
        month = 'February';
      }

      if (month == 2) {
        month = 'March';
      }

      if (month == 3) {
        month = 'April';
      }

      if (month == 4) {
        month = 'May';
      }

      if (month == 5) {
        month = 'June';
      }

      if (month == 6) {
        month = 'July';
      } 
      
      if (month == 7) {
        month = 'August';
      } 
      
      if (month == 8) {
        month = 'September';
      } 
      
      if (month == 9) {
        month = 'October';
      } 
      
      if (month == 10) {
        month = 'November';
      } 
      
      if (month == 11) {
        month = 'December';
      } 
  }
  monthConversions();
  
  
  // MONTH CONVERSION           
  function dayOfMonthConversions() {
    day_of_month = date.getDate();
  }
  dayOfMonthConversions();
  
  
  // YEAR CONVERSION
  function yearConversions() {
    year = date.getFullYear();
  }
  yearConversions();
   
  
  // WEEKDAY CONVERSION
  function weekdayConversions() {
    weekday = date.getDay();
    
    if (weekday == 0) {
      weekday = 'Sunday';
    }

    if (weekday == 1) {
      weekday = 'Monday';
    }

    if (weekday == 2) {
      weekday = 'Tuesday';
    }

    if (weekday == 3) {
      weekday = 'Wednesday';
    }

    if (weekday == 4) {
      weekday = 'Thursday';
    }

    if (weekday == 5) {
      weekday = 'Friday';
    }

    if (weekday == 6) {
      weekday = 'Saturday';
    }
  }
  weekdayConversions();
  
  
  // HOUR CONVERSION
  function hourConversions() {
    hour = date.getHours();
   
    function twelveHour() {
     if (hour >= 12) {
       hour -= 12;
     }

     if (hour == 0) {
       hour = 12;
     }
    }
    twelveHour();
  }
  hourConversions();
  
  
  // MINUTE CONVERSION
  function minuteConversions() {
    minute = date.getMinutes();
    
    if (minute < 10) {
      minute = '0' + minute;
    }
  }
  minuteConversions();
  
  
  // SECOND CONVERSION
  function secondConversions() {
    second = date.getSeconds();
    
    if (second < 10) {
      second = '0' + second;
    } 
  }
  secondConversions();
  
  
  // MERIDIEM CONVERSION
  function meridiemConversions() {
    am = date.getHours() < 12 || date.getHours() == 24,
    pm = date.getHours() >= 12 && date.getHours() < 24;
    
    if (am) {
      meridiem = 'AM';
    }

    if (pm) {
      meridiem = 'PM';
    }
  }
  meridiemConversions();
  
  
  // CHARACTER VARIATIONS
  function characterVariationsDestinction() {
    mac_os = $('.time').parents('.mac-os').length;
    
    full_alphabetical_date =  weekday + comma + space + month + space + day_of_month + comma + space + year;
    
    full_numeric_date =  month + "/" + day_of_month + "/" + year;
    
    weekday_three_letters = weekday.substr(0, 3);
    
    weekday_one_letter = weekday.substr(0, 1);
    
    full_numeric_time = hour + ':' + minute + space + meridiem;
  }
  characterVariationsDestinction();
  
  
  // PLACEMENTS
  function placements() {       
    function digital() {  
      var digital_doesnt_exist = $('.time.digital').length == 0,
          digital_exists = $('.time.digital').length == 1;
          
      if (digital_doesnt_exist) {
        return;
      } 
      
      if (digital_exists) {
        $('.time.digital .clock.text')[0].innerHTML = weekday_three_letters + space + full_numeric_time;
      }   
      
      if ($('.mac-os .menu-bar .full-date').length == 1) {
        $('.mac-os .menu-bar .full-date')[0].innerHTML = full_alphabetical_date;
      }  
    }
    digital();
            
    
    function analog() {
      var analog_doesnt_exist = $('.time.analog').length == 0,
          analog_exists = $('.time.analog').length > 0;
              
          hour = hour % 12 / 12 * 360 + (minute * 6 / 12);
          minute = minute * 6;
          second = second * 6;
      
      if (analog_doesnt_exist) {
        return;
      }
      
      if (analog_exists) {
        $('.time.analog .clock.border .hour').css('transform', 'rotate(' + hour + 'deg)');
        $('.time.analog .clock.border .minute').css('transform', 'rotate(' + minute + 'deg)');
      } 
    }
    analog();
  }
  placements();
  }
}


 
 
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




// APPLICATION REMOVE
function applicationRemove() { 
  function menuBar() {
    selected_exists = $('.mac-os > .menu-bar .section-container.selected').length == 1;
    if (selected_exists) {
      $('.mac-os > .menu-bar .section-container').removeClass('selected');
    }
  }
  menuBar();
  
  function file() {
    primary_desktop_file.removeClass('show selected');
  }
  file();
  
  function hiden() {
    if ($('.application').hasClass('hide')) {
      $('.application').removeClass('hide');
      background_credits.removeClass('show');
    }
  }
  hiden();
  
  function title() {
    title_scroll.empty();
  }
  title();
  
  function contentControls() {
    $('.application > .header .content-controls .social-platforms').empty();
    $('.application .content-controls button, .application .content-controls a').text('');
    $('.application > .header .content-controls').empty();
  }
  contentControls();
  
  if ($('.application').hasClass('error')) {
    return;
  }
  
  if ($('.application').hasClass('text-editor')) {
    pauseAnyVideosPlaying('.application');
    
    if ($('.text-editor > .header .content-controls').hasClass('search')) {
      $('.text-editor > .header .content-controls').removeClass('search');
    }
    
    if ($('.text-editor > .header .content-controls').hasClass('share')) {
      $('.text-editor > .header .content-controls .social-platforms').empty();
      $('.text-editor > .header .content-controls').removeClass('share');
    }
    
    application.removeClass('text-editor');
  }
  
  if ($('.application').hasClass('video-player')) {
    pauseAnyVideosPlaying('.application');
    thumbnail.css('height', '');
    media.css('height', '');
    application.css('height', '');
    application.removeClass('video-player');
    mac_os.removeClass('dim');
  }

  if ($('.application').hasClass('quick-look')) {
    if ($('.quick-look > .header .title-scroll').hasClass('overflow')) {
      $('.quick-look > .header .title-scroll')[1].remove();
      $('.quick-look > .header .title-scroll').removeClass('overflow');
    }
    $('.quick-look > .header .content-controls .social-platforms').empty().remove(); 
    $('.quick-look .primary-container .poster').remove();
    application.removeClass('quick-look');
  }

  if ($('.application').hasClass('world-clock')) {
    $('.mac-os .menu-bar .item.location-and-time-preferences').append($('.timezones'));
    application.removeClass('world-clock')
  }
}




// MEDIA VARIABLE ADJUSTMENTS
function mediaVariableAssignments() {
  covered = media.hasClass('covered');
  unwatched = media.hasClass('unwatched');
  clicked = !media.hasClass('unwatched');
  watched = media.hasClass('watched');
  header = media.find('.header');
  top_bar = media.find('.top-bar');
  top_bar_children = top_bar.children('div');
  window_controls = media.find('.window-controls');
  close = media.find('.close');
  content_controls = media.find('.content-controls');
  blur = media.find('.blur');
  rewind = media.find('.rewind');
  play_pause = media.find('.play-pause');
  reload = media.find('.reload');
  forward = media.find('.forward');  
  time_adjustments = rewind || forward;
  content = media.find('.content');
  buffering_indicator = media.find('.buffering-indicator');
  thumbnail = media.find('.thumbnail');
  hidden = $(video).hasClass('hide');
  paused =  video.paused;
  playing = !video.paused;
  media_current_time_mark = video.currentTime;
  previous_block = $('p.read').last().parents('.block');
  next_block = $('p.unread').first().parents('.block');
}




// APPLICATION CHANGE
function applicationChange() {
  if ($('.application').hasClass('text-editor')) { 
    $('.mac-os .files-row .file.text-editor').addClass('show selected');

    title_scroll.text(text_editor_title);
    
    function skip() {
      if (!$('.scroll-container').hasClass('completed')) { 
        button.className = 'fast-forward-automated-text forward white outline icon';
        $('.application > .header .content-controls').append(button.cloneNode());
      }
    }
    skip();

    function credits() {
      if ($('.scroll-container').hasClass('completed')) { 
        media = $('.media.credits');

        if (!media.hasClass('watched')) {
          button.className = 'credits';
          button.innerHTML = "Credits";
          $('.application > .header .content-controls').append(button.cloneNode(true));
        }
      }
    }
    credits();
    
    function search() {
      if ($('.scroll-container').hasClass('completed')) { 
        button.className = 'search white icon';
        $('.application > .header .content-controls').append(button.cloneNode());
      }
    }
    search(); 

    button.className = 'share white icon';
    $('.application > .header .content-controls').append(button.cloneNode());
    
    automatedScrollAdjustment();
  }

  if ($('.application').hasClass('video-player')) {
    media = $('.primary-container .media.visible');
    video = media.find('video');
    mediaVariableAssignments();
    
    media.removeClass('video-player');
    primary_container.append(media);
    heightFromWidthRatio(media, '.scroll-container', '0.563278');
    setTimeout(function() {
      heightFromWidthRatio(application, '.scroll-container', '0.563278');
      primaryColor(thumbnail, top_bar_children, '0.6');
    }, 600);
    setTimeout(function() {
      function fileChange() {
        classRetriever(media, '0');
        newly_selected_desktop_file = '.mac-os .files-row .file.' + class_retrieved;
        $(newly_selected_desktop_file).addClass('show selected');
      }
      fileChange();
      mac_os.addClass('dim');
      imageBlur(thumbnail, content_controls, blur, 'image-tag'); 
      imageBlurReposition(thumbnail, content_controls, blur, 'image-tag');
      $(window).on('resize', function() {
        heightFromWidthRatio(application, '.scroll-container', '0.563278');
        heightFromWidthRatio(media, '.scroll-container', '0.563278');
      });
    }, 800);
    setTimeout(function() {
      heightFromWidthRatio(application, '.scroll-container', '0.563278');
      heightFromWidthRatio(media, '.scroll-container', '0.563278');
    }, 1100); 
  }
  
  if ($('.application').hasClass('quick-look')) {
    $('.mac-os .files-row .file.quick-look').addClass('show selected');

    title_scroll.text(quick_look_title);

    button.className = 'confirm'; 
    button.innerHTML = "Confirm";  
    $('.application > .header .content-controls').append(button.cloneNode(true));

    button.className = 'cancel';
    button.innerHTML = "Cancel";
    $('.application > .header .content-controls').append(button.cloneNode(true));

    image.className = 'poster';
    image.src = poster;
    primary_container.prepend(image);

    function actions() {
      $('.quick-look .content-controls .confirm').click(function() {
        function windowLink() {
          var window_link = 'instagram://camera';
          if (mobile && android) {
            window_link = 'https://www.instagram.com/_u/acolorblue';
          }
          window.location.href = window_link;
        }
        windowLink();

        applicationRemove();
        application.addClass('text-editor');
        applicationChange();
      });

      $('.quick-look .content-controls .cancel').click(function() {
        applicationRemove();
        application.addClass('text-editor');
        applicationChange();
      });
    }
    actions();

    setTimeout(function() {
      titleOverflow('.application.quick-look .title', 'application.quick-look .title-scroll');
    }, 1000);
  }

  if ($('.application').hasClass('world-clock')) {
    $('.mac-os .files-row .file.world-clock').addClass('show selected');

    title_scroll.text(world_clock_title);

    link.className = 'sources';
    link.href = "https://github.com/acolorblue/worldclock/tree/master/Africa";
    link.innerHTML = "Sources";
    $('.application > .header .content-controls').append(link);

    button.className = 'exit';
    button.innerHTML = "Exit";
    $('.application > .header .content-controls').append(button);

    primary_container.prepend($('.timezones'));
    indicatorsContainer();

    function actions() {
      computerImageZoom('.computer .world-clock .timezones clock .border');
      
      function exit() {
        $('.world-clock .content-controls .exit').click(function() {
          window.clearInterval(indicators_interval);
          applicationRemove();
          application.addClass('text-editor');
          applicationChange();
          automatedScrollAdjustment();
        });
      }
      exit();
    }
    actions();
  }
}




// CALL REMAINDER MAC OS FUNCTIONS
function callRemainderMacOsFunctions() {
  deviceSpecificationsOnMacOS();
  menuBarClock();
  imageBlur('.mac-os', '.mac-os > .menu-bar', '.mac-os > .menu-bar > .blur-container .blur', 'background-image');
  imageBlur('.mac-os', '.application', '.application > .blur', 'background-image');
}
