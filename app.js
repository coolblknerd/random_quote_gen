function colorChanger() {
  var colors = ['#b2d7e0', '#a5aeco', '#AE97B7', '#395045', '#44DF87'];

  var color = Math.floor(Math.random() * colors.length);

  return colors[color];
}

var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote";

$(document).ready(function() {
  $('i').click(function(event) {
    event.preventDefault();
    var quoteContent = encodeURI($('h3#quote-content').text());
    var quoteAuthor = encodeURI($('div#quote-author').text());
    window.open('https://twitter.com/intent/tweet?text=' + quoteContent + '- ' + quoteAuthor + "&hashtags=quote&via=madblkman", 'twitterwindow');
  });
  $('#getQuote').on('click', function() {
    $('body').css('background-color', colorChanger());
    $.ajax({
      dataType: "jsonp",
      jsonpCallback: "parseQuote",
      url: url,
      success: function(data) {
        $('#quote-content').text(data.quoteText);
        $('#quote-author').text(data.quoteAuthor);
      }
    });
  });
});
