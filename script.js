setTimeout(()=>{
    animOnScroll();
}, 300);
// document.addEventListener('DOMContentLoaded', animOnScroll);
document.addEventListener("scroll", animOnScroll);
    
function animOnScroll(){
    let animItems = document.querySelectorAll('._animItems');
    if(animItems.length > 0){
        for(let i = 0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight/animStart;

            if(animItemHeight >window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight/animStart;
                 }

                 if((pageYOffset > animItemOffset - animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight)){
                     animItem.classList.add('_active');
                 }else{
                     if(!animItem.classList.contains('_anim-no-hide')){

                     animItem.classList.remove('_active');
                     }
                 }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top:rect.top +scrollTop, left: rect.left+scrollLeft}
    }
}