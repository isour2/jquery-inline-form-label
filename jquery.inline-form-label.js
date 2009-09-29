/*
* jQuery Inline Form Label
*
* TODO simplify and refactor
* TODO review design
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/mit-license.php
*
* Copyright (c) 2008-09 Christian Hellsten
*
*/
(function($) {
  $.fn.inlineLabel = function() {
    // Attach focus and blur handlers to each matching element
    return this.each(function() {
      var el = $(this);
      var label = el.prev('label');
      var form = el.parent('form');

      // Mark matching input elements so we can find them later
      el.addClass('inline-label-input');

      // Make sure default values are cleared before submit
      form.submit(function() {
        form.children('.inline-label-input').each(function(i) {
          var el = $(this);
          var label = el.prev('label');
          if(el.val() === label.text()) {
            el.attr('value', '');
          }
        });
      });

      // Make sure label is hidden
      label.hide();

      // Set the input field's value to the label's text
      el.attr('value', label.text());

      el.focus(function(){
        var el = $(this);
        var label = el.prev('label');

        el.addClass('has-focus');

        if(el.val() === label.text()) {
          el.attr('value', '');
        }
        return true;
      });
      
      el.blur(function(){
        var el = $(this);
        var label = el.prev('label');

        el.removeClass('has-focus');

        if(el.val() == "" && el.val() != label.text()) {
          el.attr('value', label.text());
        }
        return true;
      });
    });
  }
})(jQuery)


