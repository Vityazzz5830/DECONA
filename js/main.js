

const buttonminus = document.querySelector('.basketsec__item-minus');
const buttonplus = document.querySelector('.basketsec__item-plus');



function updateMinus(e) {
  buttonminus.nextElementSibling.stepDown();
}

buttonminus.addEventListener('click', updateMinus);



function updatePlus(e) {
    buttonplus.previousElementSibling.stepUp();
}
 
buttonplus.addEventListener('click', updatePlus);    





















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




$('.catalogsec_mainpage_content_tabmenu_slidertwo').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true
});

$('.moreonsec_articlepage_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true
});

$('.furnitureinthisarticlesec_articlepage_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true,
    prevArrow: $('.furnitureinthisarticlesec_articlepage_slider_arrows_leftarrow'),
    nextArrow: $('.furnitureinthisarticlesec_articlepage_slider_arrows_rightarrow')
});

$('.furnitureinthisarticlesec_basketpage_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: false,
    dots: false,
    autoplay: false,
    variableWidth: true,
    prevArrow: $('.furnitureinthisarticlesec_basketpage_slider_arrows_leftarrow'),
    nextArrow: $('.furnitureinthisarticlesec_basketpage_slider_arrows_rightarrow')
});



const but1 = document.querySelector(".catalogsec_mainpage_content_header_rightpart_box");
const boxlist = document.querySelector(".select-box__list");
const boxoptions = document.querySelectorAll(".select-box__option");

console.log(boxoptions);

but1.addEventListener('click', function() {
     but1.classList.toggle("but1_active");
     boxlist.classList.toggle("boxlist_active");
  });

for (var i = 0; i < boxoptions.length; i++) {
    boxoptions[i].addEventListener('click', function() {
     but1.classList.remove("but1_active");
     boxlist.classList.toggle("boxlist_active");
  });
}








