document.addEventListener("DOMContentLoaded", function () {


    /*
     * MOBILE NAVIGATION
     */

    const menuButton =
        document.querySelector(".mobile-menu-button");

    const navigation =
        document.querySelector(".main-nav");


    if (menuButton && navigation) {

        menuButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    navigation.classList.toggle(
                        "mobile-open"
                    );


                menuButton.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );


        navigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation.classList.remove(
                            "mobile-open"
                        );

                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /*
     * SUBTLE SCROLL REVEAL
     */

    const revealItems =
        document.querySelectorAll(
            ".featured-work-item, .industry-line"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.08
                }
            );


        revealItems.forEach(
            function (item) {

                item.style.opacity =
                    "0";

                item.style.transform =
                    "translateY(15px)";

                item.style.transition =
                    "opacity 0.65s ease, transform 0.65s ease";

                observer.observe(item);

            }
        );

    }


});
