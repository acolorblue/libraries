// MUTATE SCRIPT LINK
// "https://acolorblue.co/libraries/Code/Javascript/mutate.js";




// GLOBAL VARIABLES
var fast_forward,
    current_paragraph,
    next_block_class,
    next_block_number,
    next_paragraph,
    next_block_paragraphs,
    next_block_paragraphs_class,
    first_block_interval, 
    second_block_interval,
    third_block_interval,
    fourth_block_interval,
    fifth_block_interval,
    sixth_block_interval,
    seventh_block_interval,
    eighth_block_interval,
    ninth_block_interval,
    tenth_block_interval,
    eleventh_block_interval;




// AUTOMATED TEXT
function automatedText(selector, timeBetweenText, exclude, timeBeforeStart, breakWord, breakTime) {
  fast_forward = false;

  if (selector == null || selector.trim() == '') {
    return;
  }
    
  timeBetweenText = (timeBetweenText == null ? 0 : timeBetweenText);
  timeBeforeStart = (timeBeforeStart == null ? 0 : timeBeforeStart);
  let textInfo = {
    selector: selector,
    timeBetweenText: timeBetweenText,
    exclude: exclude,
    timeBeforeStart, timeBeforeStart
  }
  
  if (breakWord != null) {
    textInfo['breakWord'] = breakWord;
    textInfo['breakTime'] = (breakTime == null ? 0 : breakTime);
  }
  
  setTimeout(function() {
    automaticText(textInfo);
  }, textInfo.timeBeforeStart);

  function automaticText(objTextInfo) {
    let $lines = $(objTextInfo.selector),
        lineContents = new Array(), 
        lineCount = $lines.length; 
 
    var skip = 0; 
   
    for (var i = 0; i < lineCount; i++) {  
      lineContents[i] = $($lines[i]).text(); 
      $($lines[i]).text('');
    }
    typeLine();

    function typeLine(idx) { 
      idx == null && (idx = 0);
      var element = $lines[idx];
      var content = lineContents[idx];

      if (typeof content == "undefined") {
        let elClassSkip = $('.fast-forward-automated-text');
        let lengthClassSkip = elClassSkip.length;

        while (lengthClassSkip--) {
//           $(elClassSkip[lengthClassSkip]).css('display', 'none');
        }
        return;
      }

      var booExclude = false;

      if (objTextInfo.exclude != null) {
        $(element).each(function(elementClass) {
          if (!booExclude) { 
            booExclude = objTextInfo.exclude.includes(elementClass); 
          }
        });

        booExclude = (booExclude || !booExclude && objTextInfo.exclude.includes(element.tagName.toLowerCase()));
      }

      var charIdx = 0; 

      if (booExclude || fast_forward) {
        $(element).text(content);
        typeLine(++idx);
      } 
      else {
        content = '' + content + '';
        element.appendChild(document.createTextNode(' '));
        $(element).removeClass('unread')
        element.className += ' reading';
        typeChar();
      }

      function typeChar() {
        var rand = (!fast_forward ? Math.round(Math.random() * 60) + 25 : 0);

        setTimeout(function () {
          var char = content[charIdx++],
              booBreak = false;

          if (objTextInfo.breakWord != null && char == objTextInfo.breakWord.charAt(0) && content.substring(charIdx - 1, charIdx + objTextInfo.breakWord.length - 1) == objTextInfo.breakWord) {
            content = content.replace(objTextInfo.breakWord, '');
            char = content[charIdx - 1];
            booBreak = true;
          }
          setTimeout(function () {
            if (typeof char !== "undefined") {
              element.appendChild(document.createTextNode(char));
              typeChar();
            }
            else { 
              $(element).removeClass('reading').addClass('read');
              
              setTimeout(function () {
                typeLine(++idx);
              }, (!fast_forward ? objTextInfo.timeBetweenText : 0));
            }
          }, (booBreak && !fast_forward ? objTextInfo.breakTime : 0))
        }, rand);
      }
    }
  }
  
  $('button.fast-forward-automated-text').click(function() {
    fast_forward = true;
  });
}




