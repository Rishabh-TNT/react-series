function customRender(element, container) {
    const tag = document.createElement(element.tag);
    tag.innerHTML = element.Children;
    for (const prop in element.props) {
        if (!Object.hasOwn(element.props, prop)) continue;
        tag.setAttribute(prop, element.props[prop])
    }
    container.appendChild(tag)
}


const reactElement = {
    'tag': 'a',
    props: {
        href: 'www.google.com',
        target: '_blank'
    },
    Children: 'Click to visit google'
}




const root = document.querySelector('#root')

customRender(reactElement, root)