export function animateIn(node, params={}){  
    const margin = params.margin? params.margin : '0px'
    const delay = params.delay? params.delay : 250
    const duration = params.duration? params.duration+'ms' : '500ms'
    let options = {
        root: null,
        rootMargin: "0px 0px " + margin + " 0px" ,
        threshold: 0,
    }
    node.style.opacity = '0';
    node.style.transform = 'translateY(50px)' 
    node.style.transition = 'all'      
    node.style.transitionDuration = duration
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            setTimeout(()=>{
                node.style.opacity = '1';  
                node.style.transform = 'translateY(0%)'
            }, delay)
            observer.unobserve(node)                                 
        }
    }, options)
    observer.observe(node)                                     
    return {
        destroy() {
            observer.unobserve(node)           
        }
    }
}