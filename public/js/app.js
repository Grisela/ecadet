const assignment = document.getElementById("assignmentBlock");
const navGet = document.getElementById("navGet")
const content = document.getElementById("mainContent");
const parent = document.getElementById("parent")

    window.addEventListener("resize", ()=>{
        if (window.innerWidth < 1200) {
            assignment.classList.add('d-none')
            assignment.classList.remove('w-25')
            content.classList.remove('w-75')
            navGet.classList.remove('w-75')
            parent.classList.remove('w-75')
        } else {
            assignment.classList.remove('d-none')
            assignment.classList.add('w-25', 'pe-4')
            content.classList.add('w-75', 'pe-4')
            navGet.classList.add('w-75')
            parent.classList.add('w-75')
            
            
        }
      });

    window.addEventListener("load", ()=>{
        if (window.innerWidth < 1200) {
            assignment.classList.add('d-none')
            assignment.classList.remove('w-25')
            content.classList.remove('w-75', 'pe-4')
            navGet.classList.remove('w-75')
            parent.classList.remove('w-75')
            
        } else {
            assignment.classList.remove('d-none')
            assignment.classList.add('w-25')
            content.classList.add('w-75', 'pe-4')
            navGet.classList.add('w-75')
            parent.classList.add('w-75')
            illus.classList.remove('d-none')
            loginParent.classList.add("w-75")
        }
    })
