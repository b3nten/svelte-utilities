export function intersectionObserver(node, params={}){
    const marginTop = params.marginTop? params.marginTop : '0px'
    const marginBottom = params.marginBottom? params.marginBottom : '0px'
    const threshold = params.threshold? params.threshold : 0
    let options = {
        root: null,
        rootMargin: '-'+ marginTop + " 0px " + '-'+marginBottom + " 0px" ,
        threshold: threshold,
    }
    const handler = (e)=>{
        let event = e[0].isIntersecting ? "enter":"exit"
        node.dispatchEvent(new CustomEvent(event, {detail: {node: node}}))
    }
  
    let observer = new IntersectionObserver(handler, options)
    observer.observe(node)
    return {
        destroy(){if(observer){observer.unobserve(node)}}
    }
}