let section =document.querySelector('.three')
let progress = document.querySelectorAll('.progress span')

window.onscroll = () =>{
    if (window.scrollY >= section.offsetTop - 400){
        console.log('section three')
        progress.forEach((span)=>{
            span.style.width = span.dataset.width
        })
    }
}