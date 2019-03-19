/*
 * Navbar functions and effects
 *
 */

//
// DROPDOWN
//
$(".dropdown-toggle").click((e) => {
    const dropdown = $(e.target).parent();
    const dmenu = dropdown.children(".dropdown-menu");
    
    dmenu.finish().slideToggle("fast", dropdown_callback);
    e.preventDefault();
});

$(window).click((e) => {
    if(!$(e.target).is(".dropdown-toggle")){
        $(".dropdown-menu").finish().slideUp(dropdown_callback);
    }
});

// Make sure we have background after opening dropdown
function dropdown_callback(){
    if($(this).parents("#navbar").length === 1){
        $("#navbar").toggleClass("expanded", $(this).is(":visible"));
        console.log($(this).is(":visible"))
    }
}

//
// NAVBAR TOGGLER
//
$(".navbar-toggler").click((e) => {
    const menu = $($(e.target).attr("data-toggle"));
    
    menu.slideToggle(() => { 
        // Make sure we have background after opening menu     
        if(menu.parents("#navbar").length == 1){
            $("#navbar").toggleClass("expanded", menu.is(":visible"));
        }
    });
});
