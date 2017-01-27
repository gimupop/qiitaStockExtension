$(function() {
    //toggleの代替
    $.fn.clickToggle = function(a, b) {
        return this.each(function() {
            var clicked = false;
            $(this).on('click', function() {
                clicked = !clicked;
                if (clicked) {
                    return a.apply(this, arguments);
                }
                return b.apply(this, arguments);
            });
        });
    };

    //いいね→ストックの変更
    var isStock = $(".col-sm-9 .StockButton__unstock");

    if (isStock.length) {
        var stock = $('<button class="p-button liked"><span class="fa fa-fw fa-check"></span><span>ストック</span></button>');
        stock.clickToggle(
            function() {
                $(".ArticleMainHeader .LikeButton .p-button.liked").attr("class", "p-button");
                $(".ArticleMainHeader .LikeButton .p-button .fa.fa-fw.fa-check").attr("style", "display:none");
            },
            function() {
                $(".ArticleMainHeader .LikeButton .p-button").attr("class", "p-button  liked");
                $(".ArticleMainHeader .LikeButton .p-button .fa.fa-fw.fa-check").removeAttr("style", "display:none");
            });
    } else {
        var stock = $('<button class="p-button"><span class="fa fa-fw fa-check" style = "display:none"></span><span>ストック</span></button>');
        stock.clickToggle(
            function() {
                $(".ArticleMainHeader .LikeButton .p-button").attr("class", "p-button  liked");
                $(".ArticleMainHeader .LikeButton .p-button .fa.fa-fw.fa-check").removeAttr("style", "display:none");
            },
            function() {
                $(".ArticleMainHeader .LikeButton .p-button.liked").attr("class", "p-button");
                $(".ArticleMainHeader .LikeButton .p-button .fa.fa-fw.fa-check").attr("style", "display:none");
            });
    }

    $(".col-sm-9 .StockButton__stock").on("click",
        function() {
            $(".ArticleMainHeader .LikeButton .p-button").attr("class", "p-button  liked");
            $(".ArticleMainHeader .LikeButton .p-button .fa.fa-fw.fa-check").removeAttr("style", "display:none");
        });
    $(".col-sm-9 .StockButton__unstock").on("click",
        function() {
            $(".ArticleMainHeader .LikeButton .p-button.liked").attr("class", "p-button");
            $(".ArticleMainHeader .LikeButton .p-button .fa.fa-fw.fa-check").attr("style", "display:none");
        });

    stock.on("click", function() {
        $($(".StockButton__stock")[0]).click();
    });

    $(".ArticleMainHeader .LikeButton .p-button").attr("style", "display:none");
    $(".ArticleMainHeader .LikeButton").append(stock);

    //ストック→いいねの変更
    var isIine = $(".col-sm-9 .p-button.liked");
    if (isIine.length) {
        var iine = $('<div class="StockButton"><button class="StockButton__stock" type="submit"><div class="fa-stack fa-lg"><span class="fa fa-fw fa-check""></span></div><span class="StockButton__label">いいね</span></button><div>');
        iine.attr("style", "color:#79b74a");
        iine.clickToggle(
            function() {
                $(".u-flex.u-space-between .fa.fa-fw.fa-check").attr("class", "fa fa-fw fa-thumbs-up");
                iine.removeAttr("style", "color:#79b74a");
            },
            function() {
                $(".u-flex.u-space-between .fa.fa-fw.fa-thumbs-up").attr("class", "fa fa-fw fa-check");
                iine.attr("style", "color:#79b74a");
            });
    } else {
        var iine = $('<div class="StockButton"><button class="StockButton__stock" type="submit"><div class="fa-stack fa-lg"><span class="fa fa-fw fa-thumbs-up"></span></div><span class="StockButton__label">いいね</span></button><div>');
        iine.clickToggle(
            function() {
                $(".u-flex.u-space-between .fa.fa-fw.fa-thumbs-up").attr("class", "fa fa-fw fa-check");
                iine.attr("style", "color:#79b74a");
            },
            function() {
                $(".u-flex.u-space-between .fa.fa-fw.fa-check").attr("class", "fa fa-fw fa-thumbs-up");
                iine.removeAttr("style", "color:#79b74a");
            });

    }
    iine.on("click", function() {
        $($(".p-button")[0]).click();
    });

    $(".col-sm-9 .LikeButton .p-button").on("click",
        function() {
            if ($(this).hasClass("liked")) {
                $(".u-flex.u-space-between .fa.fa-fw.fa-check").attr("class", "fa fa-fw fa-thumbs-up");
                iine.removeAttr("style", "color:#79b74a");
            } else {
                $(".u-flex.u-space-between .fa.fa-fw.fa-thumbs-up").attr("class", "fa fa-fw fa-check");
                iine.attr("style", "color:#79b74a");
            }
        });


    $('.u-flex.u-space-between .StockButton__stock').attr("style", "display:none");
    $('.u-flex.u-space-between .StockButton__unstock').attr("style", "display:none");
    $('.u-flex.u-space-between .StockButton.StockButton--stocked').attr("style", "display:none");
    $('.u-flex.u-space-between .ArticleAsideHeader__stock').append(iine);

});
