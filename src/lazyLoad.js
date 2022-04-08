let options = {
    root: null,
    rootMargin: "250px",
    threshold: 0
}
export function lazyLoad(node, src){   
    node.style.opacity = '0';                 
    function imageLoaded(){
        node.style.opacity = '1'; 
        observer.unobserve(node)                     
    }

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            node.src = src                                     
            if (node.complete) {                               
                imageLoaded()        
            } else {
                node.addEventListener('load', imageLoaded)          
            }
        }
    }, options)
    observer.observe(node)                                     
    return {
        destroy() {
            node.removeEventListener('load', imageLoaded) 
            observer.unobserve(node)          
        }
    }
}