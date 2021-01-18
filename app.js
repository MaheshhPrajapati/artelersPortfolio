AOS.init();

new kursor({
    type: 5,
    removeDefaultCursor: true
});

window.addEventListener('scroll', (e) => {
    if(window.scrollY > window.innerHeight / 3){
        document.body.classList.add('bg-color');
    }else{
        document.body.classList.remove('bg-color');
    }
})
