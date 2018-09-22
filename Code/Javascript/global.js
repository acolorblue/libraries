// GLOBAL VARIABLES
var ios = navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i),
    android = navigator.userAgent.match(/Android/i),
    blackberry = navigator.userAgent.match(/BlackBerry/i),
    webOS = navigator.userAgent.match(/webOS/i),
    mobile = ios || android || blackberry || webOS,
    computer = !mobile,
    portrait = window.orientation == 0,
    landscape = window.orientation == -90 || window.orientation == 90,
    twitterInAppBrowser = navigator.userAgent.includes("Twitter"),
    instagramInAppBrowser = navigator.userAgent.includes("Instagram"),
    safari = navigator.userAgent.includes("Safari") && navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("Macintosh"),
    chrome = navigator.userAgent.includes("Chrome"),
    firefox = navigator.userAgent.includes("Firefox"),
    device_width_longer,
    device_height_longer,
    space = " ",
    period = ".",
    comma = ",",
    add,
    subtract,
    multiply,
    divide,
    random_color_generator_interval;




// FIRST IMPRESSION SCRIPT LINK
var first_impression_script = document.createElement('script');
    first_impression_script.type = 'text/javascript';
    first_impression_script.src = "https://acolorblue.co/libraries/Code/Javascript/first-impression.js?15";
$('body').append(first_impression_script);




// CHECK DEVICE LENGTH
function checkDeviceLength() {
  device_width_longer = $('body').width() > $('body').height();
  device_height_longer = $('body').height() > $('body').width();
}
checkDeviceLength();

 


// USER ACTIVE STATUS
function userActiveStatus() {    
  $(window).focus(); 
  
  $(window).on('blur', function() {
    if (mobile) {
      alert("The webpage was paused because you were offline.");
    }
  });
}




// DEVICE SPECIFICATIONS
function specifications() {  
  checkDeviceLength();
          
  if (device_width_longer) {
   $('body').addClass('width-longer');
  }        
   
  if (device_height_longer) {
   $('body').addClass('height-longer');
  }
          
  function device() {
  // COMPUTER
  if (computer) {
    $('body').addClass('computer');
  }       
            
  // MOBILE       
  if (mobile) {
    $('body').addClass('mobile');

    if (ios) {
      $('body').addClass(' ios');
    }

    if (android) {
      $('body').addClass(' android');
    }

    function portraitOrLandscape() {
      if (window.orientation == 0) {
        $('body').removeClass('landscape').addClass('portrait');
      }

      else if (window.orientation == -90 || 90) {
        $('body').removeClass('portrait').addClass('landscape');
      }
    }
    portraitOrLandscape();

    window.addEventListener('orientationchange', function() {
      portraitOrLandscape();
    });
    return;
  }
}
device();
             
          
  // BROWSER        
  function browser() {
    if (safari) {
      $('body').addClass(' safari');
    }

    if (chrome) {
      $('body').addClass(' chrome');
    }

    if (firefox) {
      $('body').addClass(' firefox');
    }
  }
  browser();
}
specifications();




// REPOSITION DRAGGABLE
function repositionDraggable() {
  var dragging = $('.ui-draggable').hasClass('ui-draggable-dragging'),
      first_drag = !$('.ui-draggable').hasClass('dragged'),
      been_dragged = $('.ui-draggable').hasClass('dragged'),
      no_drag = been_dragged && !dragging;

  if (dragging) {
//     if (first_drag) {
      $('.ui-draggable').addClass('dragged');
//     }      
//     return; 
  }
  
  if (no_drag) {
    $('.ui-draggable').css('width', '').css('top', '').css('right', '').css('bottom', '').css('left', '');          
            
    if (!$('.ui-draggable').hasClass('video-player')) {
      $('.ui-draggable').css('height', '');
    }
  }
}




// CLOCK
function clock() {
          
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
        $('.time.digital .text')[0].innerHTML = weekday_three_letters + space + full_numeric_time;
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
      
//       if (analog_exists) {
//         $('.menu-bar .time.analog .hour').css('transform', 'rotate(' + hour + 'deg)');
//         $('.time.analog .minute').css('transform', 'rotate(' + minute + 'deg)');
        
//         if ($('.time.analog .second').length > 0) {
//           $('.time.analog .second').css('transform', 'rotate(' + second + 'deg)');
//         }
//       } 
      
      
      if (analog_exists) {
        $('.menu-bar .time.analog .clock-border .hour').css('transform', 'rotate(' + hour + 'deg)');
        $('.menu-bar .time.analog .clock-border .minute').css('transform', 'rotate(' + minute + 'deg)');
      } 
    }
    analog();
  }
  placements();
}
}   





          
// ADD CLASSES 'scale-down hide' TO ELEMENT 
function addScaleDownAndHide(targetElement) {
  $(targetElement).addClass('scale-down hide');
}




