if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
} else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
  video.muted = true;
} else if (navigator.getAutoplayPolicy("mediaelement") === "disallowed") {
}
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() 
  }
  document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('ID').play();
    document.removeEventListener('click', musicPlay);
}
