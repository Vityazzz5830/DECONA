$('.catalogsec_mainpage_content_tabmenu_sliderone').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 1596,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false
      }
    }
  ]
});


$('.blogsec_mainpage_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true
});

$('.ourrealizedprojectssec_developerspage_content_rightpart').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    dots: false,
    autoplay: false,
    variableWidth: true,
    prevArrow: $('.ourrealizedprojectssec_developerspage_content_rightpart_prev'),
    nextArrow: $('.ourrealizedprojectssec_developerspage_content_rightpart_next')
});










