// GLOBAL VARIABLES
var user_agent_length = navigator.userAgent.length,
    iphone = navigator.userAgent.match(/iPhone/i),
    ipad = navigator.userAgent.match(/iPad/i),
    ipod = navigator.userAgent.match(/iPod/i),
    ios = iphone || ipad || ipod,
    android = navigator.userAgent.match(/Android/i),
    blackberry = navigator.userAgent.match(/BlackBerry/i),
    webOS = navigator.userAgent.match(/webOS/i),
    mobile = ios || android || blackberry || webOS,
    computer = !mobile,
    macintosh = navigator.userAgent.match(/Macintosh/i) || navigator.userAgent.match(/Mac OS/i),
    windows = navigator.userAgent.match(/Windows/i) || navigator.userAgent.match(/Win64/i) || navigator.userAgent.match(/Win32/i),
    device_height_longer,
    portrait,
    device_width_longer,
    landscape,
    chrome = navigator.userAgent.match(/Chrome/i),
    index_of_chrome,
    firefox = navigator.userAgent.match(/Firefox/i),
    not_chrome_or_firefox = !chrome && !firefox,
    safari = navigator.userAgent.match(/Safari/i),
    safari = macintosh && safari && not_chrome_or_firefox || ios && safari && not_chrome_or_firefox,
    twitter_in_app = navigator.userAgent.match(/Twitter/i),
    instagram_in_app = navigator.userAgent.match(/Instagram/i),
    native_browser,
    twitter,
    instagram,
    tumblr,
    this_element,
    webpage_url,
    webpage_loader = $('body > .loader'),
    space = " ",
    period = ".",
    comma = ",",
    class_retrieved,
    add,
    subtract,
    multiply,
    divide,
    selected,
    selected_exists,
    unselected,
    random_color_generator_interval,
    hidden,
    media,
    media_height,
    media_class,
    covered,
    unwatched,
    clicked,
    watched,
    header,
    blur,
    content_controls,
    rewind,
    play_pause,
    forward,
    time_adjustments,
    reload,
    media_current_time_mark,
    paused,
    playing,
    content,
    thumbnail,
    buffering_indicator,
    video,
    video_class,
    source_link,
    line_break,
    window_open_link,
    email_address,
    subject;




// NODES
var html = $('html'),
    body = $('body'),
    div = document.createElement('div'),
    button = document.createElement('button'),
    image = document.createElement('img'),
    paragraph = document.createElement('p'),
    span = document.createElement('span'),
    input = document.createElement('input'),
    source = document.createElement('source'),
    source_link,
    link = document.createElement('a');
    link.target = '_blank';




// DEVICE INFO
function deviceInfo() {  
  function device() {
    // COMPUTER
    if (computer) {
      html.addClass('computer');
    
      if (macintosh) {
        html.addClass('macintosh');
      }
    
      if (windows) {
        html.addClass('windows');
      }
    }       
            
    // MOBILE       
    if (mobile) {
      html.addClass('mobile');

      if (ios) {
        html.addClass('ios');
        
        if (iphone) {
          html.addClass('iphone');
        }
        
        if (ipad) {
          html.addClass('ipad');
          $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1.0');
        }
        
        if (ipod) {
          html.addClass('ipod');
        }
      }

      if (android) {
        html.addClass('android');
      } 
    }
  }
  device();
  
  
  // BROWSER        
  function browser() {
    if (safari) {
      html.addClass('safari');
    }

    if (chrome) {
      index_of_chrome = navigator.userAgent.indexOf("Chrome");
      if (index_of_chrome < user_agent_length) {
        html.addClass('chrome');
      } 
    }

    if (firefox) {
      html.addClass('firefox');
    }
    
    
    function newUser() {
      if (firstImpression()) {
        html.addClass('new-user');
      }
    }
    newUser();
  }
  browser();
  
  
  // SCREEN VIEWPORT
  function screenViewport() {
    checkDeviceLength();
    $(window).on('resize orientationchange', function() {
      checkDeviceLength();
    });
    
    if (mobile) {
      checkMobileOrientation();
      $(window).on('resize orientationchange', function() {
        checkMobileOrientation();
      });
    }
  }
  screenViewport();
}
deviceInfo();




