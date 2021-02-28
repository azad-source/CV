export default (elm, classes = '', text = '', id = '', href = '', title = '') => {
    let element = document.createElement(elm);
    if (classes) element.classList.add(...classes.split(' '));
    if (text) element.textContent = text;
    if (id) element.id = id;
    if (href) element.href = href;
    if (title) element.title = title;
    return element;
}