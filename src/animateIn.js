export function animateIn(node, { margin = '0px', duration = 500, delay = 500 } = {}) {
    let options = {
        root: null,
        rootMargin: "0px 0px " + margin + " 0px",
        threshold: 0,
    }
    node.style.transition = 'none'
    node.style.opacity = '0'
    node.style.transform = 'translateY(50px)'
    setTimeout(() => {
        node.style.transition = 'all'
        node.style.transitionDuration = duration + 'ms'
    }, 1)
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            setTimeout(() => {
                node.style.opacity = '1'
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