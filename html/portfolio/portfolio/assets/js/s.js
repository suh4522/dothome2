var filter = function () {
        return {
            activeFilterID: null,
            show: function (a) {
                $(".pageWrapper").mCustomScrollbar("disable"), scrollbarDisabled = !0, document.getElementsByClassName("pageWrapper")[0].addEventListener("wheel", function () {
                    scrollbarDisabled && (filter.toggle($(".secondLevel.active")), scrollbarDisabled = !1)
                }), a.css("display", "block"), TweenLite.to(a, .5, {
                    className: "+=active",
                    onComplete: function () {}
                })
            },
            toggle: function (a) {
                var b = $(".innerContent");
                if (a.hasClass("active")) TweenLite.to(a, .5, {
                    className: "-=active",
                    onComplete: function () {
                        a.css("display", "none"), $(".pageWrapper").mCustomScrollbar("update"), scrollbarDisabled = !1
                    }
                }), TweenLite.to(b, .5, {
                    className: "-=filtersVisible"
                });
                else {
                    var c = $(".secondLevel.active");
                    c.length ? TweenLite.to(c, .5, {
                        className: "-=active",
                        onComplete: function () {
                            c.css("display", "none"), filter.show(a)
                        }
                    }) : (filter.show(a), TweenLite.to(b, .5, {
                        className: "+=filtersVisible"
                    }))
                }
            },
            results: function (a) {
                var b = $(a).attr("id"),
                    c = $(".workProject"),
                    d = $(".workProject." + b);
                $(".filters ul li.active").removeClass("active", 0), $(a).parent().addClass("active", 0), TweenLite.to(c, .5, {
                    opacity: 0,
                    onComplete: function () {
                        c.removeClass("visible", 0), "allClients" === b || "allServices" === b ? (c.addClass("visible", 0), TweenLite.to(c, .5, {
                            opacity: 1,
                            onComplete: function () {
                                scroll.refreshColors(), $(".pageWrapper").mCustomScrollbar("scrollTo", "top", {
                                    scrollInertia: globalObj.transition.med
                                })
                            }
                        })) : (d.addClass("visible", 0), TweenLite.to(d, .5, {
                            opacity: 1,
                            onComplete: function () {
                                scroll.refreshColors(), $(".pageWrapper").mCustomScrollbar("scrollTo", "top", {
                                    scrollInertia: globalObj.transition.med
                                })
                            }
                        }))
                    }
                })
            },
            setup: function () {
                var a = $(".firstLevel[data-target=#client-filters] .activeFilter").text(),
                    b = $(".firstLevel[data-target=#service-filters] .activeFilter").text();
                $("body").on("click", ".firstLevel", function (a) {
                    a.stopPropagation();
                    var b = $(this).attr("data-target");
                    filter.toggle($(b))
                }), $(window).on("click", function (a) {
                    $(".secondLevel").hasClass("active") && filter.toggle($(".secondLevel.active"))
                }), $("body").on("click", ".filters ul li span", function (c, d) {
                    firstScroll = !1, activeFilter = $(this);
                    var e = activeFilter.text(),
                        f = activeFilter.closest(".secondLevel"),
                        g = f.attr("id");
                    filter.results(activeFilter), d || filter.toggle(f), filter.activeFilterID = $(this).attr("id"), "client-filters" === g ? ($(".firstLevel[data-target=#client-filters] .activeFilter").text(e), $(".firstLevel[data-target=#service-filters] .activeFilter").text(b)) : ($(".firstLevel[data-target=#service-filters] .activeFilter").text(e), $(".firstLevel[data-target=#client-filters] .activeFilter").text(a))
                })
            }
        }
    }(),
    globalObj = function () {
        return {
            currentPage: $(".asyncContent").attr("data-page"),
            targetPage: "",
            previousPage: "",
            cameFromHome: !1,
            transition: {
                micro: 100,
                mini: 300,
                short: 500,
                med: 1e3,
                big: 2e3
            },
            pageOffset: 0,
            layout: {
                mobile: !0,
                tablet: !1,
                desktop: !1,
                win: $(window),
                updateViewport: function () {
                    this.screenW = this.win.width(), this.screenH = this.win.height(), this.wideScreen = this.screenW / this.screenH >= 1.6;
                    var a = $("html").css("font-family");
                    a.indexOf("desktop") > -1 ? (this.mobile = !1, this.tablet = !1, this.desktop = !0) : a.indexOf("tablet") > -1 ? (this.mobile = !1, this.tablet = !0, this.desktop = !1) : (this.mobile = !0, this.tablet = !1, this.desktop = !1)
                },
                getScrollbarWidth: function () {
                    var a = document.createElement("div");
                    a.className = "scrollbar-measure", document.body.appendChild(a);
                    var b = a.offsetWidth - a.clientWidth;
                    return document.body.removeChild(a), b
                },
                init: function () {
                    this.scrollbarWidth = this.getScrollbarWidth(), this.updateViewport()
                }
            }
        }
    }(),
    menu = function (a) {
        return {
            toggleMobile: function () {
                var a = $(".navContent"),
                    b = $(".closeButton");
                a.hasClass("active") ? (TweenLite.to(a, .5, {
                    className: "-=active"
                }), b.css("display", "block"), "workDetailsPage" === globalObj.currentPage && TweenLite.to(b, .3, {
                    opacity: 1
                })) : (TweenLite.to(a, .5, {
                    className: "+=active"
                }), "workDetailsPage" === globalObj.currentPage && TweenLite.to(b, .3, {
                    opacity: 0,
                    onComplete: function () {
                        b.css("display", "none")
                    }
                }))
            },
            setupMobile: function () {
                $(".menuButton").off("click").on("click", function () {
                    menu.toggleMobile()
                })
            },
            setActiveLink: function (a) {
                if ($(".mainNav li").removeClass("active", 0), a) a.parents(".navContent").length && !a.hasClass("siteLogo") && a.parent().addClass("active", 0);
                else if ("workDetailsPage" === globalObj.currentPage) globalObj.cameFromHome || $(".mainNav li:first-child").addClass("active", 0);
                else switch (globalObj.currentPage) {
                    case "workPage":
                        $(".mainNav li:first-child").addClass("active", 0);
                        break;
                    case "aboutPage":
                        $(".mainNav li:nth-child(2)").addClass("active", 0);
                        break;
                    case "contactPage":
                        $(".mainNav li:nth-child(3)").addClass("active", 0)
                }
            }
        }
    }(),
    scroll = function () {
        return {
            firstScroll: !0,
            scrollBarCallbacks: {},
            workProjects: [],
            workProjectsCount: 0,
            workProjectsHeights: [],
            workProjectsStartOffsets: [],
            workProjectsEndOffsets: [],
            scrollbarInit: function () {
                $(".pageWrapper").mCustomScrollbar({
                    theme: "minimal-dark",
                    scrollInertia: 750,
                    mouseWheel: {
                        scrollAmount: 300
                    },
                    callbacks: scroll.scrollBarCallbacks,
                    advanced: {
                        autoUpdateTimeout: 1,
                        updateOnContentResize: !0
                    }
                })
            },
            refreshColors: function () {
                var a;
                for (scroll.workProjects = $(".workProject.visible"), scroll.workProjectsCount = scroll.workProjects.length, a = 0; a < scroll.workProjectsCount; a += 1) scroll.workProjectsHeights[a] = $(scroll.workProjects[a]).outerHeight(), scroll.workProjectsStartOffsets[a] = $(scroll.workProjects[a]).position().top, scroll.workProjectsEndOffsets[a] = scroll.workProjectsStartOffsets[a] + scroll.workProjectsHeights[a]
            },
            setupColors: function () {
                scroll.workProjects = $(".workProject.visible"), scroll.workProjectsCount = scroll.workProjects.length;
                var a, b = $(".workList"),
                    c = b.offset().left,
                    d = b.offset().left + b.width();
                scroll.refreshColors(), $(document).on("mousemove", function (a) {
                    mouseX = a.pageX, mouseY = a.pageY
                }), scroll.scrollBarCallbacks = {
                    onInit: function () {},
                    whileScrolling: function () {
                        for (scroll.firstScroll && "contactPage" !== globalObj.previousPage ? globalObj.pageOffset = this.mcs.top - 100 : globalObj.pageOffset = this.mcs.top, realMouseY = mouseY + -1 * globalObj.pageOffset, a = 0; a < scroll.workProjectsCount; a += 1) realMouseY >= scroll.workProjectsStartOffsets[a] && realMouseY <= scroll.workProjectsEndOffsets[a] && mouseX >= c && mouseX <= d && (workPage.colorToggle($(scroll.workProjects[a]).find(".wdLink")), workPage.descHide($(".workDesc.active")), workPage.descShow($(scroll.workProjects[a])))
                    }
                }
            },
            setupGrow: function () {
                var a, b = [],
                    c = [],
                    d = [],
                    e = 0,
                    f = [];
                a = $(".pageContent").find(".growImg"), contentOffset = $(".innerContent").offset().top;
                var g = a.length,
                    h = 0,
                    i = 0,
                    j = [],
                    k = [],
                    l = [],
                    m = [],
                    n = $(".pageContent").find(".pageVideo"),
                    o = n.length,
                    p = [],
                    q = [],
                    r = [],
                    s = [],
                    t = $(".closeButton"),
                    u = t.attr("data-color"),
                    v = $(".growImg.finale"),
                    w = $(v).outerHeight(),
                    x = $(v).offset().top - contentOffset + globalObj.layout.screenH,
                    y = x + w + globalObj.layout.screenH,
                    z = !1;
                for (h = 0; h < g; h += 1) b[h] = h === g - 1 ? $(a[h]).outerHeight() - 200 : $(a[h]).outerHeight(), c[h] = $(a[h]).offset().top - contentOffset, d[h] = c[h] + b[h], j[h] = 0, k[h] = 100 / b[h];
                for (i = 0; i < o; i += 1) $(n[i]).find("video").attr("loop", "").removeAttr("controls"), p[i] = $(n[i]).outerHeight(), q[i] = $(n[i]).offset().top - contentOffset, r[i] = q[i] + p[i] + globalObj.layout.screenH, s[i] = !1;
                scroll.scrollBarCallbacks = {
                    onInit: function () {
                        e = -1 * this.mcs.top + globalObj.layout.screenH, f[0] = e - c[0], l[0] = f[0] * k[0], m[0] = j[0] + l[0], e > c[0] && e < d[0] ? ($(".pageContent:first .growImg:first .before, .pageContent.clone .growImg:first .before").css({
                            "-webkit-transform": "translateX(-" + m[0] + "%)",
                            "-moz-transform": "translateX(-" + m[0] + "%)",
                            "-ms-transform": "translateX(-" + m[0] + "%)",
                            "-o-transform": "translateX(-" + m[0] + "%)",
                            transform: "translateX(-" + m[0] + "%)"
                        }), $(".pageContent:first .growImg:first .after, .pageContent.clone .growImg:first .after").css({
                            "-webkit-transform": "translateX(" + m[0] + "%)",
                            "-moz-transform": "translateX(" + m[0] + "%)",
                            "-ms-transform": "translateX(" + m[0] + "%)",
                            "-o-transform": "translateX(" + m[0] + "%)",
                            transform: "translateX(" + m[0] + "%)"
                        })) : e < c[0] ? ($(".pageContent:first .growImg:first .before, .pageContent.clone .growImg:first .before").css({
                            "-webkit-transform": "translateX(0%)",
                            "-moz-transform": "translateX(0%)",
                            "-ms-transform": "translateX(0%)",
                            "-o-transform": "translateX(0%)",
                            transform: "translateX(0%)"
                        }), $(".pageContent:first .growImg:first .after, .pageContent.clone .growImg:first .after").css({
                            "-webkit-transform": "translateX(0%)",
                            "-moz-transform": "translateX(0%)",
                            "-ms-transform": "translateX(0%)",
                            "-o-transform": "translateX(0%)",
                            transform: "translateX(0%)"
                        })) : e >= d[0] && ($(".pageContent:first .growImg:first .before, .pageContent.clone .growImg:first .before").css({
                            "-webkit-transform": "translateX(-100%)",
                            "-moz-transform": "translateX(-100%)",
                            "-ms-transform": "translateX(-100%)",
                            "-o-transform": "translateX(-100%)",
                            transform: "translateX(-100%)"
                        }), $(".pageContent:first .growImg:first .after, .pageContent.clone .growImg:first .after").css({
                            "-webkit-transform": "translateX(100%)",
                            "-moz-transform": "translateX(100%)",
                            "-ms-transform": "translateX(100%)",
                            "-o-transform": "translateX(100%)",
                            transform: "translateX(100%)"
                        }))
                    },
                    onUpdate: function () {
                        for (h = 0; h < g; h += 1) b[h] = h === g - 1 ? $(a[h]).outerHeight() - 200 : $(a[h]).outerHeight(), c[h] = $(a[h]).offset().top - contentOffset, d[h] = c[h] + b[h], j[h] = 0, k[h] = 100 / b[h]
                    },
                    whileScrolling: function () {
                        for (e = -1 * this.mcs.top + globalObj.layout.screenH, h = 0; h < g; h += 1) f[h] = e - c[h], l[h] = f[h] * k[h], m[h] = j[h] + l[h], e > c[h] && e < d[h] ? ($(a[h]).find(".before").css({
                            "-webkit-transform": "translateX(-" + m[h] + "%)",
                            "-moz-transform": "translateX(-" + m[h] + "%)",
                            "-ms-transform": "translateX(-" + m[h] + "%)",
                            "-o-transform": "translateX(-" + m[h] + "%)",
                            transform: "translateX(-" + m[h] + "%)"
                        }), $(a[h]).find(".after").css({
                            "-webkit-transform": "translateX(" + m[h] + "%)",
                            "-moz-transform": "translateX(" + m[h] + "%)",
                            "-ms-transform": "translateX(" + m[h] + "%)",
                            "-o-transform": "translateX(" + m[h] + "%)",
                            transform: "translateX(" + m[h] + "%)"
                        })) : e < c[h] ? ($(a[h]).find(".before").css({
                            "-webkit-transform": "translateX(0%)",
                            "-moz-transform": "translateX(0%)",
                            "-ms-transform": "translateX(0%)",
                            "-o-transform": "translateX(0%)",
                            transform: "translateX(0%)"
                        }), $(a[h]).find(".after").css({
                            "-webkit-transform": "translateX(0%)",
                            "-moz-transform": "translateX(0%)",
                            "-ms-transform": "translateX(0%)",
                            "-o-transform": "translateX(0%)",
                            transform: "translateX(0%)"
                        })) : e >= d[h] && ($(a[h]).find(".before").css({
                            "-webkit-transform": "translateX(-100%)",
                            "-moz-transform": "translateX(-100%)",
                            "-ms-transform": "translateX(-100%)",
                            "-o-transform": "translateX(-100%)",
                            transform: "translateX(-100%)"
                        }), $(a[h]).find(".after").css({
                            "-webkit-transform": "translateX(100%)",
                            "-moz-transform": "translateX(100%)",
                            "-ms-transform": "translateX(100%)",
                            "-o-transform": "translateX(100%)",
                            transform: "translateX(100%)"
                        }));
                        for (i = 0; i < o; i += 1) e > q[i] && e < r[i] ? s[i] || ($(n[i]).find("video")[0].play(), s[i] = !0) : s[i] && ($(n[i]).find("video")[0].pause(), $(n[i]).find("video")[0].currentTime = 0, s[i] = !1);
                        e > x && e < y ? z || (t.css("backgroundColor", "#000000"), z = !0) : z && (t.css("backgroundColor", u), z = !1)
                    }
                }
            }
        }
    }(),
    workPage = function () {
        return {
            workOffsetBookmark: 0,
            activePosition: 0,
            colorToggle: function (a) {
                var b = a.attr("data-color"),
                    c = $(".workImg"),
                    d = c.length,
                    e = 0;
                if ($("html").hasClass("ie") || $("html").hasClass("edge")) {
                    var f = tinycolor(b),
                        g = f.toHsl();
                    g.s = 1;
                    var h = tinycolor(g),
                        i = h.toHexString(),
                        j = $(".multiplyFallback");
                    for (e = 0; e < d; e += 1) TweenLite.to($(j[e]), .5, {
                        backgroundColor: i
                    });
                    $(".multiply").each(function () {
                        TweenLite.to($(this), .5, {
                            floodColor: b
                        })
                    })
                } else
                    for (e = 0; e < d; e += 1) TweenLite.to(c[e], .5, {
                        backgroundColor: b
                    });
                TweenLite.to($(".pageContent, .mCustomScrollBox"), .5, {
                    backgroundColor: b
                })
            },
            descShow: function (a) {
                var b = a.find(".workDesc");
                b.css("display", "block"), TweenLite.to(b, .5, {
                    className: "+=active"
                })
            },
            descHide: function (a) {
                TweenLite.to(a, .5, {
                    className: "-=active",
                    onComplete: function () {
                        a.css("display", "none")
                    }
                })
            },
            hoverSetup: function () {
                $(".workProject a").mouseover(function () {
                    workPage.colorToggle($(this)), workPage.descHide($(".workDesc.active")), workPage.descShow($(this))
                })
            },
            resetFilters: function () {
                $(".workProject").addClass("visible", 0).css("opacity", "1"), $(".filters li.active").removeClass("active"), scroll.refreshColors(), $(".pageWrapper").mCustomScrollbar("scrollTo", "top", {
                    scrollInertia: 0
                })
            },
            resetPadding: function () {
                $(".innerContent").removeAttr("style");
                var a = (window.innerHeight - parseInt($(".innerContent").css("padding-top")) - $(".workProject").height() - 2 * parseInt($(".workProject a").css("margin-top"))) / 2,
                    b = a + parseInt($(".innerContent").css("padding-top"));
                $(".innerContent").css("padding-top", b + "px");
                var c = (window.innerHeight - parseInt($(".workProject a").outerHeight(!0))) / 2,
                    d = c;
                $(".innerContent").css("padding-bottom", d + "px")
            },
            prepareAnimation: function () {
                $(".pageWrapper").mCustomScrollbar("scrollTo", workPage.workOffsetBookmark, {
                    scrollInertia: 0
                }), "homePage" === globalObj.previousPage && $(".workIntroCircle").css("display", "none"), $(".workCircle").removeAttr("style")
            },
            goToAnimation: function (a) {
                var b = $(".workCircle");
                b.css("display", "block"), new TimelineLite({
                    onComplete: function () {
                        "function" == typeof a && a()
                    }
                }).set(b, {
                    opacity: 0,
                    x: "0%",
                    y: "0%",
                    scaleX: .029,
                    scaleY: .029
                }).to(b, .5, {
                    opacity: 1
                }).to(b, 1.5, {
                    x: "-31%",
                    y: "-17%",
                    scaleX: 1,
                    scaleY: 1,
                    ease: Power2.easeInOut
                }, "-=0.4")
            },
            introAnimation: function () {
                var a = $(".introCircle.workIntroCircle");
                new TimelineLite({
                    onComplete: function () {
                        $(".pageWrapper").removeAttr("style")
                    }
                }).set(a, {
                    x: "-50%",
                    y: "50%",
                    scaleX: 1,
                    scaleY: 1
                }).to($(".pageWrapper"), 1.5, {
                    clip: "rect(0px," + $(window).width() + "px," + $(window).height() + "px,0px)",
                    ease: Power2.easeInOut
                }).to(a, 1.5, {
                    scaleX: .025,
                    scaleY: .025,
                    ease: Power2.easeInOut
                }, 0).to(a, .5, {
                    y: "52%"
                }, "-=0.5").fromTo($(".pageContent .innerContent"), 1.5, {
                    top: "100px"
                }, {
                    top: 0
                }, {
                    ease: Power2.easeInOut
                }, 0)
            }
        }
    }();