// CHECK DEVICE LENGTH
function checkDeviceLength() {
  device_width_longer = $('html').width() > $('html').height();
  if (device_width_longer) {
    html.removeClass('height-longer').addClass('width-longer');
  }
    
  device_height_longer = $('html').height() > $('html').width();
  if (device_height_longer) {
    html.removeClass('width-longer').addClass('height-longer');
  }
}




// MOBILE ORIENTATION
function checkMobileOrientation() {
  portrait = window.orientation == 0;
  if (portrait) {
    html.removeClass('landscape').addClass('portrait');
  }
  
  landscape = window.orientation == -90 || window.orientation == 90;
  if (landscape) {
    html.removeClass('portrait').addClass('landscape');
  }
}




// LOADER COVER
function removeLoaderCover() {
  setTimeout(function() {
    $('.loader').addClass('uncovered');
  }, 3500);

  setTimeout(function() {
    $('.loader').removeClass('covered uncovered');
  }, 4500);
}




// HIDE THEN REMOVE LOADER
function removeLoader(element, hideType, hideTimer, removeTimer) {
  setTimeout(function() {
    $(element).addClass(hideType);
  }, hideTimer);
  
  setTimeout(function() {
    $(element).remove();
  }, removeTimer);
}




// VIDEOS PRELOAD TO AUTO
function videosPreloadToAuto(element) {
  $(element).each(function() {
    if ($(this).attr('preload') != 'auto') {
      $(this).attr('preload', 'auto');
    }
  })
}




// ROTATE TO LANDSCAPE
function rotateToLandscape() {
  if ($('body .rotate-to-landscape').length == 0) {
    div.className = 'rotate-to-landscape ab-mid';
    body.prepend(div.cloneNode());
  }
}




// ROTATE TO PORTRAIT
function rotateToPortrait() {
  if ($('body .rotate-to-portrait').length == 0) {
    div.className = 'rotate-to-portrait ab-mid';
    body.prepend(div.cloneNode());
  }
}
 



// USER ACTIVE STATUS
function userActiveStatus() {    
  $(window).focus();
  
  $(window).on('blur', function() {
    if (mobile) {
      alert("The webpage was paused because you were offline.");
    }
  });
}




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
  }
  
     
  function noDrag() {
    if (no_drag) {
      $('.ui-draggable').css('width', '').css('top', '').css('right', '').css('bottom', '').css('left', '');          
            
      if (!$('.ui-draggable').hasClass('video-player')) {
        $('.ui-draggable').css('height', '');
      }
    }
  }
  
  setTimeout(function() {
    noDrag();
  }, 1000);
  
}




// DRAGGABLE ELEMENT
function draggableElement(element, handle) {
  $(element).draggable({
    handle: handle,
    cursor: 'move'
  });
} 




// DRAGGABLE ELEMENT WITH BLUR
function draggableElementWithBlur(container, element, handle, blur, source) {
  $(element).draggable({
    handle: handle,
    cursor: 'move', 
    drag: function(event, ui) {
      imageBlur(container, element, blur, source);
    }
  });
} 



         
// ADD CLASSES 'scale-down hide' TO ELEMENT 
function addScaleDownAndHide(targetElement) {
  $(targetElement).addClass('scale-down hide');
}




