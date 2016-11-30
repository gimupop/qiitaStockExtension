$(function() {
  var stock = $('<button class="p-button"><span class="StockButton__label">ストック</span></button>');
  stock.on("click", function(){$($(".StockButton__stock")[0]).click()});
  stock.on("click", function(){$($(".p-button")[0]).click()});
  //この行をコメントアウトすれば、ストックといいねの分割表示
  $(".ArticleMainHeader .LikeButton .p-button").attr("style","display:none");
  $(".ArticleMainHeader .LikeButton").append(stock);
});