! function () {
    "use strict";
    window.ProjectUi = function () {
        function a(a) {
            var b;
            return $(a).each(function () {
                $("body").append('<div class="szckr device-' + this + " visible-" + this + '"></div>'), $(".szckr.device-" + this + ".visible-" + this).is(":visible") && (b = String(this)), $("body .szckr.device-" + this + ".visible-" + this).remove()
            }), b
        }

        function b(a) {
            return $("[data-src-" + a + "]").each(function () {
                "IMG" == $(this).prop("tagName") ? $(this).attr("src", $(this).attr("data-src-" + a)) : $(this).css("background-image", "url('" + $(this).attr("data-src-" + a) + "')")
            }), a
        }

        function c(a, b) {
            for (var c = 0, d = b.length; c < d; c++)
                if (b[c] === a) return c;
            return null
        }

        function d() {
            if ($("html").hasClass("edge") || $("html").hasClass("ie"));
            else {
                var a = ["N                              ", "NNNN               NNNNNN        ", "NNNNNN             NNNNNNNNN     ", "NNNNNNNN           NNNNNNNNNN    ", "NNNNNNNNNN            NNNNNNNN   ", "NNNNNNNNNNNNN          NNNNNNN   ", "NNNNNNNNNNNNNNN        NNNNNNN   ", "NNNNNNN NNNNNNNNNN   NNNNNNNN    ", "NNNNNNN   NNNNNNNNNNNNNNNNNN     ", "NNNNNNN     NNNNNNNNNNNNNNN      ", "NNNNNNN         NNNNNNNN     ", "                              "].join("\n");
                console.log(a)
            }
        }
        var e, f = {},
            g = (window.location.pathname, window.location.href),
            h = (globalObj.currentPage, function (a, b) {
                if (Modernizr.touch || b.indexOf("?browser=mobi") >= 0) {
                    if (a >= 1024 && !(b.indexOf("?browser=full") >= 0)) return b.indexOf("?browser=mobi") >= 0 ? b = b.replace("?browser=mobi", "?browser=full") : b.indexOf("?") >= 0 ? b += "&browser=full" : b += "?browser=full", window.location.href = b, !0;
                    if (a < 1024 && b.indexOf("?browser=full") >= 0) return b = b.replace("?browser=full", "?browser=mobi"), window.location.href = b, !0
                } else if (a < 1024 && !(b.indexOf("?browser=mobi") >= 0)) return b.indexOf("?browser=full") >= 0 ? b = b.replace("?browser=full", "?browser=mobi") : b.indexOf("?") >= 0 ? b += "&browser=mobi" : b += "?browser=mobi", window.location.href = b, !0;
                return !1
            }),
            i = function (a) {
                var b = a.indexOf("?browser=");
                return b >= 0 ? a.substring(b, a.length) : ""
            },
            j = $("#preloader"),
            k = $(".pageWrapper"),
            l = !0,
            m = !0,
            n = !1,
            o = 0,
            p = !1,
            q = !1,
            r = !1,
            s = function (a) {
                TweenLite.to(j, .5, {
                    opacity: 0,
                    onComplete: function () {
                        j.css("display", "none"), globalObj.layout.desktop && j.css({
                            clip: "auto",
                            "background-color": "#000000"
                        }), "function" == typeof a && a(globalObj.currentPage)
                    }
                })
            },
            t = function (a) {
                var b = .1 * globalObj.layout.screenW,
                    c = .9 * globalObj.layout.screenW,
                    d = globalObj.layout.screenH - b,
                    e = b;
                a.css("clip", "rect(" + b + "px," + c + "px," + d + "px," + e + "px)")
            },
            u = function (a) {
                var b = globalObj.layout.screenW,
                    c = globalObj.layout.screenH;
                a.css("clip", "rect(0px," + b + "px," + c + "px,0px)")
            },
            v = function (a) {
                var b = .1 * globalObj.layout.screenW,
                    c = .9 * globalObj.layout.screenW,
                    d = globalObj.layout.screenH - b,
                    e = b;
                (new TimelineLite).to(a, 1.5, {
                    clip: "rect(" + b + "px," + c + "px," + d + "px," + e + "px)",
                    ease: Power2.easeInOut
                })
            },
            w = function () {
                var d, e = Array("xs", "sm", "md", "lg"),
                    f = a(e);
                f = b(f), $(window).resize(function () {
                    "lg" != f && (d && clearTimeout(d), d = setTimeout(function () {
                        var d = a(e);
                        d != f && c(d, e) > c(f, e) && (f = b(d))
                    }, 200))
                })
            },
            x = function (a) {
                globalObj.layout.desktop && t(j), j.css("display", "block"), TweenLite.to(j, .5, {
                    opacity: 1,
                    onComplete: function () {
                        "function" == typeof a && a()
                    }
                })
            },
            y = function (a) {
                var b = a.clientX,
                    c = a.clientY;
                $(".workDetailsCircle").css({
                    left: b + "px",
                    top: c + "px"
                })
            },
            z = function () {
                var a = $(".workProject"),
                    b = tinycolor($(a[0]).find(".workImg").css("background-color")),
                    c = b.toHsl();
                c.s = 1;
                var d = tinycolor(c);
                d.toHexString();
                if ($("html").hasClass("ie") || $("html").hasClass("edge")) $(".workImg").remove(), $(".multiply").each(function () {
                    $(this).attr("flood-color", b)
                });
                else {
                    $(".svgContainer").remove();
                    for (var e = 0, f = a.length; e < f; e++);
                }
            },
            A = function () {
                var a = $(".workProject");
                if ($("html").hasClass("ie") || $("html").hasClass("edge")) $(a).each(function () {
                    var a = tinycolor($(this).find(".handImage").css("background-color"));
                    $(this).find(".multiply").attr("flood-color", a)
                }), $(".handImage").hide();
                else {
                    $(".svgContainer").remove();
                    for (var b = 0, c = a.length; b < c; b++);
                }
            },
            B = function () {
                var a = $(".innerContent"),
                    b = $(".closeButton"),
                    c = $(".closeButton .menu-close"),
                    d = b.attr("data-color");
                new TimelineLite({
                    onComplete: function () {
                        k.removeAttr("style"), $(".pageContent.clone").remove()
                    }
                }).addLabel("unmask", 1).to(k, 1.5, {
                    clip: "rect(0px," + globalObj.layout.screenW + "px," + globalObj.layout.screenH + "px,0px)",
                    ease: Power1.easeInOut
                }).to(a, 1, {
                    y: 0,
                    ease: Power1.easeInOut,
                    onComplete: function () {
                        a.css({
                            "-webkit-transform": "none",
                            "-moz-transform": "none",
                            "-ms-transform": "none",
                            "-o-transform": "none",
                            transform: "none"
                        })
                    }
                }, "unmask").to($(".pageContent.clone"), 1, {
                    clip: "rect(0px," + globalObj.layout.screenW + "px,0px,0px)",
                    ease: Power1.easeInOut
                }, "unmask").to(b, 1.5, {
                    x: "-1.25%",
                    y: 0,
                    scaleX: .025,
                    scaleY: .025,
                    ease: Power1.easeInOut
                }, 0).to(c, .3, {
                    opacity: 1
                }, "end").to(b, .3, {
                    backgroundColor: d
                }, "end")
            },
            C = function () {
                Draggable.get("#drag-next") && Draggable.get("#drag-next").kill(), Draggable.create("#drag-next", {
                    type: "rotation",
                    bounds: {
                        minRotation: 0,
                        maxRotation: -90
                    },
                    trigger: "#drag-control",
                    onDragStart: function () {
                        r = !0
                    },
                    onDragEnd: function () {
                        r = !1
                    },
                    onDrag: function () {
                        canvas.draggableCanvas.rotate(this.rotation, !1)
                    }
                })
            },
            D = function (a) {
                var b = $(".nextCircle"),
                    c = new TimelineLite({
                        onComplete: function () {
                            "function" == typeof a && a()
                        }
                    });
                b.css("display", "block"), c.to(b, .5, {
                    opacity: 1
                }).to(b, 1.5, {
                    className: "+=animated",
                    ease: Power2.easeInOut
                }, "-=0.4")
            },
            E = function (a) {
                var b = $(".workDetailsCircle"),
                    c = new TimelineLite({
                        onComplete: function () {
                            "function" == typeof a && a()
                        }
                    });
                b.css("display", "block"), c.set(b, {
                    x: "-50%",
                    y: "-50%",
                    scaleX: .029,
                    scaleY: .029
                }).to(b, .5, {
                    opacity: 1
                }).to(b, 1.5, {
                    x: "-50%",
                    y: "-50%",
                    scaleX: 1,
                    scaleY: 1,
                    ease: Power2.easeInOut
                }, "-=0.4")
            },
            F = function (a) {
                var b = $(".closeButton"),
                    c = $(".closeButton .menu-close");
                new TimelineLite({
                    onComplete: function () {
                        "function" == typeof a && a()
                    }
                }).to(c, .1, {
                    opacity: 0
                }).to(b, .1, {
                    backgroundColor: "#000000"
                }, 0).to(b, 1.5, {
                    x: "-20%",
                    y: "-20%",
                    scaleX: 1,
                    scaleY: 1,
                    ease: Power2.easeInOut
                })
            },
            G = function () {
                var a = $(".closeButton"),
                    b = $(".closeButton .menu-close"),
                    c = ($("#drag-control"), $("#drag-control .pointer-up"), !1),
                    d = !1,
                    e = !1,
                    f = function () {
                        TweenLite.to(b, .27, {
                            ease: SteppedEase.config(7),
                            backgroundPosition: "0% 100%",
                            onStart: function () {
                                c = !0
                            },
                            onComplete: function () {
                                c = !1, e = !1, d && g()
                            }
                        })
                    },
                    g = function () {
                        TweenLite.to(b, .27, {
                            ease: SteppedEase.config(7),
                            backgroundPosition: "0% 0%",
                            onStart: function () {
                                c = !0
                            },
                            onComplete: function () {
                                c = !1, d = !1, e && f()
                            }
                        })
                    };
                a.on("mouseenter", function () {
                    c ? e = !0 : f()
                }).on("mouseleave", function () {
                    c ? d = !0 : g()
                }), $("body").on("click", "#drag-control", function () {
                    canvas.draggableCanvas.rotate(0, !0)
                })
            },
            H = function () {
                var a = !globalObj.layout.desktop;
                $(".aboutSlider").slick({
                    fade: !0,
                    speed: globalObj.transition.med,
                    slide: ".slide",
                    prevArrow: ".prevSlideLink",
                    nextArrow: ".nextSlideLink",
                    swipe: a
                })
            },
            I = function () {
                var a = $(".introCircle.aboutIntroCircle"),
                    b = new TimelineLite({
                        onComplete: function () {
                            k.removeAttr("style"), a.css("display", "none")
                        }
                    }),
                    c = {
                        x: "-50%",
                        y: "-50%",
                        scaleX: 1,
                        scaleY: 1,
                        ease: Power2.easeInOut
                    },
                    d = {
                        x: "-26%",
                        y: "45%",
                        scaleX: .085,
                        scaleY: .085,
                        ease: Power2.easeInOut
                    },
                    e = {
                        x: "20%",
                        y: "50%",
                        scaleX: 1,
                        scaleY: 1,
                        ease: Power2.easeInOut
                    },
                    f = {
                        x: "44.2%",
                        y: "45.1%",
                        scaleX: .085,
                        scaleY: .085,
                        ease: Power2.easeInOut
                    },
                    g = globalObj.layout.wideScreen ? e : c,
                    h = globalObj.layout.wideScreen ? f : d;
                b.set(a, g).to(k, 1.5, {
                    clip: "rect(0px," + globalObj.layout.screenW + "px," + globalObj.layout.screenH + "px,0px)",
                    ease: Power2.easeInOut
                }).to(a, 1.5, h, 0).to($(".aboutCanvas"), 1.5, {
                    className: "+=animated"
                }, 0).to($(".aboutBlock .textWrap"), 1.5, {
                    className: "+=animated",
                    ease: Power2.easeInOut
                }, 0).to(a, .5, {
                    opacity: 0
                })
            },
            J = function (a) {
                $(".aboutSlider").slick("slickGoTo", a)
            },
            K = function (a) {
                var b = $(".aboutCircle");
                b.css("display", "block"), new TimelineLite({
                    onComplete: function () {
                        "function" == typeof a && a()
                    }
                }).set(b, {
                    opacity: 0,
                    x: "0%",
                    y: "0%",
                    scaleX: .029,
                    scaleY: .029
                }).to(b, .5, {
                    opacity: 1
                }).to(b, 1.5, {
                    x: "-31%",
                    y: "-17%",
                    scaleX: 1,
                    scaleY: 1,
                    ease: Power2.easeInOut
                }, "-=0.4")
            },
            L = function () {
                var a = $(".introCircle.homeIntroCircle");
                $(".homeCanvas");
                new TimelineLite({
                    onComplete: function () {
                        k.removeAttr("style")
                    }
                }).set(a, {
                    scaleX: 1,
                    scaleY: 1,
                    y: "50%"
                }).to(k, 1.5, {
                    clip: "rect(0px," + globalObj.layout.screenW + "px," + globalObj.layout.screenH + "px,0px)",
                    ease: Power2.easeInOut
                }).to(a, 1.5, {
                    scaleX: .025,
                    scaleY: .025,
                    ease: Power2.easeInOut
                }, 0).to(a, .5, {
                    y: "52%"
                }, "-=0.5")
            },
            M = function (a) {
                setTimeout(function () {
                    $("div.circle").addClass("open"), $("div.circle").css("background-color", $(".pageContent").css("background-color"))
                }, 300), setTimeout(function () {
                    $("#mobileHomepage").fadeOut("normal"), "function" == typeof a && a()
                }, 1e3)
            },
            N = function (a) {
                var b = setInterval(function () {
                    if (!1 === canvas.homepageCanvas.animating) {
                        clearInterval(b);
                        var a = $(".homeCanvas"),
                            c = $(".workList"),
                            d = $("#home-slide-" + canvas.homepageCanvas.currentSlide),
                            e = $(".filters"),
                            f = $(".htwAnimCircle"),
                            g = d.clone();
                        g.appendTo(c);
                        var h = g.find(".workDesc"),
                            i = c.outerHeight(),
                            j = g.outerHeight(),
                            k = (globalObj.layout.screenH, g.position().top),
                            l = k + j / 2,
                            m = l / i * 100,
                            n = globalObj.layout.screenW / globalObj.layout.screenH,
                            o = n > 1.77 ? globalObj.layout.screenH : .88 * globalObj.layout.screenH,
                            p = 1.28 * o,
                            q = 1.1 * o,
                            r = 1.28 * q,
                            s = new TimelineLite({
                                onComplete: function () {
                                    a.css("display", "none"), canvas.homepageCanvas.destroy(), c.css("transform", ""), e.removeAttr("style"), $(".pageWrapper").mCustomScrollbar("scrollTo", "top", {
                                        scrollInertia: 4e3,
                                        scrollEasing: "easeInOut"
                                    }), setTimeout(function () {
                                        g.remove(), va.postloadAction($('a[data-target-page = "workPage"]'), null)
                                    }, 4100)
                                }
                            });
                        workPage.colorToggle(g.find(".wdLink")), $(".pageWrapper").mCustomScrollbar("scrollTo", 2e4, {
                            scrollInertia: 0
                        }), h.addClass("active").css("display", "block"), s.set(c, {
                            transformOrigin: "50% " + m + "%",
                            scaleX: 1.58,
                            scaleY: 1.58
                        }).set($(".workImg"), {
                            backgroundSize: p + "px " + o + "px"
                        }).set(h, {
                            transformOrigin: "0% 0%",
                            left: "65.3%",
                            top: "76.5%",
                            scaleX: .63,
                            scaleY: .63
                        }).set(e, {
                            zIndex: 10,
                            x: "100%"
                        }).set(f, {
                            display: "block"
                        }).addLabel("start", .5).to(a, .5, {
                            opacity: 0,
                            delay: .5
                        }).to(c, 1, {
                            scaleX: 1,
                            scaleY: 1,
                            ease: Power2.easeInOut
                        }, "start").to($(".workImg"), 1, {
                            backgroundSize: r + "px " + q + "px",
                            ease: Power2.easeInOut,
                            autoRound: !1
                        }, "start").to(h, 1, {
                            scaleX: 1,
                            scaleY: 1,
                            left: "80%",
                            top: "70%",
                            ease: Power2.easeInOut
                        }, "start").to(e, 1, {
                            x: "0%",
                            ease: Power2.easeInOut
                        }, "start").to(f, 1, {
                            y: "400px",
                            ease: Power2.easeInOut
                        }, "start")
                    }
                }, 250)
            },
            O = function (a) {
                var b = $(".homeCircle");
                b.css("display", "block"), new TimelineLite({
                    onComplete: function () {
                        "function" == typeof a && a()
                    }
                }).set(b, {
                    opacity: 0,
                    x: "0%",
                    y: "0%",
                    scaleX: .029,
                    scaleY: .029
                }).to(b, .5, {
                    opacity: 1
                }).to(b, 1.5, {
                    x: "-31%",
                    y: "-17%",
                    scaleX: 1,
                    scaleY: 1,
                    ease: Power2.easeInOut
                }, "-=0.4")
            },
            P = function () {
                var a = $("body"),
                    b = $(".closeButton2"),
                    c = $(".contactTrigger");
                a.hasClass("contactActive") ? (a.hasClass("ie10") || a.hasClass("ie11") ? a.removeClass("contactActive") : TweenLite.to(a, .5, {
                    className: "-=contactActive",
                    onComplete: function () {
                        var a = $(".contactTrigger").attr("href");
                        if (b.attr("href", a), c.attr("href", a), $(".mainNav li:nth-child(3)").removeClass("active"), $(".mainNav li.active").length) {
                            var d = $(".mainNav a[data-target-page=" + globalObj.currentPage + "]");
                            $(d).parent("li").addClass("active"), history.replaceState({
                                page: $(d).attr("href"),
                                dataload: globalObj.currentPage,
                                title: $(".asyncContent").attr("data-title")
                            }, $(".asyncContent").attr("data-title"), $(d).attr("href")), document.title = $(".asyncContent").attr("data-title")
                        } else history.replaceState({
                            page: "/",
                            dataload: globalObj.currentPage,
                            title: "north2 | Creative digital studio"
                        }, "north2 | Creative digital studio", "/"), document.title = "north2 | Creative digital studio", globalObj.currentPage = "homePage";
                        $("g[mask]").each(function () {
                            $(this).attr("mask", "url('" + window.location.pathname + "#" + $(this).attr("mask").split(/[#)]/)[1] + "')")
                        })
                    }
                }), c.parent().removeClass("active", 0), "homePage" == globalObj.currentPage && (canvas.homepageCanvas.generalPause = !1)) : (a.hasClass("ie10") || a.hasClass("ie11") ? a.addClass("contactActive") : TweenLite.to(a, .5, {
                    className: "+=contactActive",
                    onComplete: function () {
                        history.replaceState({
                            page: "contact.html",
                            dataload: "homePage",
                            title: "north2 | Contact"
                        }, "north2 | Contact", "contact.html"), document.title = "north2 | Contact", $(".mainNav li:nth-child(3)").addClass("active"), $("g[mask]").each(function () {
                            $(this).attr("mask", "url('" + window.location.pathname + "#" + $(this).attr("mask").split(/[#)]/)[1] + "')")
                        })
                    }
                }), "homePage" == globalObj.currentPage && (canvas.homepageCanvas.generalPause = !0))
            },
            Q = function () {
                $(".closeButton2, .contactTrigger").off("click").on("click", function (a) {
                    a.preventDefault(), q || (P(), q = !1)
                })
            },
            R = function () {
                var a = $(".closeButton2"),
                    b = $(".contactTrigger");
                if (m && "homePage" === globalObj.currentPage) a.attr("data-target-page", "homePage"), b.attr("data-target-page", "homePage"), a.attr("href", "/"), b.attr("href", "/");
                else {
                    if (a.attr("data-target-page", globalObj.currentPage), b.attr("data-target-page", globalObj.currentPage), "/" == document.location.pathname.substring(0, 1)) var c = document.location.pathname.substring(1);
                    c = c.substring(0, c.indexOf("?")), a.attr("href", c), b.attr("href", c)
                }
            },
            S = function () {
                var a = $(".introCircle.homeIntroCircle");
                new TimelineLite({
                    onComplete: function () {
                        k.removeAttr("style")
                    }
                }).set(a, {
                    scaleX: 1,
                    scaleY: 1,
                    y: "50%"
                }).to(k, 1.5, {
                    clip: "rect(0px," + globalObj.layout.screenW + "px," + globalObj.layout.screenH + "px,0px)",
                    ease: Power2.easeInOut
                }).to(a, 1.5, {
                    scaleX: .025,
                    scaleY: .025,
                    ease: Power2.easeInOut
                }, 0).to(a, .5, {
                    y: "52%"
                }, "-=0.5")
            },
            T = function () {
                if (globalObj.layout.desktop && (l || n)) {
                    canvas.homepageCanvas || canvas.loadHomepageImages();
                    var a = setInterval(function () {
                        canvas && canvas.homepageCanvas && canvas.homepageCanvas.loaded && (clearInterval(a), canvas.homepageCanvas.start(), $(".pageContent").hasClass("contactPage") && setTimeout(function () {
                            $(".contactTrigger").trigger("click")
                        }, 2e3), canvas.homepageCanvas.initAnimation(0))
                    }, 10);
                    $(".pageContent").hasClass("contactPage") && X()
                }
                globalObj.layout.desktop && $(".homeIntroCircle").css("display", "block"), U()
            },
            U = function () {
                globalObj.layout.desktop ? (z(), scroll.setupColors(), workPage.hoverSetup(), workPage.resetPadding(), l && "workDetailsPage" == globalObj.previousPage && $("#" + filter.activeFilterID).trigger("click", [!0])) : ($("#fullpage").length && $("#fullpage").fullpage({
                    afterRender: function () {
                        window.lozad().observe();
                        var a = document.getElementsByClassName("handImage")[1];
                        window.lozad().triggerLoad(a)
                    },
                    onLeave: function (a, b, c) {
                        var d = document.getElementsByClassName("handImage")[b];
                        window.lozad().triggerLoad(d)
                    }
                }), A())
            },
            V = function () {
                if (globalObj.layout.desktop) {
                    if ($("#clipthru").clipthru({
                            autoUpdate: !0,
                            autoUpdateInterval: 30
                        }), l || n) {
                        canvas.loadNextWorkImage();
                        var a = setInterval(function () {
                            canvas && canvas.draggableCanvas && canvas.draggableCanvas.loaded && (clearInterval(a), canvas.draggableCanvas.start())
                        }, 100);
                        u($(".pageContent.clone"))
                    }
                    scroll.setupGrow(), C()
                } else $(".svgContainer").remove()
            },
            W = function () {
                if (globalObj.layout.desktop) {
                    canvas.aboutCanvas || canvas.loadAboutImages();
                    var a = setInterval(function () {
                        canvas && canvas.aboutCanvas && canvas.aboutCanvas.loaded && !0 === allImagesLoaded && (clearInterval(a), canvas.aboutCanvas.start())
                    }, 100)
                } else if ($("html").hasClass("ie") || $("html").hasClass("edge")) {
                    var b;
                    $(".slide").each(function () {
                        b = tinycolor($(this).find(".slideBg").css("background-color")), $(this).find(".multiply").attr("flood-color", b)
                    }), $(".slideBg").hide()
                } else $(".svgContainer").remove()
            },
            X = function () {
                if (globalObj.layout.desktop && l && m) {
                    R();
                    var a = setInterval(function () {
                        canvas && canvas.homepageCanvas && canvas.homepageCanvas.loaded && !0 === allImagesLoaded && (clearInterval(a), canvas.homepageCanvas.start())
                    }, 10)
                }
            },
            Y = function () {
                switch (globalObj.layout.desktop ? l && (t(k), t(j), Q()) : menu.setupMobile(), globalObj.currentPage) {
                    case "homePage":
                        T();
                        break;
                    case "workPage":
                        U();
                        break;
                    case "workDetailsPage":
                        V();
                        break;
                    case "aboutPage":
                        W();
                        break;
                    case "contactPage":
                        X()
                }
                l && (l = !1)
            },
            Z = function () {
                $("html").addClass("homeHtml", 0), $(".pageContent").hasClass("contactPage") && $("html").addClass("contactHtml", 0), $(".pageContent").hasClass("contactPage") && ca(), _()
            },
            _ = function () {
                $("html").addClass("workHtml", 0)
            },
            aa = function () {
                $("html").addClass("workDetailsHtml", 0), globalObj.cameFromHome && ($("a.closeButton").attr("href", "/"), $("a.closeButton").attr("data-title", "north2 | Creative digital studio"), $("a.closeButton").attr("data-page", "/"), $("a.closeButton").attr("data-target-page", "homePage"))
            },
            ba = function () {
                $("html").addClass("aboutHtml", 0), $(".aboutSlider").hasClass("slick-slider") || H()
            },
            ca = function () {
                $(".pageContent").hasClass("contactPage") && $("html").addClass("contactHtml", 0)
            },
            da = function () {
                $("html").addClass("error404html", 0)
            },
            ea = function () {
                switch (globalObj.currentPage) {
                    case "homePage":
                        Z();
                        break;
                    case "workPage":
                        _();
                        break;
                    case "workDetailsPage":
                        aa();
                        break;
                    case "aboutPage":
                        ba();
                        break;
                    case "contactPage":
                        ca();
                        break;
                    case "error404page":
                        da()
                }
            },
            fa = function () {
                switch (globalObj.layout.desktop && ($(".startCircle").removeAttr("style").removeClass("animated", 0), "homePage" === globalObj.previousPage && "workPage" === globalObj.currentPage || $(".pageWrapper").mCustomScrollbar("destroy")), globalObj.previousPage) {
                    case "homePage":
                        $("html").removeClass("homeHtml", 0).removeClass("workHtml", 0).removeClass("contactHtml", 0), globalObj.layout.desktop ? ($(".introCircle.homeIntroCircle").removeAttr("style").removeClass("animated", 0).css("display", "none"), canvas.homepageCanvas && canvas.homepageCanvas.destroy()) : "function" == typeof $.fn.fullpage.destroy && "workPage" !== globalObj.targetPage && $.fn.fullpage.destroy("#fullpage");
                        break;
                    case "workPage":
                        $("html").removeClass("workHtml", 0), $(".workIntroCircle").removeAttr("style"), $(".homeCanvas").removeAttr("style"), globalObj.layout.desktop && workPage.resetFilters(), globalObj.layout.desktop || ($("div.circle").removeClass("open").removeAttr("style"), $("#mobileHomepage").removeAttr("style"), "homePage" === globalObj.targetPage ? $.fn.fullpage.silentMoveTo(1, 0) : "function" == typeof $.fn.fullpage.destroy && $.fn.fullpage.destroy("#fullpage"));
                        break;
                    case "workDetailsPage":
                        $("html").removeClass("workDetailsHtml", 0), $(".workDetailsCircle").removeClass("animated", 0);
                        break;
                    case "contactPage":
                        $("html").removeClass("contactHtml", 0), $("html").removeClass("workHtml", 0);
                        break;
                    case "aboutPage":
                        $("html").removeClass("aboutHtml", 0), globalObj.layout.desktop && canvas.aboutCanvas && canvas.aboutCanvas.destroy()
                }
            },
            ha = function () {
                $('meta[name="description"]').attr("content", $("[data-meta]").attr("data-description")), $('meta[name="keywords"]').attr("content", $("[data-meta]").attr("data-keywords"))
            },
            ia = function () {
                globalObj.layout.desktop && L()
            },
            ja = function () {
                globalObj.layout.desktop && workPage.introAnimation()
            },
            ka = function () {
                globalObj.layout.desktop && (B(), setTimeout(function () {
                    G()
                }, 2e3))
            },
            la = function () {
                globalObj.layout.desktop && I()
            },
            ma = function () {
                globalObj.layout.desktop && S()
            },
            na = function (a) {
                switch (a) {
                    case "homePage":
                        ia();
                        break;
                    case "workPage":
                        ja();
                        break;
                    case "workDetailsPage":
                        ka();
                        break;
                    case "aboutPage":
                        la();
                        break;
                    case "error404page":
                        ma()
                }
            },
            oa = function (a) {
                e = a.attr("href") + i(g), globalObj.targetPage = a.attr("data-target-page"), "homePage" === globalObj.currentPage && "workDetailsPage" === globalObj.targetPage ? globalObj.cameFromHome = !0 : "workPage" === globalObj.currentPage && "workDetailsPage" === globalObj.targetPage && (globalObj.cameFromHome = !1)
            },
            pa = function () {
                createjs.Ticker.reset()
            },
            qa = function (a) {
                if (globalObj.layout.desktop) pa(), $("body").hasClass("contactActive") ? (o = 500, P()) : o = 1, "homePage" === globalObj.currentPage && "workPage" === globalObj.targetPage ? setTimeout(function () {
                    $(".pageContent").attr("data-title", "Projects"), $(".pageContent").attr("data-page", "workPage"), canvas.homepageCanvas.generalPause = !0, N()
                }, o) : "workPage" === globalObj.currentPage && "homePage" === globalObj.targetPage ? setTimeout(function () {
                    $(".pageContent").attr("data-title", "north2 | Creative digital studio"), $(".pageContent").attr("data-page", "homePage"), globalObj.layout.desktop && ($("body").hasClass("contactActive") ? (o = 500, P(), setTimeout(function () {
                        u(k), O(a), v(k)
                    }, o)) : (u(k), O(a), v(k)))
                }, o) : setTimeout(function () {
                    switch (u(k), globalObj.targetPage) {
                        case "aboutPage":
                            K(a);
                            break;
                        case "workDetailsPage":
                            "workPage" === globalObj.currentPage ? E(a) : D(a);
                            break;
                        case "homePage":
                            O(a);
                            break;
                        case "workPage":
                            "workDetailsPage" === globalObj.currentPage ? (F(a), menu.setActiveLink()) : workPage.goToAnimation(a)
                    }
                    v(k)
                }, o);
                else if ("homePage" === globalObj.currentPage && "workPage" === globalObj.targetPage) {
                    var b = 0;
                    $(".navContent").hasClass("active") && (b = 500, menu.toggleMobile()), setTimeout(function () {
                        M(a)
                    }, b)
                } else a()
            },
            ra = function () {
                $(".introCircle.aboutIntroCircle").removeAttr("style").removeClass("animated", 0), $(".aboutCircle").removeAttr("style")
            },
            sa = function () {
                $(".homeCircle").removeAttr("style")
            },
            ta = function () {
                $(".workDetailsCircle").removeAttr("style")
            },
            ua = function () {
                switch (globalObj.targetPage) {
                    case "aboutPage":
                        ra();
                        break;
                    case "homePage":
                        sa();
                        break;
                    case "workPage":
                        workPage.prepareAnimation();
                        break;
                    case "workDetailsPage":
                        ta()
                }
            },
            va = {
                config: {
                    nav: "body",
                    loadTarget: ".asyncWrapper"
                },
                backListener: function () {
                    document.title;
                    globalObj.targetPage = $(".pageContent").data("page"), $(window).on("popstate", function (a) {
                        null === history.state || ($("body").append('<a class="backHandler" data-title="' + history.state.title + '" data-target-page="' + history.state.dataload + '" href="' + history.state.page + '" style="display: none;"></a>'), va.preloadAction($(".backHandler")), $(".backHandler").remove())
                    })
                },
                init: function (a) {
                    va.backListener(), $("body").on("click", "a[data-async]", function (a) {
                        if ("error404page" != globalObj.currentPage) {
                            a.preventDefault();
                            var b = $(this);
                            globalObj.layout.desktop && canvas.homepageCanvas && b.hasClass("nextCircle") && (canvas.homepageCanvas.generalPause = !0), q || b.hasClass("siteLogo") && "homePage" === globalObj.currentPage || (q = !0, b.hasClass("wdLink") && y(a), va.preloadAction(b))
                        }
                    })
                },
                preloadAction: function (a) {
                    n = !0, preloadImages = !0, imagesCount = 0, imagesLoadedCount = 0, allImagesLoaded = !1, preloaderHidden = !1, oa(a), !globalObj.layout.desktop && $(".navContent").hasClass("active") && menu.toggleMobile(), qa(function () {
                        va.loadContent(a)
                    })
                },
                loadContent: function (a) {
                    m = !1, e = a.attr("href"), "homePage" === globalObj.currentPage && "workPage" === globalObj.targetPage || x(), $.ajax({
                        url: e,
                        data: {
                            xhr: 1
                        },
                        method: "POST"
                    }).success(function (b) {
                        va.postloadAction(a, b)
                    }).error(function () {
                        location.href = "/404.html"
                    })
                },
                changeHistory: function (a) {
                    var b = a.data("title");
                    e = a.attr("href");
                    var c = {
                        page: e,
                        dataload: globalObj.targetPage,
                        title: b
                    };
                    a.hasClass("backHandler") || history.pushState(c, b, e), document.title = b
                },
                postloadAction: function (a, b) {
                    q = !1, g = window.location.href;
                    var c = h(globalObj.layout.screenW, a.attr("href"));
                    if (globalObj.previousPage = globalObj.currentPage, globalObj.currentPage = globalObj.targetPage, va.changeHistory(a), menu.setActiveLink(), ha(), $("html").hasClass("production")) {
                        var d = document.location.pathname + document.location.search + document.location.hash;
                        ga("send", "pageview", d)
                    }
                    if (fa(), ua(), "workPage" !== globalObj.previousPage || $(".pageContent").hasClass("contactPage") || "homePage" !== globalObj.currentPage ? "homePage" === globalObj.previousPage && "workPage" === globalObj.currentPage || (b = $(b).find(".asyncContent"), imagesCount = $(b).find("img").length, $(va.config.loadTarget).find(".asyncContent, .asyncContentPart").remove(), $(va.config.loadTarget).append(b)) : $(".canvasPic").length || (b = $(b).find(".asyncContentPart"), imagesCount = $(b).find("img").length, $(va.config.loadTarget).append(b)), Y(), ea(), w(), picturefill(), n = !1, "homePage" != globalObj.previousPage || "workPage" != globalObj.currentPage) var e = setInterval(function () {
                        if (allImagesLoaded || 0 === imagesCount) {
                            if (clearInterval(e), globalObj.layout.desktop && "workDetailsPage" !== globalObj.currentPage && "aboutPage" !== globalObj.currentPage ? scroll.scrollbarInit() : globalObj.layout.desktop && "workDetailsPage" === globalObj.currentPage ? (scroll.setupGrow(), scroll.scrollbarInit()) : $("html, body").scrollTop(0), globalObj.layout.desktop) {
                                if ("homePage" != globalObj.currentPage && "aboutPage" != globalObj.currentPage && "contactPage" != globalObj.currentPage) s(na);
                                else var a = setInterval(function () {
                                    canvas.loaded && (clearInterval(a), c || s(na))
                                }, 100);
                                "workPage" === globalObj.currentPage && "workDetailsPage" === globalObj.previousPage && $(".pageWrapper").mCustomScrollbar("scrollTo", globalObj.pageOffset, {
                                    scrollInertia: 1e3,
                                    scrollEasing: "easeInOut"
                                })
                            } else c || s(na);
                            allImagesLoaded = !0, preloaderHidden = !0
                        }
                    }, 100)
                }
            },
            wa = function () {
                imagesCount = $("img").length, w(), menu.setActiveLink(), filter.setup()
            },
            xa = {
                anim: null,
                set: function (a, b, c) {
                    if (c) {
                        var d = new Date;
                        d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
                        var e = "; expires=" + d.toGMTString()
                    } else var e = "";
                    document.cookie = a + "=" + b + e + "; path=/"
                },
                get: function (a) {
                    for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                        for (var e = c[d];
                            " " == e.charAt(0);) e = e.substring(1, e.length);
                        if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
                    }
                    return null
                },
                load: function () {
                    $.get("data.json", "", function (a) {
                        xa.anim = bodymovin.loadAnimation({
                            container: document.getElementById("cookieContainer"),
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: a
                        }), $("g[mask]").each(function () {
                            $(this).attr("mask", "url('" + window.location.pathname + "#" + $(this).attr("mask").split(/[#)]/)[1] + "')")
                        })
                    }, "json")
                },
                load2: function () {
                    $.get("data2.json", "", function (a) {
                        xa.anim = bodymovin.loadAnimation({
                            container: document.getElementById("cookieContainer2"),
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: a
                        }), $("g[mask]").each(function () {
                            $(this).attr("mask", "url('" + window.location.pathname + "#" + $(this).attr("mask").split(/[#)]/)[1] + "')")
                        })
                    }, "json")
                },
                show: function () {
                    $("#cookieContainer2").fadeOut(), xa.anim.playSegments([0, 30], !0);
                    var a = "Someone has Googled you recently. No one is more qualified. Flattery will go far tonight. You can keep a secret. You will be hungry again in one hour. Big journeys begin with a single step. I cannot help you, for I am just a cookie. Something wonderful is about to happen to you. Patience is your alley at the moment. Don�셳 repay a kindness, pass it on. Someone is watching you. Some fortune cookies contain no fortune. Your power is in your ability to decide. Some pursue happiness; you create it. Worry is a misuse of imagination. You are ready to take on the world. Every exit is an entrance to the new experience. Determination will get you through this. Golden investment opportunities are arising. The fortune you seek is in another cookie. You won�셳 know until you try. Error 404: Fortune not found. Shame on you for thinking a cookie is psychic.",
                        b = a.split(". "),
                        c = b[Math.floor(Math.random() * b.length)];
                    b.sort(function (a, b) {
                        return b.length - a.length
                    })[0];
                    $("svg image").remove(), $("#cookieContainer svg > g > g:last-child()").css("pointer-events", "none"), $("#cookieContainer svg > g > g:nth-child(9), #cookieContainer svg > g > g:nth-child(3), #cookieContainer svg > g > g:nth-child(4)").css("cursor", "pointer").on("click", function () {
                        xa.anim.playSegments([30, 120], !0), $("svg > g > g:last-child() > g > path").remove();
                        var a = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        a.setAttribute("font-family", "Cera-BlackItalic"), a.setAttribute("font-size", "10px"), a.innerHTML = c, $("svg > g > g:last-child() > g")[0].appendChild(a), $("#cookieContainer svg > g > g:nth-child(5), #cookieContainer svg > g > g:nth-child(8)").off("click").on("click", function () {
                            xa.anim.playSegments([180, 260], !0), setTimeout(function () {
                                $("#cookieContainer").fadeOut()
                            }, 3e3)
                        })
                    }), $("#cookieContainer svg > g > g:nth-child(5), #cookieContainer svg > g > g:nth-child(8)").css("cursor", "pointer").on("click", function () {
                        xa.anim.playSegments([30, 0], !0)
                    }), $("a[data-async]").on("click", function () {
                        $("#cookieContainer").fadeOut()
                    })
                },
                show2: function () {
                    $("html").hasClass("ie") || $("html").hasClass("edge") ? ($("#cookieContainer").fadeOut(), $("#cookieContainer2").fadeIn(), xa.anim.playSegments([59, 60], !0), $("#cookieContainer2 svg > g > g:nth-child(3), #cookieContainer2 svg > g > g:nth-child(4)").css("cursor", "pointer").on("click", function () {
                        $("#cookieContainer2").fadeOut()
                    })) : ($("#cookieContainer").fadeOut(), xa.anim.playSegments([0, 60], !0), $("#cookieContainer2 svg > g > g:nth-child(3), #cookieContainer2 svg > g > g:nth-child(4)").css("cursor", "pointer").on("click", function () {
                        xa.anim.playSegments([120, 200], !1), setTimeout(function () {
                            $("#cookieContainer2").fadeOut()
                        }, 3e3)
                    })), $("a[data-async]").on("click", function () {
                        $("#cookieContainer2").fadeOut()
                    })
                }
            },
            ya = function (a) {
                $.each(a, function (a, b) {
                    settings[a] = b
                }), d(), va.init(), globalObj.layout.init(), h(globalObj.layout.screenW, g), wa(), ea();
                var b = xa.get("north2Cookie");
                null != b || $("html").hasClass("ie") || !globalObj.layout.desktop || $("html").hasClass("edge") || "homePage" != globalObj.currentPage ? null == b && globalObj.layout.desktop ? (xa.load2(), xa.set("north2Cookie", "true", 28)) : ($("#cookieContainer").hide(), $("#cookieContainer2").hide()) : (xa.load(), xa.set("north2Cookie", "true", 28)), Y(), $(window).load(function () {
                    if (p = !0, allImagesLoaded = !0, globalObj.layout.desktop) {
                        if ("homePage" != globalObj.currentPage && "aboutPage" != globalObj.currentPage && "contactPage" != globalObj.currentPage) s(na);
                        else var a = setInterval(function () {
                            canvas.loaded && (clearInterval(a), s(na), null != b || $("html").hasClass("ie") || !globalObj.layout.desktop || $("html").hasClass("edge") || "homePage" != globalObj.currentPage ? null == b && globalObj.layout.desktop && setTimeout(function () {
                                xa.show2()
                            }, 2e3) : setTimeout(function () {
                                xa.show()
                            }, 2e3))
                        }, 100);
                        scroll.scrollbarInit()
                    } else s(na)
                }), globalObj.layout.win.on("resize", function () {
                    globalObj.layout.updateViewport(), h(globalObj.layout.screenW, g), Y()
                })
            };
        return f.init = ya, f.ajaxLoad = n, f.aboutGoToSlide = J, f.windowLoaded = function () {
            return p
        }, f.pageLoadEffects = function () {
            return na
        }, f.hidePreloader = function () {
            return s
        }, f
    }()
}();