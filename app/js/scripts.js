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

document.querySelector('.NavMore').addEventListener('click', () => {
    document.querySelectorAll('.SecondNavigation')
        .forEach(div => div.classList.toggle('SecondNavigationOpen'));
    document.querySelectorAll('.NavMoreText')
        .forEach(span => span.classList.toggle('NavMoreActive'));
});
    
    


// document.addEventListener('click', (evt) => {
//     var HeaderElement = document.querySelector('.Header');
//     let targetElement = evt.target;

//     do {
//         if (targetElement == HeaderElement) {
//             return;
//         }
//         targetElement = targetElement.parentNode;
//     } while (targetElement);

//     document.querySelectorAll('.SecondNavigation')
//         .forEach(div => div.classList.toggle('SecondNavigationOpen'));
//     document.querySelectorAll('.NavMoreText')
//         .forEach(span => span.classList.toggle('NavMoreActive'));
// });