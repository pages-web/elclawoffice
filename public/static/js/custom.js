function scrollTop() {
    setTimeout(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    }, 900);
};

function backImg(param) {
    var sm = $(param).attr('value');
    $('#content').css({
        'background-image': 'url(' + sm + ')',
        'background-size': 'cover',
        'min-height': '100vh'
    });
    $('body #content').removeClass('index');
}

function splitCounter() {
    if ($('.no-md')) {
        var s = $('.no-md').attr('class').split(' ');
        console.log('S: ',s);
        if (s[1] == 'col-md-12') {
            $('#dfe').attr('class', 'col-sm-1 col-md-12');
        }
    }
}

// the sameHeight functions makes all the selected elements of the same height
$.fn.sameHeight = function () {
    var selector = this;
    var heights = [];

    // Save the heights of every element into an array
    selector.each(function () {
        var height = $(this).height();
        heights.push(height);
    });

    // Get the biggest height
    var maxHeight = Math.max.apply(null, heights);
    // Show in the console to verify
    console.log(heights, maxHeight);

    // Set the maxHeight to every selected element
    selector.each(function () {
        $(this).height(maxHeight);
    });
};