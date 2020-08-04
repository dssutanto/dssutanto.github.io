
// $(document).ready(function() {
//     $('#issue-1').click(function() {
//         $(this).addClass('active-issue');
//         $('#contents-1').removeClass('inactive-content');
//         $('#contents-1').addClass('active-content');
//         // $('#contents-1').slideToggle();
//     });

//     $('#issue-2').click(function() {
//         $(this).addClass('active-issue');
//         $('#contents-2').removeClass('inactive-content');
//         $('#contents-2').addClass('active-content');
//         // $('#contents-2').slideToggle();
//     });

//     $('#issue-3').click(function() {
//         $(this).addClass('active-issue');
//         $('#contents-3').removeClass('inactive-content');
//         $('#contents-3').addClass('active-content');
//         // $('#contents-3').slideToggle();
//     });

//     $(document).mouseup(function (e) {
//         var no1 = $('#issue-1');
//         var no2 = $('#issue-2');
//         var no3 = $('#issue-3');

//         // if the target of the click isn't the container nor a descendant of the container
//         if (!no1.is(e.target) && no1.has(e.target).length === 0) {
//             no1.removeClass('active-issue');
//             $('#contents-1').addClass('inactive-content');
//             $('#contents-1').removeClass('active-content');
//         }

//         if (!no2.is(e.target) && no2.has(e.target).length === 0) {
//             no2.removeClass('active-issue');
//             $('#contents-2').addClass('inactive-content');
//             $('#contents-2').removeClass('active-content');
//         }

//         if (!no3.is(e.target) && no3.has(e.target).length === 0) {
//             no3.removeClass('active-issue');
//             $('#contents-3').addClass('inactive-content');
//             $('#contents-3').removeClass('active-content');
//         }
//     });
// });


$(document).ready(function () {
    // $('.nav-button').onmouseover = function() {
    //     var menuItem = $(this).attr('rel');
    // }

    $("#editions").slick({
        infinite: false,
        slidesToShow: 3,
        dots: false,
        asNavFor: '#contents',
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        rtl: true,
        swipeToSlide: true
    });

    $("#contents").slick({
        infinite: false,
        slidesToShow: 1,
        arrows: false,
        asNavFor: '#editions',
        fade: true,
        dots: false
    });
});