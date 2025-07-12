//375px 未満は JS で viewport を固定する
// =============================
(function () {
  const viewport = document.querySelector('meta[name="viewport"]');

  function switchViewport() {
    const value =
      window.outerWidth > 375
        ? "width=device-width,initial-scale=1"
        : "width=375";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

// ハンバーガーボタンとドロワー
jQuery("#js-drawer-icon").on("click", function () {
  jQuery(this).toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
  jQuery("#js-drawer-back").toggleClass("is-checked");
  if (jQuery("#js-drawer-icon").hasClass("is-checked")) {
    // クラスが付いている場合の処理
    // 背景を固定してスクロールさせない
    document.body.style.overflow = "hidden";
  } else {
    // クラスが付いていない場合の処理
    // 背景の固定を解除
    document.body.style.overflow = "auto";
  }
});

jQuery("#js-drawer-content").on("click", function () {
  jQuery("#js-drawer-content").removeClass("is-checked");
  jQuery("#js-drawer-back").removeClass("is-checked");
  jQuery("#js-drawer-icon").removeClass("is-checked");
  document.body.style.overflow = "auto";
});

jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  // idが#ならhtmlをターゲットにする。
  const target = jQuery(id == "#" ? "html" : id);
  // 要素の位置を取得
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" //swing or liner
  );
});

jQuery(window).on("scroll", function () {
  // 100ピクセルを超えてスクロールされた
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});

jQuery(window).on("scroll", function () {
  var scrollY = jQuery(this).scrollTop();
  if (jQuery(window).width() < 900) {
    var transrate = Math.min(100, scrollY / 15);
    jQuery(".p-firstview__img-container.img1").css(
      "transform",
      "translateX(" + transrate + "%)"
    );
    jQuery(".p-firstview__img-container.img1 .p-firstview__img").css(
      "transform",
      "translateX(" + transrate + "%)"
    );
    jQuery(".p-firstview__img-container.img3").css(
      "transform",
      "translateX(-" + transrate + "%)"
    );
    jQuery(".p-firstview__img-container.img3 .p-firstview__img").css(
      "transform",
      "translateX(-" + transrate + "%)"
    );
  } else {
    var scale = Math.min(2, 1 + scrollY / 1000); // スクロール1000pxで scale 1.5
    jQuery(".p-firstview__container-scale").css(
      "transform",
      "scale(" + scale + ")"
    );
  }
});

// img等を下から出現させる
// 動きのきっかけとなるアニメーションの名前を定義
function fadeUpAnime() {
  // ふわっ
  jQuery(".js-fadeUpTrigger").each(function () {
    //fadeUpTriggerというクラス名が
    var elemPos = jQuery(this).offset().top + 0; //要素より、0px上の
    var scroll = jQuery(window).scrollTop();
    var windowHeight = jQuery(window).height();
    if (scroll >= elemPos - windowHeight) {
      jQuery(this).addClass("c-fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
    } else {
      jQuery(this).removeClass("c-fadeUp"); // 画面外に出たらfadeUpというクラス名を外す
    }
  });
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
jQuery(window).on("load", function () {
  fadeUpAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// 画面をスクロールをしたら動かしたい場合の記述
jQuery(window).scroll(function () {
  fadeUpAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

function fadeInAnime() {
  jQuery(".js-fadeInTrigger").each(function () {
    //fadeInTriggerというクラス名が
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 500) {
      jQuery(this).addClass("c-fadeIn");
    } else {
      jQuery(this).removeClass("c-fadeIn");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
jQuery(window).scroll(function () {
  fadeInAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

function fadeCtaAnime() {
  jQuery(".js-fadeCtaTrigger").each(function () {
    //fadeInTriggerというクラス名が
    var scroll = jQuery(window).scrollTop();
    if (500 <= scroll && scroll < 4500) {
      jQuery(this).addClass("c-fadeCta");
    } else {
      jQuery(this).removeClass("c-fadeCta");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
jQuery(window).scroll(function () {
  fadeCtaAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

function fadeInOutAnime2() {
  jQuery(".js-fadeInOutTrigger").each(function () {
    var $this = jQuery(this);
    var elemTop = $this.offset().top;
    var elemBottom = elemTop + $this.outerHeight();
    var scroll = jQuery(window).scrollTop();
    var windowBottom = scroll + jQuery(window).height();

    // elemBottom - xxx早くフェードアウト
    if (elemBottom - 600 > scroll && elemTop + 200 < windowBottom) {
      // 要素が画面内にあるとき
      jQuery(".p-access__background-img").addClass("c-fadeInOut__in");
    } else {
      // 上にも下にも画面外にあるとき
      jQuery(".p-access__background-img").removeClass("c-fadeInOut__in");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
jQuery(window).scroll(function () {
  fadeInOutAnime2(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述
