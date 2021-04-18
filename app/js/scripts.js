window.onscroll = function() {ScrollEvent()};
var HeaderMod = document.querySelector('.Header');
var MainElem = document.querySelector('main');

function ScrollEvent() {
    if (document.body.scrollTop > 184 || document.documentElement.scrollTop > 184) {
        HeaderMod.style.position = 'fixed';
        HeaderMod.style.marginTop = '-184px';
        MainElem.style.paddingTop = '233px'
    } else {
        HeaderMod.style.position = 'static';
        HeaderMod.style.marginTop = '0';
        MainElem.style.paddingTop = '0'
    }
}