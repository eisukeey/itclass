function slideSwitch() {
    var $active = $('#slideshow img.active');

    if ($active.length == 0) $active = $('#slideshow img:last');
//↑条件分岐
    var $next = $active.next().length ? $active.next() :
        $('#slideshow img:first');

    $active.addClass('last-active');

    $next.css({
            opacity: 0.0
        })
        .addClass('active')
        .animate({
            opacity: 1.0
        }, 1000, function () {
            $active.removeClass('active last-active');
        });
}

$(function () {
    setInterval("slideSwitch()", 3000);
});
