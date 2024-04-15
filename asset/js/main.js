$(document).ready(function(){
  //header drop menu
  $('.btn-menu').on('click', function(){
    var ariaValue = $(this).attr('aria-expanded') === 'true' ? 'false' : 'true';
    $(this).attr('aria-expanded', ariaValue);
    $(this).parent('.wrap-menu').toggleClass('open');
    var txtValue = $(this).children('.icon').text() === '메뉴 열기' ? '메뉴 닫기' : '메뉴 열기';
    $(this).children('.icon').text(txtValue);
  });
  
  //scroll
  $(window).on('scroll', function(){
    const scrollTop = $(window).scrollTop();

    //header scroll
    const infoOffset = $('.store-info').offset().top;

    if(scrollTop > infoOffset){
      $('.header-sub').removeClass('hide');
      $('.header-info, .store-info').attr('aria-hidden', 'true');
    }else{
      $('.header-sub').addClass('hide');
      $('.header-info, .store-info').attr('aria-hidden', 'false');
    }

    //tap btn scroll
    if(scrollTop > 1){
      $('.btn-top').addClass('show')
    }else{
      $('.btn-top').removeClass('show')
    }

    //go to top
    $(".btn-top").click(function(){
      window.scrollTo({top : 0, behavior: 'smooth'}); 
    });
  });
  //visual swiper
  var swiperVisual = new Swiper(".section-visual .swiper", {
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //cont swiper
  var swiperCont = new Swiper(".news-cont .swiper", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });

  //kakao map
  var mapContainer = document.getElementById('map'), 
      mapOption = { 
        center: new kakao.maps.LatLng(37.54462, 127.0591), 
        level: 3 
       };

  var map = new kakao.maps.Map(mapContainer, mapOption); 
  const imageSrc = 'asset/images/img_ic_pin_amoreStore.png',
      imageSize = new kakao.maps.Size(37, 52), 
      imageOption = {offset: new kakao.maps.Point(19, 52)};
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
  markerPosition = new kakao.maps.LatLng(37.54462, 127.0591); 

  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage 
  });

  marker.setMap(map);  
});