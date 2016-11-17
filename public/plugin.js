(function ($) {
      $.fn.textAnimate=function (options) {
          var defaultSettings = {
              delay:200,
              ease:"fadeIn",
              size:"16px"
          }
          var config = $.extend({}, defaultSettings, options);

          //En este scope this es un objeto jQuery todavia
        //console.log(this);

        var texto = this.text();
        this.text("");
        //console.log(texto);
        /*this.each(function(index, el) {
            $(el).css({
                "color":config.color,
                "opacity":config.opacity,
                "font-size":config.size||"16px"
            });
        });*/
        for (var i = 0, len = texto.length; i < len; i++) {
            $(this)[0].innerHTML+="<i>"+texto[i]+"</i>";
        };
        $(this).find('i').hide();
        //Una vez que encerramos cada caracter en un <i> animamos cada elemento
        //individualmente

        if (config.ease=="fadeIn") {
            var iEl = this.find('i');
            for (var i = 0; i < iEl.length; i++) {
                //iEl[i]
                var delay = config.delay*i;
                $(iEl[i]).css("font-size", config.size);
                $(iEl[i]).delay(delay).fadeIn();
            }
        }else{
            var iEl = this.find('i');
            for (var i = 0; i < iEl.length; i++) {
                //iEl[i]
                if ($(iEl[i]).text()==" ") {
                    $(iEl[i])[0].innerHTML="&nbsp;";
                }
                $(iEl[i]).css("font-size", config.size);
                $(iEl[i]).css("-webkit-animation-delay", (config.delay*i)+"ms");
                $(iEl[i]).addClass('fadeInUpDown');
            }
        }
        return this;
    };
})(jQuery);
/*
$('#animacion p').textAnimate({
    delay:150,
    //ease:"fadeIn"
    size:"54px",
    ease:"fadeInUpDown",
    onComplete:myFunction
});*/