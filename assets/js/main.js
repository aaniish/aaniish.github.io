$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$(window).on('pageshow', function() {
    $('[data-toggle="tooltip"]').tooltip('hide')
});

$(".ball_tool_tip").hover(
    function() {
        const text = $("#tool_text");
        text.attr('style', 'width: 0%!important;position: relative;display: initial;')
    }, function() {
        const text = $("#tool_text");
        text.attr('style', 'width: 0%!important;position: relative;display: none;')
    }
)