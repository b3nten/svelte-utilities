export function copyOnClick(node, el) {
    function copyToClipboard(str) {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(str)
        }
        return Promise.reject('Clipboard API not available')
    };
    node.onclick = () => {
        if (el) {
            copyToClipboard(el.innerText)
        } else {
            copyToClipboard(node.innerText)
        }
    }
    return {
        update(element) { el = element }
    }
}