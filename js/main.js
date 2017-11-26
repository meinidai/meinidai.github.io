$(document).ready(function(){
    $(".item").hover(function(){
        $(this).children(".div_shade").slideToggle("slow")
    })
})