$(document).ready(function() {
    $(".dropbtn").click(function() {

        $(".dropdown-content").slideToggle(1000);
    
        if ($(".bx").hasClass("bx-menu")) {
            $(".bx").removeClass("bx-menu").addClass("bx-x");
        } else if ($(".bx").hasClass("bx-x")) {
            $(".bx").removeClass("bx-x").addClass("bx-menu");
        }
    
    });
});

