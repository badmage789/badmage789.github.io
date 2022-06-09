var $portfolio;
var $masonry_block;
var $portfolio_selectors;
var $portfolio_selectors_li;
var $blog;
var hashfilter;

$(window).bind("load", function () {
    $('#preloader .pulse').removeClass("pulse");
    $("#loading").addClass("loading-start");
    $('#preloader').delay(500).fadeOut("fast", "swing", function () {
        $('body').css({
            'overflow': 'visible'
        });
    });
})

$(document).ready(function () {
    var conName = $("#controllerName").val().replace("ı", "i");
    var acName = $("#actionName").val().replace("ı", "i");
    var acId = $("#actionId").val();
    var links = $("#header-menu a[data-controller]");
    var homeState = false;
    if (conName == "home" && acName == "index") {
        homeState = true;
    }
    if (homeState == false) {
        jQuery.each(links, function (i, link) {
            var _link = $(link);

            var controllerArray = _link.attr("data-controller").split(',');
            var actionArray = _link.attr("data-action").split(',');
            var actionId = _link.attr("data-id");

            if (actionId != undefined) {
                if (controllerArray.indexOf(conName) != -1 && actionArray.indexOf(acName) != -1 && actionId == acId) {
                    _link.addClass("active");
                }
            } else if (controllerArray.indexOf(conName) != -1 && actionArray.indexOf(acName) != -1) {
                _link.addClass("active");
            }
        });
    } else {
        $("#header-menu a[data-custom='home']").addClass("active");
    }

    // Show Animated Counters
    animatecounters();

    /* ===================================
    counter number reset while scrolling
    ====================================== */

    $('.timer').appear();
    $(document.body).on('appear', '.timer', function (e) {
        // this code is executed for each appeared element
        if (!$(this).hasClass('appear')) {
            animatecounters();
            $(this).addClass('appear');
        }
    });

    /*==============================================================*/
    //Smooth Scroll - START CODE
    /*==============================================================*/
    jQuery('.inner-top').smoothScroll({
        speed: 900,
        offset: -68
    });
    /*==============================================================*/
    //Smooth Scroll - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Set Resize Header Menu - START CODE
    /*==============================================================*/
    SetResizeHeaderMenu();
    /*==============================================================*/
    //Set Resize Header Menu - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //For shopping cart- START CODE
    /*==============================================================*/
    var isMobile = false;
    var isiPhoneiPad = false;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = true;
    }
    if (!isMobile) {
        jQuery(".top-cart a.shopping-cart, .cart-content").hover(function () {
            jQuery(".cart-content").css('opacity', '1');
            jQuery(".cart-content").css('visibility', 'visible');
        }, function () {
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');
        });
    }
    if (isiPhoneiPad) {
        jQuery(".video-wrapper").css('display', 'none');
    }

    jQuery(".top-cart a.shopping-cart").click(function () {
        //$('.navbar-collapse').collapse('hide');

        if ($('.cart-content').css('visibility') == 'visible') {
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');
        }
        else {
            jQuery(".cart-content").css('opacity', '1');
            jQuery(".cart-content").css('visibility', 'visible');

        }
    });

    /*==============================================================*/
    //Shrink nav on scroll - START CODE
    /*==============================================================*/

    if ($(window).scrollTop() > 10) {
        $('nav').addClass('shrink-nav');
    } else {
        $('nav').removeClass('shrink-nav');
    }
    /*==============================================================*/
    //Shrink nav on scroll - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Set Parallax - START CODE
    /*==============================================================*/
    SetParallax();
    /*==============================================================*/
    //Set Parallax - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Sliders owlCarousel - START CODE
    /*==============================================================*/


    $("#owl-demo").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 5000,
        transitionStyle: "fade",
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-demo-small").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-demo-products").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-demo-background").owlCarousel({
        transitionStyle: "fade",
        autoPlay: 3000,
        slideSpeed: 100,
        singleItem: true,
        navigation: false,
        pagination: false,
        touchDrag: false,
        mouseDrag: false
    });
    $("#blog-slider-grid").owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#blog-slider").owlCarousel({
        navigation: false,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 2],
        itemsMobile: [700, 1]
    });
    $("#approach-slider").owlCarousel({
        navigation: false,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1]
    });
    $("#testimonial-slider").owlCarousel({
        navigation: false,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1]
    });
    $("#shop-products").owlCarousel({
        navigation: true,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1],
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-demo-brand").owlCarousel({
        navigation: true,
        items: 4,
        itemsDesktop: [1200, 4],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1],
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    /*==============================================================*/
    //Sliders owlCarousel - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Stop Closing magnificPopup on selected elements - START CODE
    /*==============================================================*/

    $(".owl-pagination > .owl-page").click(function (e) {
        if ($(e.target).is('.mfp-close'))
            return;
        return false;
    });
    $(".owl-buttons > .owl-prev").click(function (e) {
        if ($(e.target).is('.mfp-close'))
            return;
        return false;
    });
    $(".owl-buttons > .owl-next").click(function (e) {
        if ($(e.target).is('.mfp-close'))
            return;
        return false;
    });
    /*==============================================================*/
    //Stop Closing magnificPopup on selected elements - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //accordion  - START CODE
    /*==============================================================*/

    $('.collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
    });
    $('.collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
    });
    $('.nav.navbar-nav a.inner-link').click(function () {
        $(this).parents('ul.navbar-nav').find('a.inner-link').removeClass('active');
        $(this).addClass('active');
        if ($('.navbar-header .navbar-toggle').is(':visible'))
            $(this).parents('.navbar-collapse').collapse('hide');
    });
    $('.accordion-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    $('.accordion-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });
    $('.accordion-style3 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    $('.accordion-style3 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });
    /*==============================================================*/
    //accordion - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //toggles  - START CODE
    /*==============================================================*/

    $('toggles .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
    });
    $('toggles .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
    });
    $('.toggles-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    $('.toggles-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });
    /*==============================================================*/
    //toggles  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //google map - mouse scrolling wheel behavior - START CODE
    /*==============================================================*/
    // you want to enable the pointer events only on click;

    $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('#canvas1').on('click', function () {
        $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
    });
    // you want to disable pointer events when the mouse leave the canvas area;

    $("#map_canvas1").mouseleave(function () {
        $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });
    /*==============================================================*/
    //google map - mouse scrolling wheel behavior - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Search - START CODE
    /*==============================================================*/
    $("input.search-input").bind("keypress", function (event) {
        if (event.which == 13 && !isMobile) {
            $(".btn-search").click();
            event.preventDefault();
        }
    });
    function validationSearchForm() {
        var error = true;
        $('#search-header input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#search-header").find("input:eq(" + index + ")").css({ "border": "none", "border-bottom": "2px solid red" });
                    error = false;
                }
                else {
                    $("#search-header").find("input:eq(" + index + ")").css({ "border": "none", "border-bottom": "2px solid #000" });
                }
            }
        });
        return error;
    }
    $("form.search-form, form.search-form-result").submit(function (event) {
        var error = validationSearchForm();
        if (error) {
            var action = $(this).attr('action');
            action = action == '#' || action == '' ? 'blog-grid-3columns.html' : action;
            action = action + '?' + $(this).serialize();
            window.location = action;
        }

        event.preventDefault();
    });
    $('.navbar .navbar-collapse a.dropdown-toggle, .accordion-style1 .panel-heading a, .accordion-style2 .panel-heading a, .accordion-style3 .panel-heading a, .toggles .panel-heading a, .toggles-style2 .panel-heading a, .toggles-style3 .panel-heading a, a.carousel-control, .nav-tabs a[data-toggle="tab"], a.shopping-cart').click(function (e) {
        e.preventDefault();
    });
    $('body').on('touchstart click', function (e) {
        if ($(window).width() < 992) {
            if (!$('.navbar-collapse').has(e.target).is('.navbar-collapse') && $('.navbar-collapse').hasClass('in') && !$(e.target).hasClass('navbar-toggle')) {
                $('.navbar-collapse').collapse('hide');
            }
        }
        else {
            if (!$('.navbar-collapse').has(e.target).is('.navbar-collapse') && $('.navbar-collapse ul').hasClass('in')) {
                console.log(this);
                $('.navbar-collapse').find('a.dropdown-toggle').addClass('collapsed');
                $('.navbar-collapse').find('ul.dropdown-menu').removeClass('in');
                $('.navbar-collapse a.dropdown-toggle').removeClass('active');
            }
        }
    });
    $('.navbar-collapse a.dropdown-toggle').on('touchstart', function (e) {
        $('.navbar-collapse a.dropdown-toggle').not(this).removeClass('active');
        if ($(this).hasClass('active'))
            $(this).removeClass('active');
        else
            $(this).addClass('active');
    });

    $("button.navbar-toggle").click(function () {
        if (isMobile) {
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');

        }
    });
    $("a.dropdown-toggle").click(function () {
        if (isMobile) {
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');

        }
    });



    /*==============================================================*/
    //Search - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Parallax - START CODE
    /*==============================================================*/

    var $elem = $('#content');
    $('#scroll_to_top').fadeIn('slow');
    $('#nav_down').fadeIn('slow');
    $(window).bind('scrollstart', function () {
        $('#scroll_to_top,#nav_down').stop().animate({ 'opacity': '0.2' });
    });
    $(window).bind('scrollstop', function () {
        $('#scroll_to_top,#nav_down').stop().animate({ 'opacity': '1' });
    });
    $('#nav_down').click(
            function (e) {
                $('html, body').animate({ scrollTop: $elem.height() }, 800);
            }
    );
    $('#scroll_to_top').click(
            function (e) {
                $('html, body').animate({ scrollTop: '0px' }, 800);
            }
    );
    /*==============================================================*/
    //Parallax - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //FORM TO EMAIL - START CODE
    /*==============================================================*/
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };


    $("#success").hide();

    $("#contact-us-button").click(function () {
        var triggerBtn = $(this);
        var successState = validationContactUsForm();
        var lan = $("#languageStr").val();
        if (successState) {
            var _name = $("#contactusform #name");
            var _email = $("#contactusform #email");
            var _subject = $("#contactusform #subject");
            var _subjectOther = $("#contactusform #subject-other");
            var _message = $("#contactusform #message");
            triggerBtn.attr("disabled", true);
            var params = {
                name: _name.val(),
                email: _email.val(),
                subject: _subject.val(),
                subjectOther: _subjectOther.val(),
                message: _message.val()
            };
            $.ajax({
                type: "GET",
                url: "/" + lan + "/home/sendContactMail",
                data: params,
                success: function (response) {
                    triggerBtn.removeAttr("disabled");
                    if (response.state == "success") {
                        _name.val('');
                        _email.val('');
                        _subject.val('');
                        _subjectOther.val('');
                        _message.val('');
                        _subjectOther.css("display", "none");
                        _subject.parent().removeClass("height-380").addClass("height-340");
                        toastr.success(response.toastrMessage);
                    } else {
                        toastr.error(response.toastrMessage);
                    }
                },
                error: function (err) {
                    triggerBtn.removeAttr("disabled");
                    toastr.error("Error");
                }
            });
        }
    });
    function validationContactUsForm() {
        var success = true;

        var _name = $("#contactusform #name");
        var _email = $("#contactusform #email");
        var _subject = $("#contactusform #subject");
        var _subjectOther = $("#contactusform #subject-other");
        var _message = $("#contactusform #message");

        if (_name.val() == null || _name.val() == "") {
            _name.css({ "border-bottom": "1px solid #990033" });
            success = false;
        } else {
            _name.css({ "border-bottom": "1px solid #dfdfdf" });
        }
        if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(_email.val()))) {
            _email.css({ "border-bottom": "1px solid #990033" });
            success = false;
        } else {
            _email.css({ "border-bottom": "1px solid #dfdfdf" });
        }
        if (_subject.val() == null || _subject.val() == "") {
            _subject.css({ "border-bottom": "1px solid #990033" });
            success = false;
        } else {
            _subject.css({ "border-bottom": "1px solid #dfdfdf" });
        }
        if (parseInt(_subject.val()) === 0 && (_subjectOther.val() == null || _subjectOther.val() == "")) {
            _subjectOther.css({ "border-bottom": "1px solid #990033" });
            success = false;
        } else {
            _subjectOther.css({ "border-bottom": "1px solid #dfdfdf" });
        }
        if (_message.val() == null || _message.val() == "") {
            _message.css({ "border-bottom": "1px solid #990033" });
            success = false;
        } else {
            _message.css({ "border-bottom": "1px solid #dfdfdf" });
        }
        return success;
    }
    $("#notifyme-button").click(function () {
        var triggerBtn = $(this);
        var error = validationnotifymeForm();
        var lan = $("#languageStr").val();
        if (error) {
            triggerBtn.attr("disabled", true);
            $.ajax({
                type: "GET",
                url: "/" + lan + "/home/subscribe",
                data: { email: $("#subscribeEmail").val() },
                success: function (response) {
                    triggerBtn.removeAttr("disabled");
                    $('#subscribeEmail').val('');
                    if (response.state == "success") {
                        toastr.success(response.toastrMessage);
                    } else {
                        toastr.error(response.toastrMessage);
                    }
                },
                error: function (err) {
                    triggerBtn.removeAttr("disabled");
                    toastr.error("Error");
                }
            });
        }
    });
    function validationnotifymeForm() {
        var error = true;
        $('#notifymeform input[type=text]').each(function (index) {

            if (index == 0) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#notifymeform").find("input:eq(" + index + ")").css({ "border": "1px solid #990033" });
                    error = false;
                } else {
                    $("#notifymeform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }

        });
        return error;
    }

    $("#success-free30daytrial").hide();
    $("#free30daytrial-button").click(function () {
        var error = validationfree30daytrialForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "free30daytrial.php",
                data: $("#free30daytrialform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success-free30daytrial").html(result);
                    $("#success-free30daytrial").fadeIn("slow");
                    $('#success-free30daytrial').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationfree30daytrialForm() {
        var error = true;
        $('#free30daytrialform input[type=text]').each(function (index) {

            if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#free30daytrialform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                } else {
                    $("#free30daytrialform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
            else if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#free30daytrialform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                }
                else {
                    $("#free30daytrialform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
        });
        return error;
    }


    $("#event-button").click(function () {
        var error = validationeventForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "rsvp.php",
                data: $("#eventform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationeventForm() {
        var error = true;
        $('#eventform input[type=text]').each(function (index) {

            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#eventform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                }
                else {
                    $("#eventform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
        });
        return error;
    }

    $("#careers-button").click(function () {
        var error = validationcareersForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "careers.php",
                data: $("#careersform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationcareersForm() {
        var error = true;
        $('#careersform input[type=text]').each(function (index) {

            if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                } else {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
            else if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                }
                else {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
            else if (index == 2) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                }
                else {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
        });
        return error;
    }
    /*==============================================================*/
    //FORM TO EMAIL - END CODE
    /*==============================================================*/

    // pull-menu close on href click event in mobile devices
    $('.pull-menu a.inner-link')
            .click(function (e) {
                $('#close-button').click();
            });
});

function animatecounters() {

    /*==============================================================*/
    //Counter Number - START CODE
    /*==============================================================*/

    $('.timer').each(count);
    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
    /*==============================================================*/
    //Counter Number - END CODE
    /*==============================================================*/

}

var inViewchart = false;
var inViewanimnumberpizza = false;
var inViewanimnumberclient = false;
var inViewanimnumberprojects = false;
var inViewanimnumbercomments = false;
var inViewcounter1 = false;
var inViewcounter2 = false;
var inViewcounter3 = false;
var inViewcounter4 = false;
var inViewcounter5 = false;
var inViewcounter6 = false;
var inViewcounter7 = false;

function isScrolledIntoView(elem) {
    try {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }
    catch (ex) {
        return false;
    }


}



/*==============================================================*/
//Navigation - START CODE
/*==============================================================*/
// Shrink nav on scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $('nav').addClass('shrink-nav');
    } else {
        $('nav').removeClass('shrink-nav');
    }

    //Animate Elements in view position
    if (isScrolledIntoView('.chart')) {
        if (inViewchart == false) {
            inViewchart = true;

            $(".chart").each(function () {
                try {
                    $(this).data('easyPieChart').update(0);
                    $(this).data('easyPieChart').update($(this).attr("data-percent"));
                }
                catch (ex) {
                }
            });

            $(".chart2").each(function () {
                try {
                    $(this).data('easyPieChart').update(0);
                    $(this).data('easyPieChart').update($(this).attr("data-percent"));
                }
                catch (ex) {
                }
            });
        }
    }





});
// Resize Header Menu
function SetResizeHeaderMenu() {
    var width = jQuery('nav.navbar').children('div.container').width();
    $("ul.mega-menu-full").each(function () {
        jQuery(this).css('width', width + 'px');
    });
}
/*==============================================================*/
//Navigation - END CODE
/*==============================================================*/


/*==============================================================*/
//Parallax - START CODE
/*==============================================================*/
// Parallax Fix Image Scripts 

$('.parallax-fix').each(function () {
    if ($(this).children('.parallax-background-img').length) {
        var imgSrc = jQuery(this).children('.parallax-background-img').attr('src');
        jQuery(this).css('background', 'url("' + imgSrc + '")');
        jQuery(this).children('.parallax-background-img').remove();
        $(this).css('background-position', 'center');
    }

});
var IsParallaxGenerated = false;
function SetParallax() {
    if ($(window).width() > 1030 && !IsParallaxGenerated) {
        $('.parallax1').parallax("50%", 0.1);
        $('.parallax2').parallax("50%", 0.2);
        $('.parallax3').parallax("50%", 0.3);
        $('.parallax4').parallax("50%", 0.4);
        $('.parallax5').parallax("50%", 0.5);
        $('.parallax6').parallax("50%", 0.6);
        $('.parallax7').parallax("50%", 0.7);
        $('.parallax8').parallax("50%", 0.8);
        $('.parallax9').parallax("50%", 0.05);
        $('.parallax10').parallax("50%", 0.02);
        $('.parallax11').parallax("50%", 0.01);
        $('.parallax12').parallax("50%", 0.099);
        IsParallaxGenerated = true;
    }
}
/*==============================================================*/
//Parallax - END CODE
/*==============================================================*/

/*==============================================================*/
//Mobile Toggle Control - START CODE
/*==============================================================*/

$('.mobile-toggle').click(function () {
    $('nav').toggleClass('open-nav');
});
$('.dropdown-arrow').click(function () {
    if ($('.mobile-toggle').is(":visible")) {
        if ($(this).children('.dropdown').hasClass('open-nav')) {
            $(this).children('.dropdown').removeClass('open-nav');
        } else {
            $('.dropdown').removeClass('open-nav');
            $(this).children('.dropdown').addClass('open-nav');
        }
    }
});
/*==============================================================*/
//Mobile Toggle Control - END CODE
/*==============================================================*/

/*==============================================================*/
//Position Fullwidth Subnavs fullwidth correctly - START CODE
/*==============================================================*/
$('.dropdown-fullwidth').each(function () {
    $(this).css('width', $('.row').width());
    var subNavOffset = -($('nav .row').innerWidth() - $('.menu').innerWidth() - 15);
    $(this).css('left', subNavOffset);
});
/*==============================================================*/
//Position Fullwidth Subnavs fullwidth correctly - END CODE
/*==============================================================*/

/*==============================================================*/
//Smooth Scroll - START CODE
/*==============================================================*/
var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop()
            .animate({
                'scrollTop': $(target)
                        .offset()
                        .top
            }, scrollAnimationTime, scrollAnimation, function () {
                window.location.hash = target;
            });
});
// Inner links
$('.inner-link').smoothScroll({
    speed: 900,
    offset: -0
});

$('.section-link').smoothScroll({
    speed: 900,
    offset: 1
});
// Scroll To Down
function scrollToDown() {
    var target = $('#features');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
}
function scrollToDownSection() {
    var target = $('#about');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
}
/*==============================================================*/
//Smooth Scroll - END CODE
/*==============================================================*/

/*==============================================================*/
//Full Screen Header - START CODE
/*==============================================================*/

function SetResizeContent() {
    var minheight = $(window).height();
    $(".full-screen").css('min-height', minheight);

    var minwidth = $(window).width();
    $(".full-screen-width").css('min-width', minwidth);
}

SetResizeContent();
/*==============================================================*/
//Full Screen Header - END CODE
/*==============================================================*/


/*==============================================================*/
//Window Resize Events - START CODE
/*==============================================================*/
$(window).resize(function () {
    //Position Fullwidth Subnavs fullwidth correctly
    $('.dropdown-fullwidth').each(function () {
        $(this).css('width', $('.row').width());
        var subNavOffset = -($('nav .row').innerWidth() - $('.menu').innerWidth() - 15);
        $(this).css('left', subNavOffset);
    });
    SetResizeContent();
    setTimeout(function () {
        SetResizeHeaderMenu();
    }, 200);
    if ($(window).width() >= 992 && $('.navbar-collapse').hasClass('in')) {
        $('.navbar-collapse').removeClass('in');
        //$('.navbar-collapse').removeClass('in').find('ul.dropdown-menu').removeClass('in').parent('li.dropdown').addClass('open');
        $('.navbar-collapse ul.dropdown-menu').each(function () {
            if ($(this).hasClass('in')) {
                $(this).removeClass('in'); //.parent('li.dropdown').addClass('open');
            }
        });
        $('ul.navbar-nav > li.dropdown > a.dropdown-toggle').addClass('collapsed');
        $('.logo').focus();
        $('.navbar-collapse a.dropdown-toggle').removeClass('active');
    }

    setTimeout(function () {
        SetParallax();
    }, 1000);
});
/*==============================================================*/
//Window Resize Events - END CODE
/*==============================================================*/

$('nav.full-width-pull-menu ul.panel-group li.dropdown a.dropdown-toggle').click(function () {
    if ($(this).parent('li').find('ul.dropdown-menu').length > 0) {
        if ($(this).parent('li').hasClass('open')) {
            $(this).parent('li').removeClass('open');
        }
        else {
            $(this).parent('li').addClass('open');
        }
    }
});

// pull-menu close on href click event in mobile devices
$('.pull-menu a.section-link').click(function (e) {
    if ($(window).width() <= 500)
        $('#close-button').click();
});

/*==============================================================*/
// Main navigation href
/*==============================================================*/

$(document).ready(function () {
    $(document).on('click', '.menu-first-level > a:first-child', function () {
        var geturl = $(this).attr('data-redirect-url');
        if (geturl != '#' && geturl != '') {
            if ($(this).attr('target') == '_blank') {
                window.open(geturl, '_blank');
            } else {
                window.location = geturl;
            }
        }
    });

    $('.scroll-to').on('click', function (event) {
        var target = $(this.getAttribute('data-scroll'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - $(".navbar").height()
            }, 1000);
        }
    });
    $('.scroll-to-half').on('click', function (event) {
        var target = $(this.getAttribute('data-scroll'));
        if (target.length) {
            event.preventDefault();
            $("#about-page-image").css('background', "url('" + $(this).attr("data-image") + "') center center");
            $('html, body').stop().animate({
                scrollTop: target.offset().top - $(".navbar").height() - 220
            }, 1000);
        }
    });
    $(".header-to-go").click(function () {
        window.location.href = $(this).attr("data-url");
    });
});