var istatyus = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click",function(){
    if(check == 0){
        istatyus.innerHTML = "Friends"
        istatyus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1
    }else{
        istatyus.innerHTML = "Stranger"
        istatyus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
})

