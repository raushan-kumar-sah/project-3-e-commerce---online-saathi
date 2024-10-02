$(".user1 ul li a").click(function(){
    $(".user1 ul li a").removeClass("active");
    $(this).addClass("active");
    $(".common").removeClass("visible");
    $("." + $(this).attr("data")).addClass("visible");
});
$(".open").click(function(){
    $(".side").addClass("active");
});
$(".close").click(function(){
    $(".side").removeClass("active");
});