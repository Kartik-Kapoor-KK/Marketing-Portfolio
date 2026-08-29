document.addEventListener("DOMContentLoaded", function () {

    const currentPath = window.location.pathname;

    const isCaseStudy =
        currentPath.includes("/case-studies/");

    const prefix = isCaseStudy ? "../" : "";


    /*
     * Shared Header
     */

    const header = document.querySelector(".site-header");

    if (header) {

        header.innerHTML = `
            <div class="nav-container">

                <a href="${prefix}index.html" class="brand">

                    <img
                        src="${prefix}assets/kartik-kapoor.jpg"
                        alt="Kartik Kapoor"
                        class="brand-photo"
                    >

                    <div class="brand-text">

                        <strong>
                            Kartik Kapoor
                        </strong>

                        <span>
                            B2B Technology Marketing
                        </span>

                    </div>

                </a>


                <nav class="main-nav">

                    <a href="${prefix}work.html">
                        Work
                    </a>

                    <a href="${prefix}archive.html">
                        Archive
                    </a>

                    <a href="${prefix}experience.html">
                        Experience
                    </a>

                    <a href="${prefix}about.html">
                        About
                    </a>

                    <a
                        href="${prefix}assets/Kartik-Kapoor-Resume.pdf"
                        target="_blank"
                        class="nav-link-accent"
                    >
                        Resume ↗
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kartik-kapoor-kk/"
                        target="_blank"
                        class="nav-link-accent"
                    >
                        LinkedIn ↗
                    </a>

                </nav>


                <button
                    class="mobile-menu-button"
                    aria-label="Open Menu"
                    aria-expanded="false"
                >
                    ☰
                </button>

            </div>
        `;

    }


    /*
     * Mobile Navigation
     */

    const mobileButton =
        document.querySelector(".mobile-menu-button");

    const navigation =
        document.querySelector(".main-nav");


    if (mobileButton && navigation) {

        mobileButton.addEventListener("click", function () {

            const isOpen =
                navigation.classList.toggle("mobile-open");

            mobileButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        navigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    navigation.classList.remove(
                        "mobile-open"
                    );

                    mobileButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }


    /*
     * Reveal Animation
     */

    const revealElements =
        document.querySelectorAll(
            ".work-preview, .archive-preview, .video-card, .publication-card, .asset-card, .timeline-item"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add(
                "is-visible"
            );

        });

    }

});
