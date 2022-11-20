window.addEventListener("scroll", function(e) {
    /* for scroll monitoring. Css variable will be using by tag body.
    change css variable inside the js file and give it a value that will be monitored by js.
    So this --scrollTop will be dynamicall changed by js*/

    /* += means that we will add styles to those we already have
    And they will work great together, because whe we add our GSAP we automatically change styles to gsap styles
    so if we want our styles to be correctly shown we must add +=  */

    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});

// GSAP PLUGIN how to use. We should register (?) them.
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    // classes from HTML, divs that contain body of site that we want to scroll smoother
    wrapper: ".wrapper",
    content: ".content"
});

/* For adding correct parameters to animation*/