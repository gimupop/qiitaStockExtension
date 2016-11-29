$(function() {
  var sutock = $('<button class="p-button"><span class="StockButton__label">ストック</span></button>');
  sutock.on("click", function(){$($(".StockButton__stock")[0]).click()});
  //sutock.attr("style","position:absolute;")
  $(".ArticleMainHeader .LikeButton").append(sutock);
});
