// common script
"use strict";

$(document).ready(function() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });

  
  $("#header a.toggle").on('click', function(){
    $(".wrapper").toggleClass('on');
  });


  $("#main-about > a").on('click',function(){
    $("#main-about").addClass("on");
  })


  $("#main-about > div > a.warmap-close").on('click',function(){
    $("#main-about").removeClass("on");
  })

  divideEtc("#main-etc > div > a")

  function divideEtc(selector) {
    let $selector = $(selector)

    $selector.each(function(){
      $(this).on('mouseenter', function() {
        $(this).css({"width": "50%"})
        $selector.not(this).css({"width": "25%"})
      })
      $('#main-etc > div > a').on('mouseleave', function() {
        $(this).css({'width': '33.33%'})
      })
      $(this).on("mouseleave",function(){
        $selector.css({"width": "33.33%"})
      })
    })
  }
  

  $("#header nav.gnb > ul > li").on("click",function(){
    $(this).toggleClass("on")
    $(this).siblings().removeClass("on");
  })
  $("#header nav.gnb > ul > li > ul > li > a").on("click",function(){
    event.stopPropagation()
  })
  $('#scroll-top').on('click', function () {
    $('html, body').stop(true).animate({'scrollTop': 0}, 1000);
  });
  $('#scroll-bottom').on('click', function () {
    $('html, body').stop(true).animate({'scrollTop': 3295}, 1000);
  });

  mainSlide()
  function mainSlide() {
    var numSlide = $('section#main-visual ul.content li').length;
    var slideNow = 0;
    var slidePrev = 0;
    var slideNext = 0;
    let timerId = '';
    let isTimerOn = false;
    let timerSpeed = 3000;

    showSlide(1);

    if(isTimerOn === true) {
      $('section#main-visual p.control a.play').addClass('on');
    } else {
      $('section#main-visual p.control a.play').removeClass('on');
    }

    $('.next').on('click', function () {
      showSlide(slideNext);
    });
    $('.prev').on('click', function () {
      showSlide(slidePrev);
    });
    $('section#main-visual p.control a.play').on('click',function() {
      if(isTimerOn === true) {
        clearInterval(timerId)
        $(this).removeClass('on')
        isTimerOn = false;
      } else {
        timerId = setInterval(function() {showSlide(slideNext);},timerSpeed);
        $(this).addClass('on')
        isTimerOn = true;
      }
    })

    function showSlide(n) {
      clearInterval(timerId)
      if (slideNow === 0) {
        $('section#main-visual ul.content').css({ transition: 'none', left: -(n - 1) * 100 + '%' });
      } else {
        $('section#main-visual ul.content').css({ transition: 'left 0.8s', left: -(n - 1) * 100 + '%' });
        $('section#main-visual .indicator li').removeClass('on')
        $('section#main-visual .indicator li:eq('+ (n - 1) + ')').addClass('on')
      }
      slideNow = n;
      slidePrev = n === 1 ? numSlide : n - 1;
      slideNext = n === numSlide ? 1 : n + 1;
      if(isTimerOn === true) {
        timerId = setInterval(function() {showSlide(slideNext);},timerSpeed);
      }
    }

  }


  $(window).on('resize load',function() {
    if($(window).width() < 1100) {
      newsSlideM()
    } else {
      newsSlide()
    }
  })

  function newsSlideM() {
    let numSlide = $('section#main-news ul.content li').length;
    let slideNow = 1;
    let slidePrev = 0;
    let slideNext = 0;
    showSlide(1);
    $('section#main-news a.next').on('click', function () {
      showSlide(slideNext);
    });
    $('section#main-news a.prev').on('click', function () {
      showSlide(slidePrev);
    });
    function showSlide(n) {
      if (slideNow === 0) {
        $('section#main-news ul.content li').css({ transition: 'none', left: -(n - 1) * 500 + 'px' });
      } else {
        $('section#main-news ul.content li').css({ transition: 'left 0.8s', left: -(n - 1) * 500 +'px' });
      }
      slideNow = n;
      slidePrev = n === 1 ? numSlide : n - 1;
      slideNext = n === numSlide ? 1 : n + 1;
      }
    }
  function newsSlide() {
    let numSlide = $('section#main-news ul.content li').length;
    let slideNow = 1;
    let slidePrev = 3;
    let slideNext = 2;
    showSlide(1);
    $('section#main-news a.next').on('click', function () {
      showSlide(slideNext);
    });
    $('section#main-news a.prev').on('click', function () {
      showSlide(slidePrev);
    });
    function showSlide(n) {
      if (slideNow === 0) {
        $('section#main-news ul.content li').css({ transition: 'none', left: -(n - 1) * 960 + 'px' });
      } else {
        $('section#main-news ul.content li').css({ transition: 'left 0.8s', left: -(n - 1) * 960 +'px' });
      }
      slideNow = n;
      slidePrev = n === 1 ? 3 : n - 1;
      slideNext = n === 3 ? 1 : n + 1;
      }
    }

    showScroll()
    function showScroll() {
      $(window).on('scroll',function() {
        let scrollNow = $(window).scrollTop();
        let maxScroll = $(document).outerHeight() - $(window).outerHeight();
        let scrollMove = (maxScroll / 6);

        // $('div.g-indicator ul li').each(function(i) {
        //   if(scrollNow <= (scrollMove * (i + 1))) {
        //     $('div.g-indicator ul li').removeClass('on')
        //     $('div.g-indicator ul li:eq('+ i +')').addClass('on')
        //   }
        // })
        if (scrollNow <= scrollMove) {
          $('div.g-indicator ul li').removeClass('on')
          $('div.g-indicator ul li:eq(0)').addClass('on')
        } else if (scrollNow <= scrollMove * 2) {
          $('div.g-indicator ul li').removeClass('on')
          $('div.g-indicator ul li:eq(1)').addClass('on')
        } else if (scrollNow <= scrollMove * 3) {
          $('div.g-indicator ul li').removeClass('on')
          $('div.g-indicator ul li:eq(2)').addClass('on')
        } else if (scrollNow <= scrollMove * 4) {
          $('div.g-indicator ul li').removeClass('on')
          $('div.g-indicator ul li:eq(3)').addClass('on')
        } else if (scrollNow <= scrollMove * 5) {
          $('div.g-indicator ul li').removeClass('on')
          $('div.g-indicator ul li:eq(4)').addClass('on')
        } else if (scrollNow >= scrollMove * 6) {
          $('div.g-indicator ul li').removeClass('on')
          $('div.g-indicator ul li:eq(5)').addClass('on')
        }
      })
    }
  
    $(document).ready(function() {
        setDrag('section#main-visual');
        function setDrag(selector) {
          let numSlide = $($(selector).children()).length;
          let slideNow = 0;
          let slidePrev = 0;
          let slideNext = 0;
          let startX = 0;
          let startY = 0;
          let delX = 0;
          let delY = 0;
          let offsetX = 0;
          let offsetY = 0;
          let isTouched = false;
          let isClickAllowed = true;
    
          showSlide(1)


          $(selector).on('touchstart', function (e) {

            e = (e.clientX === undefined) ? e.touches[0] : e;
            startX = e.clientX;
            startY = e.clientY;
            offsetX = $(this).position().left;
            offsetY = $(this).position().top;
            isTouched = true;

          }).on('click', function (e) {
            if (isClickAllowed === false) {
              isClickAllowed = true;
            }
            if (delY < -10) {
              
            }
          });

          document.addEventListener('touchmove', move, {
            passive: false
          });
          
          $(selector).on('touchend', function (e) {

            if (isTouched === true) {
              isTouched = false;
            }
      
            if (delX < -10 ) {
              showSlide(slideNext)
            } else if(delX > 10){
              showSlide(slidePrev)
            }
            console.log(delY)
          });
          function move(e) {
            if (isTouched === false) return false;
            e = (e.clientX === undefined) ? e.touches[0] : e;
            delX = e.clientX - startX;
            delY = e.clientY - startY;
            if (Math.abs(delX) > 10 || Math.abs(delY) > 10) isClickAllowed = false;
          }

          function showSlide(n) {
            if (slideNow === 0) {
              $('section#main-visual ul.content').css({ transition: 'none', left: -(n - 1) * 100 + '%' });
            } else {
              $('section#main-visual ul.content').css({ transition: 'left 0.8s', left: -(n - 1) * 100 +'%' });
              $('section#main-visual .indicator li').removeClass('on')
              $('section#main-visual .indicator li:eq('+ (n - 1) + ')').addClass('on')
            }
            slideNow = n;
            slidePrev = n === 1 ? numSlide : n - 1;
            slideNext = n === numSlide ? 1 : n + 1;
          }
        }
    });
    $(document).ready(function() {
        setDrag('section#main-news ul');
        function setDrag(selector) {
          let numSlide = $($(selector).children()).length;
          let slideNow = 0;
          let slidePrev = 0;
          let slideNext = 0;
          let startX = 0;
          let delX = 0;
          let offsetX = 0;
          let isTouched = false;
          let isClickAllowed = true;
    
          showSlide(1)
          $(selector).on('mousedown touchstart', function (e) {
            e.preventDefault()
            e = (e.clientX === undefined) ? e.touches[0] : e;
            startX = e.clientX;
            offsetX = $(this).position().left;
            isTouched = true;
          }).on('click', function (e) {
            if (isClickAllowed === false) {
              isClickAllowed = true;
            }
          });
          document.addEventListener('mousemove', move, {
            passive: false
          });
          document.addEventListener('touchmove', move, {
            passive: false
          });
          
          $(selector).on('mouseup touchend', function (e) {
            if (isTouched === true) {
              isTouched = false;
            }
            if (delX < -10 ) {
              showSlide(slideNext)
            } else if(delX > 10){
              showSlide(slidePrev)
            }
          });
          function move(e) {
            if (isTouched === false) return false;
            e = (e.clientX === undefined) ? e.touches[0] : e;
            delX = e.clientX - startX;
            if (Math.abs(delX) > 10) isClickAllowed = false;
          }

          function showSlide(n) {
            if (slideNow === 0) {
              $('section#main-news ul.content li').css({ transition: 'none', left: -(n - 1) * 380 + 'px' });
            } else {
              $('section#main-news ul.content li').css({ transition: 'left 0.8s', left: -(n - 1) * 380 +'px' });
            }
            slideNow = n;
            slidePrev = n === 1 ? numSlide : n - 1;
            slideNext = n === numSlide ? 1 : n + 1;
            }
        }
    });
    setDrag1('.weapon-visual > ul > li:last-child');
    
    function setDrag1(selector) {
      var $selector = $(selector);
      var startX = 0;
      var delX = 0;
      var offsetX = 0;
      var isBlocked = false;
    
      $selector.parent().on('mouseover touchstart ', function(e) {
        e.preventDefault();
        startX = e.clientX;
        $selector.css({'width': (startX - $(this).parent().position().left) + 'px'});
        offsetX = $selector.position().left + $selector.width();
        $(document).on('mousemove touchmove', function(e) {
          delX = e.clientX - startX;
          if (Math.abs(delX) > 5) isBlocked = true;
          $selector.css({'width': (offsetX + delX) + 'px'});
        });
        $(document).on('mouseout touchend', function() {
          $(document).off('mousemove mouseout');
        });
      });
    
      $selector.on('click', function(e) {
        if (isBlocked === true) {
          e.preventDefault();
          isBlocked = false;
        }
      });
    }

    var numSlide = $('.sub div.image-slide .slide li').length;
    var slideNow = 0;
    var slidePrev = 0;
    var slideNext = 0;
    var slideFirst = 1;
    var timerId = '';
    var isTimerOn = false;
    var timerSpeed = 2000;

    $('.sub div.image-slide .slide li').each(function(i) {
      $(this).css({'left': (i * 100) + '%', 'display': 'block'});
      $('.sub div.image-slide .indicator').append('<li><a href="#">' + (i + 1) + '번 슬라이드</a></li>\n');
    });
    if (isTimerOn === true) {
      $('.sub div.image-slide a.play').addClass('on');
    } else {
      $('.sub div.image-slide a.play').removeClass('on');
    }
    showSlide(slideFirst);

    $('.sub div.image-slide .indicator li a').on('click', function() {
      var index = $('.sub div.image-slide .indicator li').index($(this).parent());
      showSlide(index + 1);
    });

    $('.sub div.image-slide a.prev').on('click', function() {
      $(this).find('img').stop(true).animate({'left': '-10px'}, 80).animate({'left': 0}, 160);
      showSlide(slidePrev);
    });

    $('.sub div.image-slide a.next').on('click', function() {
      $(this).find('img').stop(true).animate({'right': '-10px'}, 80).animate({'right': 0}, 160);
      showSlide(slideNext);
    });

    $('.sub div.image-slide a.play').on('click', function() {
      if (isTimerOn === true) {
        clearTimeout(timerId);
        $(this).removeClass('on');
        isTimerOn = false;
      } else {
        timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
        $(this).addClass('on');
        isTimerOn = true;
      }
    });

    function showSlide(n) {
      if (slideNow === 0) {
        $('.sub div.image-slide .slide').css({'transition': 'none', 'left': -((n - 1) * 100) + '%'});
      } else {
        $('.sub div.image-slide .slide').css({'transition': 'left 0.5s', 'left': -((n - 1) * 100) + '%'});
      }
      $('.sub div.image-slide .indicator li').removeClass('on');
      $('.sub div.image-slide .indicator li:eq(' + (n - 1) + ')').addClass('on');
      slideNow = n;
      slidePrev = (n === 1) ? numSlide : (n - 1);
      slideNext = (n === numSlide) ? 1 : (n + 1);
      console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
      if (isTimerOn === true) {
        clearTimeout(timerId);
        timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
      }
    }


});