// SUBTRACT OR ADD 1
function arithmetic(targetElement, integer) {
  add = parseInt($(targetElement).height()) + integer,
  subtract = parseInt($(targetElement).height()) - integer,
  multiply = parseInt($(targetElement).height()) * integer,
  divide =  parseInt($(targetElement).height()) / integer;
}




// MANUALLY CENTER ELEMENT
function manuallyPosition(main_container, element) {
  var main_container_width = $(main_container).width(),
      main_container_height = $(main_container).height(),
      element_width = $(element).width(),
      element_height = $(element).height();

  var position_top = (main_container_height - element_height) / 2;
  var position_left = (main_container_width - element_width) / 2;

  $(element).css('top', position_top);
  $(element).css('left', position_left);
}



 
// BACKGROUND IMAGE BLUR
function backgroundImageBlur(container, element, blur, source) {
  var container_image_source,
      ab_mid_centered = $(element).hasClass('ab-mid') && $(element).css('top') == $(element).css('bottom') && $(element).css('right') == $(element).css('left'),
      ab_mid_not_centered = $(element).hasClass('ab-mid') && $(element).css('top') != $(element).css('bottom') && $(element).css('right') != $(element).css('left'),
      container_width = $(container).width(),
      container_height = $(container).height(),
      blur_width = $(blur).width(),
      blur_height = $(blur).height(),
      element_top_position,
      element_right_position,
      element_bottom_position,
      element_left_position,
      draggable = $(element).hasClass('ui-draggable'),
      not_draggable = !draggable,
      blur_top_position,
      blur_left_position,
      blur_background_image = $(blur).css('background-image'),
      centered,
      not_centered,
      not_same_image = blur_background_image != container_image_source,
      not_same_size = blur_width != container_width || blur_height != container_height,
      not_same_position = '+' + blur_top_position != element_top_position  || '+' + blur_left_position != element_left_position;
  
  function retreiveAndDuplicateImage() {
    if (source == 'background-image') {
      container_image_source = $(container).css('background-image');
    }

    if (source == 'image-tag') {
      container_image_source = $(container).prop('src');
    }
    
    if (not_same_image) {
      if (source == 'background-image') {
        $(blur).css('background-image', container_image_source);
      }

      if (source == 'image-tag') {
        $(blur).css('background-image', "url(" + container_image_source + ")");
      }
    }
  }
  retreiveAndDuplicateImage();
  
  function duplicateSize() {
    if (not_same_size) {
      $(blur).css('width', container_width);
      $(blur).css('height', container_height);
    }
  }
  duplicateSize();
  
  function retreiveAndPositionImage() {
    if (ab_mid_centered) {
      element_top_position = $(element).css('margin-top');
      element_top_position = parseInt(element_top_position) + 'px';
      element_right_position = $(element).css('margin-right');
      element_right_position = parseInt(element_right_position) + 'px';
      element_bottom_position = $(element).css('margin-bottom');
      element_bottom_position = parseInt(element_bottom_position) + 'px';
      element_left_position = $(element).css('margin-left');
      element_left_position = parseInt(element_left_position) + 'px';
    }
    
    else if (ab_mid_not_centered) {
      element_top_position = $(element).css('top');
      element_top_position = parseInt(element_top_position) + 'px';
      element_right_position = $(element).css('right');
      element_right_position = parseInt(element_right_position) + 'px';
      element_bottom_position = $(element).css('bottom');
      element_bottom_position = parseInt(element_bottom_position) + 'px';
      element_left_position = $(element).css('left');
      element_left_position = parseInt(element_left_position) + 'px';
    }

    if (not_same_position) {
      blur_top_position = '-' + element_top_position;
      blur_left_position = '-' + element_left_position;

      $(blur).css('top', blur_top_position);
      $(blur).css('left', blur_left_position);
    }
  }
  retreiveAndPositionImage();
}
          
          
          

// TITLE OVERFLOW 
function titleOverflow(title, titleScroll) {
  var already_has_overflow = $(titleScroll).width() > $(title).width() &&  $(titleScroll).hasClass('overflow'),
      remove_overflow = $(titleScroll).width() <= $(title).width() && $(titleScroll).hasClass('overflow'),
      add_overflow = $(titleScroll).width() > $(title).width();
  
  
  if (already_has_overflow) {
    return;
  }
  
  if (remove_overflow) {
    $(titleScroll)[1].remove();
    $(titleScroll).removeClass('overflow');
  }
  
  if (add_overflow) {
    $(titleScroll).clone().appendTo($(title));
    $(titleScroll).addClass('overflow');
  }
} 




// RANDOM COLOR GENERATOR
function randomColorGeneratorContainer() {
  random_color_generator_interval = setInterval(randomColorGenerator, 400);
  function randomColorGenerator() {
    var color = Math.floor((Math.random() * 220) + 1);
    console.log(color);
    $('.random-color').css("background-color", "rgb(" + color + ", " +  color + ", " +  color + ")");
  }
}
