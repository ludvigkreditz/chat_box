// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery
//= require semantic-ui  

import "@hotwired/turbo-rails"
import "controllers"

scroll_botton = function() {
  if ($('#messages').length > 0) {
    $('messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

$(document).on('turbo:load', function() {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  scroll_bottom();
})
import "channels"
