var krpano = document.getElementById("krpanoSWFObject");
facebook = function () {
  var title = "Your page title";
  var url = krpano.get('facebook');
  var shareUrl = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url) + "&t=" + encodeURIComponent(title);
  window.open(shareUrl, "", "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, width=600, height=500");
};
