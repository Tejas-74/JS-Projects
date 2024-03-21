
const btn = document.querySelector("#throttle");
 
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector("#center")
.addEventListener("mousemove",throttleFunction((dets) => {

        var div = document.createElement("div")
        div.classList.add('imagediv')
        div.style.left = dets.clientX+'px'
        div.style.top = dets.clientY+'px'

        var img = document.createElement("img")
        img.setAttribute("src", "https://images.unsplash.com/photo-1710790095456-6b122a198033?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D") 
        div.appendChild(img)

        document.body.appendChild(div);

        setTimeout(function(){
            div.remove()
        }, 2000)
        
    }, 500));