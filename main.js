$(function() {
  var sutock = $('<button class="p-button"><span class="StockButton__label">ストック</span></button>');
  sutock.on("click", function(){$($(".StockButton__stock")[0]).click()});
  sutock.on("click", function(){$($(".p-button")[0]).click()});
  //この行をコメントアウトすれば、ストックといいねの分割表示
  $(".ArticleMainHeader .LikeButton .p-button").attr("style","display:none");
  $(".ArticleMainHeader .LikeButton").append(sutock);
});
