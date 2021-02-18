const loginParent = document.getElementById("parentLogin")
const illus = document.getElementById("illustration")
const form = document.getElementById("formlogin")

window.addEventListener("resize", ()=>{
    if (window.innerWidth < 1200) {
        illus.classList.add('d-none')
        loginParent.classList.remove("w-75")
        form.classList.remove("w-50")

    }else{
        illus.classList.remove('d-none')
        loginParent.classList.add("w-75")
        form.classList.add("w-50")
    }
});

window.addEventListener("load", ()=>{
    if (window.innerWidth < 1200) {
        illus.classList.add('d-none')
        loginParent.classList.remove("w-75")
        form.classList.remove("w-50")
    }else{
        illus.classList.remove('d-none')
        loginParent.classList.add("w-75")
        form.classList.add("w-50")
    }
});