$(function() {

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade:true
  });

  //リンクのホバー時に透明化
    $("a").hover(
      function () {
        $(this).fadeTo("4000", 0.5);
      },
      function () {
        $(this).fadeTo("4000", 1.0);
      }
    );

  //100pxを境にTOPボタンの表示を切り替え
  
  $(window).scroll(function(){
    const backBtn=$('#back-btn');
    if($(this).scrollTop()>=100){
          backBtn.fadeIn();
  //      backBtn.css('display','inline');
    }else{
          backBtn.fadeOut();
  //      backBtn.css('display','none'); 
    }
  });

/*
//TOPボタン押した際になめらかに戻る
$('back-btn').on('click',function(){
  $('body, html').animate({ scrollTop: 0 }, 100);
});

$('a[href^="#"]').on('click',function(){
  $('body, html').animate({ scrollTop: 0 }, 300);
});

$('a[href^="#"]').on('click',function(){
  $('body, html').animate({ scrollTop: 0 }, 300);
});
*/

// なめらかに戻る
/*
  var $link;
  $link = $('body').find('a');
*/    

  $('a[href^="#"]').on('click',function(){
    //href属性から、リンク先のid属性を取得
    const href = $(this).attr('href');

    // 移動先を取得
    let $target;
    if (href == '#') {
      $target = $('html');
    } else {
      $target = $(href);
    }
  
    // 移動先の位置を取得
    const position = $target.offset().top;
    // アニメーションを実行
    $('html, body').animate({'scrollTop': position}, 500, 'swing');
    return false;
  });

//セクションのフェードイン
  $(window).scroll(function(){
 
  const box = $('section');
  const animated = 'fadeIn';
  
  box.each(function(){
  
    const boxOffset = $(this).offset().top;
    const scrollPos = $(window).scrollTop();
    const wh = $(window).height();
 
    if(scrollPos > boxOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });
});


// Works画像クリックで拡大
$('.works-photo').click(function () {
  const imgSrc = jQuery(this).prop("src");//子要素のsrc属性を取得
  $(".big-img").prop("src",imgSrc);//拡大htmlのsrc属性に上書き
  $(".modal").fadeIn();//フェードイン表示
  $("body").css("overflow", "hidden");//画面下をスクロールさせない
  return false;//タグの無効化
});


/*
$('.works-photo').click(function () {
  const imgSrc = $(this).attr('src');
  const imgAlt = $(this).attr('alt');
  $('.big-img').attr({
    src: imgSrc,
    alt: imgAlt,
  });
  $('.modal').fadeIn();
});
*/ 

// 閉じるボタンをクリックしたときにモーダルを閉じる
$('.close-btn').click(function () {
  $('.modal').fadeOut();
});

});
