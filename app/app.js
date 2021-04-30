import * as MODEL from "../model/model.js";

function init(){
    $("nav a").click(function(e){
        let btnID = this.id;
        let contentID = btnID + "Content";

        if (btnID == "home") {

            $(".nav")
                .removeClass("black")
                .addClass("white");

            $(".logo").html(`<img src="assets/images/logo/logo-white.svg" alt="eventsy-logo">`);

            $(".hero")
                .removeClass("hero-image")
                .addClass("hero-image");

            $(".hero-content").html(`<p class="hero-title">Header goes here</p>
            <p class="hero-subtitle">Less important text goes here</p>
            <p class="hero-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Fugiat aliquid minus nemo sed est.</p>
            <a class="button" href="#">Read More</a>`);

        } else if(btnID != "home") {

            $(".nav")
                .removeClass("white")
                .addClass("black");

            $(".hero")
                .removeClass("hero-image");

            $(".logo").html(`<img src="assets/images/logo/logo-black.svg" alt="black travel-fly logo">`);

            $(".hero-content").html(``);
        }

        MODEL.getPageContent(contentID, addListeners);
    })
}

function addListeners() {
    $("#app a").click(function(e){
        let btnID = this.id;
        let contentID = btnID + "Content";

        console.log(this.id);

        if (btnID == "home") {

            $(".nav")
                .removeClass("black")
                .addClass("white");

            $(".logo").html(`<img src="assets/images/logo/logo-white.svg" alt="eventsy-logo">`);

            $(".hero")
                .removeClass("hero-image")
                .addClass("hero-image");

            $(".hero-content").html(`<p class="hero-title">Header goes here</p>
            <p class="hero-subtitle">Less important text goes here</p>
            <p class="hero-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Fugiat aliquid minus nemo sed est.</p>
            <a class="button" href="#">Read More</a>`);

        } else if(btnID != "home") {

            $(".nav")
                .removeClass("white")
                .addClass("black");

            $(".hero")
                .removeClass("hero-image");

            $(".logo").html(`<img src="assets/images/logo/logo-black.svg" alt="black travel-fly logo">`);

            $(".hero-content").html(``);
        }


        MODEL.getPageContent(contentID, addListeners);
    })

}

$(document).ready(function () {
    init();
    // MODEL.getPageContent("homeContent", addListeners);
})