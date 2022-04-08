let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

export default function lazyLoad(node, src){   
    node.style.opacity = '0';                    
    function imageLoaded(){
        node.style.opacity = '1';                        
    }
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            node.src = src                                     
            if (image.complete) {                               
                loaded()        
            } else {
                node.addEventListener('load', imageLoaded)          
            }
        }
    }, options)
    observer.observe(node)                                     
    return {
        destroy() {
            node.removeEventListener('load', imageLoaded)           
        }
    }
}