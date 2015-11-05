/*
    Show latest tweet
*/
jQuery(function($) {
    $(".show-tweets").tweet({
        username: "SolX2010",
        join_text: "auto",
        count: 1,
        loading_text: "loading tweet...",
        template: "{time} {text}"
    });
});

$(function(){
/*
    Progress bar
*/
var percentage = $('.progress .bar').attr("data-percentage");
$('.progress .bar').animate({width: (percentage)+'%'}, 1000);

    $(window).scroll(function() {
        if ($(this).scrollTop() > 133){
            $(".close-header").removeClass('hide').addClass('block');
          } else {
            $(".close-header").removeClass('block').addClass("hide");
          }

        if($(this).scrollTop() === 0){
            $(".navbar").css('display', 'block');
        }
    });

            $(".close-header").click(function() {
                $(".navbar").toggle();
    });

    $("#donate-popo, #percentage-popo, #site_info-popo,#mc_embed_signup, #mdm-popo, #tweet-popo, #github-popo, #timer-popo, #sunglass-popo, #titanium-popo, #n-popo, #cheap-popo, #moving-popo, #cube-popo, #lite-popo").popover();
    $(".fork-me").hover(function(){
        $("#github-popo").popover('show');
    }, 
    function(){
        $("#github-popo").popover('hide');
    });
    $('.sunframe').click(function(){
        $(".carousel-control").css('display','none');
    });
    $('.sunframe').mouseleave(function(){
        $(".carousel-control").css('display','block');
    });

});
