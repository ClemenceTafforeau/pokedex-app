export function scrollToRefElementBottom(el) {
    el.scrollTo({top: el.scrollHeight, behavior: "smooth"});
}