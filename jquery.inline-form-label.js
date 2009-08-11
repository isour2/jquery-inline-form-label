/*
* jQuery Inline Form Label
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/mit-license.php
*
* Copyright (c) 2008-09 Christian Hellsten
*
*/
(function($) {
  $.fn.inlineLabel = function() {
    return this.each(function() {
      var el = $(this);
      var label = el.prev('label');

      // Make sure label is hidden
      label.hide();
      // Set the input field's value to the label's text
      el.attr('value', label.text());

      el.focus(function(){
        var el = $(this);
        var label = el.prev('label');

        if(el.val() === label.text()) {
          el.attr('value', '');
        }
        return true;
      });
      
      el.blur(function(){
        var el = $(this);
        var label = el.prev('label');

        if(el.val() == "" && el.val() != label.text()) {
          el.attr('value', label.text());
        }
        return true;
      });
    });
  }
})(jQuery)


