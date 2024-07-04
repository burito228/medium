(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    $(document).ready((function() {
        $(".autoplay").slick({
            slidesToShow: 6.49,
            slidesToScroll: 1,
            responsive: [ {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4.49,
                    slidesToScroll: 1
                }
            } ]
        });
    }));
    $(document).ready((function() {
        if ($(".page-main").length) {
            $("header").addClass("header__main");
            $(".header__menu").removeClass("header__menu_color");
            $(".header__logo").removeClass("header__logo_active");
            $(".header__img_black").addClass("active");
            $(".header__img_white").removeClass("active");
        } else {
            $("header").removeClass("header__main");
            $(".header__menu").addClass("header__menu_color");
            $(".header__logo").addClass("header__logo_active");
            $(".header__img_white").addClass("active");
            $(".header__img_black").removeClass("active");
        }
    }));
    window["FLS"] = true;
    isWebp();
})();