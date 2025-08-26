export default class ContainerGenerator {
  static generateContainer(tag, className="", html="") {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (html) element.innerHTML = html;

    return element;
  }
}