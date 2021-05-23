window.jquery = function (selectorOrArray) {
    let elements;
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray);
    } else {
        elements = selectorOrArray;
    }
    const api = Object.create(jquery.prototype);
    api.elements = elements;
    api.oldAPI = selectorOrArray.oldAPI;
    return api;
}
jquery.prototype = {
    constructor: jquery,
    addClass(className){
        for(let i = 0; i < this.elements.length; i++){
            this.elements[i].classList.add(className)
        }
        // return api;//实现链式操作
        return this;//实现链式操作
    },
    find(selector){
        let array = [];
        for(let i = 0; i < this.elements.length; i++){
            // array = array.concat(
            //     this.elements[i].querySelectorAll(selector)
            // )
            const elements2 = Array.from(
                this.elements[i].querySelectorAll(selector)
            );
            array = array.concat(elements2)
        }
        array.oldAPI = this;// 旧api
        return jquery(array);
    },
    // 实现api返回上一级
    end(){
        // console.log(this.oldAPI)
        return this.oldAPI;
    },
    each(fn){
        for(let i = 0; i < this.elements.length; i++){
            fn.call(null, this.elements[i], i)
        }
        return this
    },
    parent(){
        const array = [];
        this.each((node) => {
           array.includes(node.parentNode) ? '': array.push(node.parentNode);
        });
        return jquery(array)
    },
    children (){
        const array = [];
        this.each((node) => {
           array.includes(node.children) ? '': array.push(...node.children);
        });
        return jquery(array)
    },
    print(){
        console.log(this.elements)
    }
}
window.$ = window.jquery;