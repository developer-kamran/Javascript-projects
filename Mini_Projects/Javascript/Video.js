const btn=document.querySelector('.switch-btn')
const video=document.querySelector('.video-container')

btn.addEventListener('click',()=>{
    if(!btn.classList.contains('slide')){
            btn.classList.add('slide')
            video.pause()
    }
    else{
        btn.classList.remove('slide')
        video.play()
    }
})

const preLoader=document.querySelector('.preloader')
window.addEventListener('load',()=>{
    preLoader.classList.add('hide-preloader')
})
