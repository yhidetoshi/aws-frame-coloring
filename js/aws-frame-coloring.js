String.prototype.toRGBCode = (function () {

  var strToRGBCode = function () {
    return rgbToRGBCode(strToRGB(this));
  };
}());

(function() {
  'use strict';

  var background = ""
  var stg = 'stg'
  var dev = 'dev'
  var prd = 'prd

  // ブラウザからアカウントを取得
  var account = document.querySelector("#nav-usernameMenu .nav-elt-label").textContent;

  // dev環境 darkblue
  else if(account.indexOf(dev) > -1){
    background = `#00008B`;
  }
  // stg環境 darkgreen
  else if(account.indexOf(stg) > -1){
    background = `#006400`;
  }
  // prd環境 darkred
  else if(account.indexOf(prd) > -1){
    background = `#8B0000`;

  }else{
    background = `#232F3E`;
  }

  var selectors = ["#nav-menubar", "#nav-menu-right", "#console-nav-footer"];
  selectors.forEach(function(s) {
    document.querySelector(s).style.background = background;
  })

  var e = document.querySelectorAll(".nav-menu");
  for (var i = 0; i < e.length; i++) {
    e[i].style.background = background;
  }
})();
