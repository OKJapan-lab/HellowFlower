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
    jQuery(".p-firstview__container-scale").css("transform", "scale(" + scale + ")");
  }
});
