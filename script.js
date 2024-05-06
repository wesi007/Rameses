//tab navigation horizontal scroll buttons
const buttonleft = document.querySelector(".left-btn");
const buttonright = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

buttonright.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
})

buttonleft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
})

window.onload = function(){
    buttonright.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth == 0 ? "block" : "none";
    buttonleft.style.display >= window.innerWidth ? "" : "none";
}

window.onresize = function(){
    buttonright.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth == 0 ? "block" : "none";
    buttonleft.style.display >= window.innerWidth ? "" : "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft);

    buttonleft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

// tab navigation draggable

let activeDrag = false; 

tabMenu,addEventListener("mousemove", (drag) =>{
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
})

document.addEventListener("mouseup", () =>{
    activeDrag = false;
})

tabMenu.addEventListener("mousedown", () =>{
    activeDrag = true;
})


// to view tab content on click tab butttons 
const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function (tabBtnClick){
    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active")
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () =>{
        tab_Nav(i);
    })
})
