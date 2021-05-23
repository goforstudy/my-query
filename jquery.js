window.jquery = function (selector) {
    const elements = document.querySelectorAll(selector);
    return {
        addClass(className){
            for(let i = 0; i < elements.length; i++){
                elements[i].classList.add(className)
            }
            // return api;//实现链式操作
            return this;//实现链式操作
        }
    }
}