var TGS = {
    "tag": (element) =>{
        if(!element)return console.error('First undeclared value');
        if(typeof element != 'string')return console.error('First value is not a string');
        if(!document.querySelector(element))return console.warn('Nonexistent element');
        var tag;
        if(element == 'body'){
            tag = document.body
        }else {
            tag = document.querySelector(element)
        }
        tag.html = (newHTML) =>{
            if(!newHTML)return tag.innerHTML;
            tag.innerHTML = newHTML
        }

        tag.sumHtml = (newHTML) =>{
            if(!newHTML)return tag.innerHTML;
            tag.innerHTML += newHTML
        }

        tag.generateId = () =>{
            
                let a = Date.now().toString(30)
                let b = Math.random().toString(30).substring(2)
                  
                return a + b
  
        }

        tag.disable = () =>{
            tag.style.visibility = 'hidden'
            tag.style.opacity = 0
        }

        tag.active = () =>{
            if(!tag.style.visibility || !tag.style.opacity)return;
            tag.style.visibility = 'visible'
            tag.style.opacity = 1
        }

        tag.class = (className, type) =>{
            if(!type)return console.warn('Type undeclared');
            switch (type) {
                case 'toggle':
                    tag.classList.toggle(className)
                    break;

                case 'add':
                    tag.classList.add(className)
                    break;

                case 'remove' || 'delete':
                    tag.classList.remove(className)
                    break;
            
                default:
                    tag.classList.add(className)
                    break;
            }
        }

        tag.stylesheet = (func, value) =>{
            if(!func || !value)return console.error('Values undeclared');
            switch (func) {
                case 'background':
                    tag.style.background = value
                    break;

                case 'background-size':
                    tag.style.backgroundSize = value
                    break;

                case 'background-repeat':
                    tag.style.backgroundRepeat = value
                    break;

                case 'background-position':
                    tag.style.backgroundPosition = value
                    break;

                case 'background-image':
                    tag.style.backgroundImage = value
                    break;
            
                case 'color':
                    tag.style.color = value
                    break;

                case 'font-family':
                    tag.style.fontFamily = value
                    break;

                case 'font-weight':
                    tag.style.fontWeight = value
                    break;

                case 'font-size':
                    tag.style.fontSize = value
                    break;

                case 'font':
                    tag.style.font = value
                    break;

                case 'padding':
                    tag.style.padding = value
                    break;

                case 'margin':
                    tag.style.margin = value
                    break;

                case 'display':
                    tag.style.display = value
                    break;

                case 'overflow':
                    tag.style.overflow = value
                    break;

                case 'transition':
                    tag.style.transition = value
                    break;

                case 'visibility':
                    tag.style.visibility = value
                    break;

                case 'opacity':
                    tag.style.opacity = value
                    break;

                case 'justify-content':
                    tag.style.justifyContent = value
                    break;

                case 'align-items':
                    tag.style.alignItems = value
                    break;

                case 'align-content':
                    tag.style.alignContent = value
                    break;

                case 'flex-direction':
                    tag.style.flexDirection = value
                    break;

                case 'flex-wrap':
                    tag.style.flexWrap = value
                    break;

                case 'position':
                    tag.style.position = value
                    break;

                case 'top':
                    if(!tag.style.position)return console.warn('Position undeclared (yourElement.stylesheet("position", "absolute / relative"))');
                    tag.style.top = value
                    break;

                case 'left':
                    if(!tag.style.position)return console.warn('Position undeclared (yourElement.stylesheet("position", "absolute / relative"))');
                    tag.style.left = value
                    break;

                case 'right':
                    if(!tag.style.position)return console.warn('Position undeclared (yourElement.stylesheet("position", "absolute / relative"))');
                    tag.style.right = value
                    break;

                case 'bottom':
                    if(!tag.style.position)return console.warn('Position undeclared (yourElement.stylesheet("position", "absolute / relative"))');
                    tag.style.bottom = value
                    break;

                case 'width':
                    tag.style.width = value
                    break;

                case 'height':
                    tag.style.height = value
                    break;

                default:
                    console.warn('"' + func + '" no exist')
                    break;
            }
        }

        tag.elementPush = (element, id, classes) =>{
            if(!classes || !id)return document.createElement(element);
            var classis = classes.split(' ')
            classis.push(tag.generateId())

            var gm1rrrqplphagmcpd = document.createElement(element)
            for(let i = 0; i < classis.length; i++){
                gm1rrrqplphagmcpd.classList.add(classis[i])
                if(i >= classis.length-1){
                    gm1rrrqplphagmcpd.id = id
                    tag.appendChild(gm1rrrqplphagmcpd)
                }
            }
        }
        return tag;
    },
}