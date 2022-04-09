export function intersectionObserver(node, {marginTop='0px', marginBottom='0px', threshold=0}={}){
    let options = {
        root: null,
        rootMargin: '-'+ marginTop + " 0px " + '-'+marginBottom + " 0px" ,
        threshold: threshold,
    }
    const handler = (e)=>{
        let event = e[0].isIntersecting ? "inView":"outView"
        node.dispatchEvent(new CustomEvent(event, {detail: {node: node}}))
    }
  
    let observer = new IntersectionObserver(handler, options)
    observer.observe(node)
    return {
        destroy(){if(observer){observer.unobserve(node)}}
    }
}