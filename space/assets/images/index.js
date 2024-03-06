$('.responsive').slick({
    slidesToShow: 5.4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    pauseOnHover: false,
    arrows: false,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow:4,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3.2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2.7,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider').slick({
    slidesToShow: 5.3,
    slidesToScroll: 1,
    autoplay: true,
    rtl: false,
    autoplaySpeed: 0,
    speed: 2000,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow:4,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3.2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 700,
        settings: {
            slidesToShow: 2.7,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2.2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1
        }
    }
]
});



let nav_links = document.querySelector(".nav_links")



function showNav(){
    nav_links.classList.toggle("start-0")
    document.body.classList.toggle("overflow-hidden");
}

function hide_nav(){
    nav_links.classList.remove("start-0")
    document.body.classList.remove("overflow-hidden");
}