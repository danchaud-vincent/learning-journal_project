const sidebarBtn = document.getElementById("sidebarBtn")
const closeSidebarBtn = document.getElementById("closeSidebarBtn")
const btnArticles = document.getElementById("btn-articles")

sidebarBtn.addEventListener("click", function(){
    document.querySelector(".header-sidebar-small-screen").classList.toggle("hidden")
})

closeSidebarBtn.addEventListener("click", function(){
    document.querySelector(".header-sidebar-small-screen").classList.toggle("hidden")
})

btnArticles.addEventListener("click", function(){
    
    document.getElementById("more-articles").classList.toggle("hidden")

    if ( document.getElementById("more-articles").classList.contains("hidden")){
        btnArticles.textContent = "View more"
    }
    else{
        btnArticles.textContent = "View less"
    }
})