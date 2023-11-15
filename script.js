function skip() {
    window.alert("huh");
setInterval(() => {
    if(document.getElementsByClassName("video-ads")[0].innerHTML !=="") {
        var banner = false;
        for(var i = 0; i < document.getElementsByClassName("ytp-ad-overlay-close-button").length; i++) {
            document.getElementsByClassName("ytp-ad-overlay-close-button")[i].click(); banner = true;
        }
        if(banner === false) {
            document.getElementsByClassName("html5-main-video")[0].currentTime = document.getElementsByClassName("html5-main-video")[0].duration;
            try {document.getElementsByClassName("ytp-ad-skip-button")[0].click();}
            catch (err) {document.getElementsByClassName("ytp-ad-skip-button-modern ytp-button")[0].click();}
        }
    }
}, 100)
    window.alert("huh");
}
