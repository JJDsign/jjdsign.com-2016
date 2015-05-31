//on load
$(function(){
    // Offset for navigation height
    var smallsize = 650;
 

    var isTouch = 'ontouchstart' in document.documentElement;


    // setup fullscreen scenes ---------------------------------------- (start)
    var wheight = $(window).height();
    var wwidth = $(window).width();
    if (wwidth > smallsize) {
        var topoffset = 70;
    } else {
        var topoffset = 50;
    }

    $(".fullheight").css('height',wheight); 
    $(".fullheight-footer").css('min-height',wheight - topoffset - $('footer').outerHeight(true)); 
    $(window).resize(function(){
        
        var smallsize = 650;
        var wheight = $(window).height(); 
        var wwidth = $(window).width(); 
        if (wwidth > smallsize) { 
            topoffset = 70; 
        } else { 
            topoffset = 50; 
        }   
        $(".fullheight").css('height',wheight);  
        $(".fullheight-footer").css('min-height',wheight - topoffset - $('footer').outerHeight(true));  
    }).resize(); //on resize 

    //setup responsive menu ---------------------------------------- (start)
    var pull    = $('#pull'),
        menu    = $('nav ul');
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(this).width();
        if(w > smallsize && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    }); 
    $('#nav li a').on('click', function(e) {       
        var w = $(window).width();
        if(w < smallsize ) { 
            menu.slideToggle(); 
        }
    });
    $('#splashbutton').on('click', function(e) {          
        menu.removeAttr('style');        
    });  

    // skills progress bar ---------------------------------------- (start)
    function loadSkillbar() {
        jQuery('.skillbar').each(function(){
            jQuery(this).find('.bar').animate({
                width:jQuery(this).attr('data-percent')
            },500);
        });    
    };

 
    // code from:
    // http://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top-topoffset
            }, 1000); 
            return false; 
            } //target.length
        } //location hostname
    }); //on click 

    var myscenes = ['intro','welcome','about','skills','projects','contact']; 
    //set class button active per scene
    $(window).scroll(function(){
        var windowpos = $(window).scrollTop() + topoffset + 1
        $.each(myscenes, function(i, val){
            if (windowpos > $('#'+val).offset().top) { 
                $('nav li a').removeClass('active'); 
                $('a[href$="#'+val+'"]').addClass('active');     
            }   
        });
    }); //window scroll
 
 
    // set up ScrollMagic
    var controller = new ScrollMagic({
        /*
        globalSceneOptions: {
            triggerHook: "onLeave"
        }*/
    });

    // pin the navigation to top of browser
    var pin = new ScrollScene({
        triggerElement: '#nav',
        triggerHook: "onLeave" 
    }).setPin('#nav').addTo(controller); 


    if (!isTouch) {

        // Scene Welcome - tween for text
        var welcomeTextTween = TweenMax.from('#welcome article', 1, {opacity:0, scale:1});
        var welcomeTextScene = new ScrollScene({  
            triggerElement: '#welcome' 
        })
        .setTween(welcomeTextTween) 
        .addTo(controller); 
        
        // Scene Welcome - tween for image
        var welcomeImageTween = TweenMax.from('#welcome-image img', 1, {y:200} );    
        var welcomeImageScene = new ScrollScene({ 
            triggerElement: '#welcome' 
        }) 
        .setTween(welcomeImageTween)
        .addTo(controller);  

        // Scene About info
        var aboutPersonalinfoTween = TweenMax.from( '#personalinfo', .5, { opacity:0, x:-200} );
        var aboutPersonalinfoScene = new ScrollScene({
            triggerElement: '.scene#about', 
            triggerHook: "0.7",
            offset: -topoffset   
        })  
        .setTween(aboutPersonalinfoTween)
        .addTo(controller);
     
        // Scene About resume
        var aboutResumeTween = TweenMax.from( '#resume', .5, {opacity:0,   x:200} );
        var aboutResumeScene = new ScrollScene({
            triggerElement: '.scene#about', 
            triggerHook: "0.7", 
            offset: -topoffset 
        }) 
        .setTween(aboutResumeTween)
        .addTo(controller);



        var projectsTweenPlayranchLeft = TweenMax.from( '#playranch .preview', .5, { opacity:0, x:-200} );
        var projectsScenePlayranchLeft = new ScrollScene({
            triggerElement: '#playranch .preview',  
            triggerHook: "0.8", 
            offset: -topoffset   
        })  
        .setTween(projectsTweenPlayranchLeft)
        .addTo(controller);

        var projectsTweenPlayranchRight = TweenMax.from( '#playranch .info', .5, { opacity:0, x:200} );
        var projectsScenePlayranchRight = new ScrollScene({
            triggerElement: '#playranch .info',  
            triggerHook: "0.8", 
            offset: -topoffset   
        })  
        .setTween(projectsTweenPlayranchRight)
        .addTo(controller);


        var projectsTweenArmadaLeft = TweenMax.from( '#armada .preview', .5, { opacity:0, x:-200} );
        var projectsSceneArmadaLeft = new ScrollScene({
            triggerElement: '#armada .preview',  
            triggerHook: "0.8", 
            offset: -topoffset   
        })  
        .setTween(projectsTweenArmadaLeft)
        .addTo(controller);

        var projectsTweenArmadaRight = TweenMax.from( '#armada .info', .5, { opacity:0, x:200} );
        var projectsSceneArmadaRight = new ScrollScene({
            triggerElement: '#armada .info',  
            triggerHook: "0.8", 
            offset: -topoffset   
        })  
        .setTween(projectsTweenArmadaRight)
        .addTo(controller);


        var projectsTweenTomtomLeft = TweenMax.from( '#tomtom .preview', .5, { opacity:0, x:-200} );
        var projectsSceneTomtomLeft = new ScrollScene({
            triggerElement: '#tomtom .preview',  
            triggerHook: "0.8", 
            offset: -topoffset   
        })  
        .setTween(projectsTweenTomtomLeft)
        .addTo(controller);

        var projectsTweenTomtomRight = TweenMax.from( '#tomtom .info', .5, { opacity:0, x:200} );
        var projectsSceneTomtomRight = new ScrollScene({
            triggerElement: '#tomtom .info',  
            triggerHook: "0.8", 
            offset: -topoffset   
        })  
        .setTween(projectsTweenTomtomRight)
        .addTo(controller);

    } else {
        $('header .fullheight').css('backgroundAttachment','scroll');
        $('.quote').css('backgroundAttachment','scroll');
    } 

    

    var skillsColumnTween = new TimelineMax();
        skillsColumnTween.staggerFrom(".legend", .5, {opacity:0, y:100, onComplete: loadSkillbar , onReverseComplete: function(){$('.bar').removeAttr('style')} }, 0.1)
        .staggerTo(".perks span", .1, {backgroundColor:'#0da6e0'},  .1)
        .from("#bts", .5, {delay:0, opacity:0, y:20}); 
    var skillsScene = new ScrollScene({
        triggerElement: "div#skills",
        triggerHook: "0.7",
        offset: -topoffset
    })
    .setTween(skillsColumnTween) 
    .addTo(controller); 

    


    $("#playranch-slide").owlCarousel({ 
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        pagination:false,
        //pagination : false,
        singleItem:true,
        rewindNav:true,
        autoplay:true
     
    });
    $("#playranch .next").click(function(e){    

        e.preventDefault();
        $("#playranch-slide").trigger('owl.next');
    })

 
    var stylesmap = [
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "stylers": [
                {
                    "hue": "#00aaff"
                },
                {
                    "saturation": -100
                },
                {
                    "gamma": 2.15
                },
                {
                    "lightness": 12
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": 24
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 57
                }
            ]
        }
    ];
 
    var styledMap = new google.maps.StyledMapType(stylesmap,
    {name: "Styled Map"});

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
    zoom: 14,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    center: new google.maps.LatLng(52.3721743,4.8950093),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
    };
    var map = new google.maps.Map(document.getElementById('googlemaps'),
    mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}); //on load

 
 