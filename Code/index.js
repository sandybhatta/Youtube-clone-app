let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

menuIcon.addEventListener('click',()=>{
    
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
    // here after clicking side-bar it will fire smll-sidebar 
    //and .toggle(".---") will make sure that if it small-sdbar
    // it will return back to sidebar.
})