// CLASS RETRIEVER
function classRetriever(element, array) {
  class_retrieved = $(element).attr('class').split(' ')[array];
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




// HEIGHT FROM WIDTH RATIO
function heightFromWidthRatio(element, retrieve, ratio) {
  $(element).css('height', $(retrieve).width() * ratio);
}



 
// IMAGE BLUR
function imageBlur(container, element, blur, source) {
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




// IMAGE BLUR REPOSITION
function imageBlurReposition(container, element, blur, source) {
  $(container).mutate('width height', function(el, info) {
    imageBlur(container, element, blur, source);
  });
  
  $(element).mutate('width height', function(el, info) {
    imageBlur(container, element, blur, source);
  });
}




// COMPUTER IMAGE ZOOM
function computerImageZoom(element) {
  $(element)
    .on('mouseover', function() {
    this_element = $(this);

    this_element.addClass('zoom regular');
    setTimeout(function() {
      this_element.addClass('x2');
    }, 1);
  })

    .on('mouseleave', function() {
    this_element = $(this);

    this_element.removeClass('x2');
    setTimeout(function() {
      this_element.removeClass('regular');
    }, 200);
  })
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
    $('.random-color').css("background-color", "rgb(" + color + ", " +  color + ", " +  color + ")");
  }
}




// MONOTONE BREATHER
function monotoneBreather(element, waitTimer) {
  setTimeout(function() {
    $(element).addClass('monotone-breather')
  }, waitTimer);
}




// PRIMARY COLOR GENERATOR
function primaryColor(image, element, opacity) {
  image.primaryColor(function(color) {
    element.css('background-color', 'rgb(' + color + ', ' + opacity + ')');
  });
}




// MEDIA BUFFER
function bufferingIndicator(container) {
  image.className = 'buffering-indicator ab-mid hide';
  image.src = "https://raw.githubusercontent.com/acolorblue/acolorblue.github.io/gh-pages/Design%20Icons/Video%20Loader/1.gif";

  container.prepend(image);
}




// PAUSE ANY VIDEOS PLAYING
function pauseAnyVideosPlaying(parentContainer) {
  $(parentContainer + ' .media').each(function() {
    if (!$(this).find('video')[0].paused) {
      $(this).find('video')[0].pause(); 
      $(this).find('.play-pause').removeClass('pause').addClass('play');
    }
  });
}




// IMAGE SLIDER
function imageSlider(imageClass, imageLink, container, removalTimer) {
  if ($('img.' + imageClass).length == 0 && $('.scroll-container').is(':visible')) {
    image.className = 'image-slider ab-mid ' + imageClass;
    image.src = imageLink;
    $(container).append(image.cloneNode());

    setTimeout(function() { 
      $('img.' + imageClass).addClass('show');
    }, 500);  

    setTimeout(function() { 
      $('img.' + imageClass).removeClass('show');
    }, removalTimer);
  }
}




// KEYBOARD OUT
function keyboardOut() {
  if (mobile) {
    $('input, textarea, [contenteditable=true]').focus(function(){  
      html.addClass('keyboard-out');    
    });

    $('input, textarea, [contenteditable=true]').blur( function(){  
      html.removeClass('keyboard-out');  
    });
  }
}
keyboardOut();




// SEARCH
function search(inputBar, viewpointContainer, text, media) {
  $(inputBar).keyup(function() {
    var entered_value = $(this).val(),
        entered_value_regexp = new RegExp(entered_value, "gi"),
        no_value = entered_value == "",
        text_original;   

    $(viewpointContainer).addClass('searching');
    $(text).each(function() { 
      text_original = $(this).text();

      if (!text_original.match(entered_value_regexp)) {
        $(this).addClass('hide');
      }

      if (text_original.match(entered_value_regexp)) {
        $(this).removeClass('hide');
      }

      if (no_value) {
        $(text, media).removeClass('hide');
      }
    });

    $(media).each(function() {
      if (entered_value.length > 0) {
        $(this).addClass('hide');
      }

      if (no_value) {
        $(this).removeClass('hide');
      }
    });
  })
}




// SHARE ON SOCIAL MEDIA
function shareOnSocialMedia(buttons) {
  $(buttons).click(function() {
    twitter = $(this).hasClass('twitter');
    instagram = $(this).hasClass('instagram');
    tumblr = $(this).hasClass('tumblr');
    
    if (twitter) {
      line_break = '%0A';
      window_open_link = 'https://twitter.com/intent/tweet?source=webclient&text=' + webpage_url;
      window.open(window_open_link);
    }

    if (tumblr) {
      window_open_link = 'https://www.tumblr.com/widgets/share/tool?posttype=link' + '&canonicalUrl=' + webpage_url;
      window.open(window_open_link);
    }
  })
}
