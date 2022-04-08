export function outClick(node) {
	const handleClick = (event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent("outClick"));
		}
	};
	document.addEventListener("click", handleClick, true);
	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}
