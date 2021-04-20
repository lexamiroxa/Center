window.onscroll = function() {ScrollEvent()};
var HeaderMod = document.querySelector('.Header');
var MainElem = document.querySelector('main');

window.addEventListener('resize', function() {
    ScrollEvent();
});

function ScrollEvent() {
    if (window.innerWidth > 768 && document.documentElement.scrollTop > 184) {
        HeaderMod.style.position = 'fixed';
        HeaderMod.style.marginTop = '-184px';
        MainElem.style.paddingTop = '233px';
    } 
    else if (window.innerWidth > 540 && window.innerWidth <= 768 && document.documentElement.scrollTop > 172) {
        HeaderMod.style.position = 'fixed';
        HeaderMod.style.marginTop = '-172px';
        MainElem.style.paddingTop = '222px';
    } 
    else if (window.innerWidth <= 540 && document.documentElement.scrollTop > 74) {
        HeaderMod.style.position = 'fixed';
        HeaderMod.style.marginTop = '-74px';
        MainElem.style.paddingTop = '114px';
    } 
    else {
        HeaderMod.style.position = 'static';
        HeaderMod.style.marginTop = '0';
        MainElem.style.paddingTop = '0';
    }
}

document.querySelector('.NavMore').addEventListener('click', () => {
    document.querySelectorAll('.SecondNavigation')
        .forEach(div => div.classList.toggle('SecondNavigationOpen'));
    document.querySelectorAll('.NavMoreText')
        .forEach(span => span.classList.toggle('NavMoreActive'));
});
    
document.addEventListener('click', (e) => {
    var container = document.querySelector('.Header');
    if (!container.contains(e.target) && document.querySelector('.SecondNavigation').classList.contains('SecondNavigationOpen')) {
        document.querySelectorAll('.SecondNavigation')
            .forEach(div => div.classList.toggle('SecondNavigationOpen'));
        document.querySelectorAll('.NavMoreText')
            .forEach(span => span.classList.toggle('NavMoreActive'));
    }
});