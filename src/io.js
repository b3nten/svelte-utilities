export default function IO(node, m){
    const margin = "" + (m? m * -1 : 0) + "px 0px " + (m? m * -1 : 0)+ "px 0px" 
    let options = {
        root: null,
        rootMargin: margin,
        threshold: 0,
    }
    const handler = (e)=>{
        let event = e[0].isIntersecting ? "enter":"exit"
        node.dispatchEvent(new CustomEvent(event, {detail: {node: node}}))
    }
  
    let observer = new IntersectionObserver(handler, options)
    observer.observe(node)
    return {
        destroy(){if(observer){observer.disconnect()}}
    }
}