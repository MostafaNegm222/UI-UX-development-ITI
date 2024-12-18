let img = document.querySelector("#header img")
let list = document.querySelector('#nav');
let cloneImg = img.cloneNode(true)
let mainDiv = document.querySelector(".center")

img.style.cssText = `position:absolute;
                    top:10px;
                    right:10px`

list.style.cssText = `position:absolute;
                        top:50%;
                        left:50%;
                        transform:translate(-50%,-50%)`
list.type = "circle"

mainDiv.append(cloneImg);
cloneImg.style.cssText = `position:absolute;
                            bottom:10px;
                            left:10px;`