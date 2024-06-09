const menu_btns = document.querySelectorAll(".menu_btn");

//border bottom white if hover over the button

for (let menu_btn of menu_btns){
    menu_btn.addEventListener("mouseover",(event)=>{
        const target = event.target;
        target.setAttribute("style","border-bottom: 5px white solid");
    });
    menu_btn.addEventListener("mouseout",(event)=>{
        const target = event.target;
        target.setAttribute("style","border-bottom: none;")
    });
}