// AUTOMATED SCROLL
function automatedScrollAdjustment() {
  var parent_container_height = $('.parent-container').height();
 
  if (uncompleted) {
    var margin_top = 0;
    var current_scroll_container_height = $('.scroll-container').height();

    if (current_scroll_container_height <= parent_container_height) {
      $('.scroll-container').css('margin-top', margin_top);
    } 
    
    if (current_scroll_container_height >= parent_container_height) { 
      if (current_scroll_container_height >= parent_container_height * 1) {
        margin_top = -parent_container_height / 2;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 1.5) {
        margin_top = -parent_container_height;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 2) {
        margin_top = -parent_container_height * 1.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 2.5) {
        margin_top = -parent_container_height * 2;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 3) {
        margin_top = -parent_container_height * 2.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 3.5) {
        margin_top = -parent_container_height * 3;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 4) {
        margin_top = -parent_container_height * 3.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
    
      if (current_scroll_container_height >= parent_container_height * 4.5) {
        margin_top = -parent_container_height * 4;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 5) {
        margin_top = -parent_container_height * 4.5;
        $('.scroll-container').css('margin-top', margin_top);
      }

      if (current_scroll_container_height >= parent_container_height * 5.5) {
        margin_top = -parent_container_height * 5;
        $('.scroll-container').css('margin-top', margin_top);
      }
  
      if (current_scroll_container_height >= parent_container_height * 6) {
        margin_top = -parent_container_height * 5.5;
        $('.scroll-container').css('margin-top', margin_top);
      }

      if (current_scroll_container_height >= parent_container_height * 6.5) {
        margin_top = -parent_container_height * 6;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 7) {
        margin_top = -parent_container_height * 6.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 7.5) {
        margin_top = -parent_container_height * 7;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 8) {
        margin_top = -parent_container_height * 7.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 8.5) {
        margin_top = -parent_container_height * 8;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 9) {
        margin_top = -parent_container_height * 8.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 9.5) {
        margin_top = -parent_container_height * 9;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 10) {
        margin_top = -parent_container_height * 9.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 10.5) {
        margin_top = -parent_container_height * 10;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 11) {
        margin_top = -parent_container_height * 10.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 11.5) {
        margin_top = -parent_container_height * 11;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 12) {
        margin_top = -parent_container_height * 11.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 12.5) {
        margin_top = -parent_container_height * 12;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 13) {
        margin_top = -parent_container_height * 12.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 13.5) {
        margin_top = -parent_container_height * 13;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 14) {
        margin_top = -parent_container_height * 13.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 14.5) {
        margin_top = -parent_container_height * 14;
        $('.scroll-container').css('margin-top', margin_top);
      }

      if (current_scroll_container_height >= parent_container_height * 15) {
        margin_top = -parent_container_height * 14.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 15.5) {
        margin_top = -parent_container_height * 15;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 16) {
        margin_top = -parent_container_height * 15.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
    
      if (current_scroll_container_height >= parent_container_height * 16.5) {
        margin_top = -parent_container_height * 16;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 17) {
        margin_top = -parent_container_height * 16.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 17.5) {
        margin_top = -parent_container_height * 17;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 18) {
        margin_top = -parent_container_height * 17.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
    
      if (current_scroll_container_height >= parent_container_height * 18.5) {
        margin_top = -parent_container_height * 18;
        $('.scroll-container').css('margin-top', margin_top);
      }
  
      if (current_scroll_container_height >= parent_container_height * 19) {
        margin_top = -parent_container_height * 18.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 19.5) {
        margin_top = -parent_container_height * 19;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 20) {
        margin_top = -parent_container_height * 19.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 20.5) {
        margin_top = -parent_container_height * 20;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 21) {
        margin_top = -parent_container_height * 20.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 21.5) {
        margin_top = -parent_container_height * 21;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 22) {
        margin_top = -parent_container_height * 21.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 22.5) {
        margin_top = -parent_container_height * 22;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 23) {
        margin_top = -parent_container_height * 22.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 23.5) {
        margin_top = -parent_container_height * 23;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 24) {
        margin_top = -parent_container_height * 23.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 24.5) {
        margin_top = -parent_container_height * 24;
        $('.scroll-container').css('margin-top', margin_top);
      }
      
      if (current_scroll_container_height >= parent_container_height * 25) {
        margin_top = -parent_container_height * 24.5;
        $('.scroll-container').css('margin-top', margin_top);
      }
    }
  }
}




// CALL AUTOMATED SCROLL
function detectHeightChange() {
  $('.scroll-container').mutate('height', function(el, info) {
    automatedScrollAdjustment();
  });
}
detectHeightChange();
