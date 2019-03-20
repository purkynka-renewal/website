/*
 * articles.js
 *
 */

$(window).on("load", ()=>{
    
    // Add min-height to articles, because of the crazy stuff in html and css
    $("article", "#articles-container").each((i, el)=>{
        el = $(el);
        console.log($(".article-image", el).last(),$(".article-image", el).last().height())
        el.css("minHeight", ($(".article-image", el).last().height()+
            parseInt($(".article-image", el).last().css("border-top-width"))+
            parseInt($(".article-image", el).last().css("border-bottom-width"))+
            parseInt(el.css("padding-top"))+parseInt(el.css("padding-bottom")))+
            "px");
    });

})
