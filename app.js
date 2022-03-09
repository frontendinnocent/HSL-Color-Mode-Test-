const toggleBtn = document.querySelector(".toggle-theme");
// console.log(toggleBtn);

const body = document.body;
// console.log(body);



function switchTheme(){
    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode");
        toggleBtn.textContent="Dark Mode"
    }else{
        body.classList.add("dark-mode");
        toggleBtn.textContent= "Light Mode"
    }
}

toggleBtn.addEventListener("click", switchTheme)