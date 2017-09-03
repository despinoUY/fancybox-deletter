setTimeout(function(){

  $body = document.body;
  $divs = $body.getElementsByTagName('div');
  $divs_q = $divs.length;

  for (var i = 0; i < $divs_q; i++) {
    if ($divs[i] != undefined){
      if ($divs[i].className != undefined){
        if ($divs[i].className.toLowerCase() == "fancybox-overlay fancybox-overlay-fixed"){
          $divs[i].parentNode.removeChild($divs[i]);
        };
      };
    };
  };

  $html = document.documentElement;
  $html.classList.remove('fancybox-margin');
  $html.classList.remove('fancybox-lock');

},7000);
