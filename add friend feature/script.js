let isStatus=document.querySelector("h5")
let btn =document.querySelector("#add")
let check=0

btn.addEventListener('click', function(){
    if(check ==0){
    isStatus.innerHTML="Friends"
    isStatus.style.color="green"
    btn.innerText="Remove"
    check=1
}else{
    isStatus.innerHTML="Stranger"
    isStatus.style.color="red"
    btn.innerText="Add"
    check=0
}
})

