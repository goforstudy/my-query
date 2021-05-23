window.jquery = function (selectorOrArray) {
    let elements;
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray);
    } else {
        elements = selectorOrArray;
    }
    return {
        oldAPI: selectorOrArray.oldAPI,
        addClass(className){
            for(let i = 0; i < elements.length; i++){
                elements[i].classList.add(className)
            }
            // return api;//实现链式操作
            return this;//实现链式操作
        },
        find(selector){
            let array = [];
            for(let i = 0; i < elements.length; i++){
                // array = array.concat(
                //     elements[i].querySelectorAll(selector)
                // )
                const elements2 = Array.from(
                    elements[i].querySelectorAll(selector)
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
        }
    }
}