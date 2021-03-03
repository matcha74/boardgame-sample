$(window).scroll(function (){
    $('.about-img img').each(function(){
                var elemPos = $('.about-img img').offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $('.about-img img').addClass('scrollin');
        }
    });
});

$(function() {
    const hum = $('.menu-icon, .close')
    const nav = $('.sp-nav')
    hum.on('click', function(){
       nav.toggleClass('toggle');
    });
 });


 $(function () {
    ////////// スライドの現在値と最終スライド番号を変数化 //////////
    var slideCurrent = 0; // スライド現在値（1枚目のスライド番号としての意味も含む）
    var lastCurrent = $('.fade-list').length - 1; // スライドの合計数＝最後のスライド番号
  
    //////// 初期スライドだけ表示 //////////
      $('.fade-list').css('display', 'none'); // 一旦すべてのスライドを非表示
      $('.fade-list').eq(slideCurrent).css('display', 'block'); // 最初のスライドを表示
  
      function changeslide() {
          $('.fade-list').fadeOut(1000); // 現在のスライドをフェードアウトさせる
          $('.fade-list').eq(slideCurrent).fadeIn(1500); // 次のスライドを表示させる
      };
  
      //////// 自動スライド切り替えのタイマーを設定 //////////
      var Timer;
  
          // 一定時間毎に処理実行する「startTimer」関数を定義
          function startTimer() {
              Timer = setInterval(function () { // setInterval・・・指定した時間ごとに関数を実行
                  if (slideCurrent === lastCurrent) { // 現在のスライドが最終スライドの場合
                  slideCurrent = 0;
                  changeslide(); // スライド初期値の値を代入して関数実行（初めのスライドに戻す）
                  } else {
                  slideCurrent++;
                  changeslide(); // そうでなければスライド番号を増やして（次のスライドに切り替え）関数実行
                  };
              }, 5000); // 上記動作を3秒毎に
              }
          
              // 「startTimer」関数を止める「stopTimer」関数を定義
              function stopTimer() {
                  clearInterval(Timer); // clearInterval・・・setIntervalで設定したタイマーを取り消す
              }
          
              //////// 自動スライド切り替えタイマーを発動
              startTimer();
  
  });