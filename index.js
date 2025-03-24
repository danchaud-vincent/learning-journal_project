const sidebarBtn = document.getElementById("sidebarBtn")
const closeSidebarBtn = document.getElementById("closeSidebarBtn")


sidebarBtn.addEventListener("click", function(){
    document.querySelector(".header-sidebar-small-screen").classList.toggle("hidden")
})

closeSidebarBtn.addEventListener("click", function(){
    document.querySelector(".header-sidebar-small-screen").classList.toggle("hidden")
})