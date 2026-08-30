document.addEventListener("DOMContentLoaded", function () {


    const menuButton =
        document.querySelector(".mobile-menu-button");

    const navigation =
        document.querySelector(".main-nav");


    /*
     * MOBILE NAVIGATION
     */

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


                menuButton.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close navigation"
                        : "Open navigation"
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

                        menuButton.setAttribute(
                            "aria-label",
                            "Open navigation"
                        );

                    }
                );

            });

    }


    /*
     * SUBTLE CONTENT REVEAL
     */

    const revealItems =
        document.querySelectorAll(
            ".work-preview-list article, .industry-line"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "is-visible"
                                );

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

                item.classList.add(
                    "reveal-item"
                );

                observer.observe(item);

            }
        );

    }

});
