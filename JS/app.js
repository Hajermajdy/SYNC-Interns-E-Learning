let signin = document.querySelector('.signup span');
let login = document.querySelector('.login span');
let sec2 = document.querySelector('.sec2');
let sec3 = document.querySelector('.sec3');

signin.addEventListener("click",()=>{
    sec2.classList.toggle('notactivity')
    sec3.classList.toggle('activity')
})

login.addEventListener("click", () => {
    sec3.classList.toggle('activity')
    sec2.classList.toggle('notactivity')
})
