//const header = document.querySelector("header");

//window.addEventListener ("scroll", function(){
    //header.classList.toggle ("sticky", this.window.scrollY > 0);
//})

//let menu = document.querySelector('#menu-icon');
//let navmenu = document.querySelector('.navmenu');

//menu.onclick = () => {
    //menu.classList.toggle('bx-x');
    //navmenu.classList.toggle('open');
//}

//STARS

const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
    star.addEventListener("click",() => {
        stars.forEach((star,index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    });
});

const stars1 = document.querySelectorAll(".stars1 i");

stars1.forEach((star, index1) => {
    star.addEventListener("click",() => {
        stars1.forEach((star,index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    });
});

const stars2 = document.querySelectorAll(".stars2 i");

stars2.forEach((star, index1) => {
    star.addEventListener("click",() => {
        stars2.forEach((star,index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    });
});

const stars3 = document.querySelectorAll(".stars3 i");

stars3.forEach((star, index1) => {
    star.addEventListener("click",() => {
        stars3.forEach((star,index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    });
});

const stars4 = document.querySelectorAll(".stars4 i");

stars4.forEach((star, index1) => {
    star.addEventListener("click",() => {
        stars4.forEach((star,index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    });
});

const stars5 = document.querySelectorAll(".stars5 i");

stars5.forEach((star, index1) => {
    star.addEventListener("click",() => {
        stars5.forEach((star,index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    });
});

const stars6 = document.querySelectorAll(".stars6 i");

stars6.forEach((star, index1) => {
    star.addEventListener("click",() => {
        stars6.forEach((star,index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    });
});

const stars7 = document.querySelectorAll(".stars7 i");

stars7.forEach((star, index1) => {
    star.addEventListener("click",() => {
        stars7.forEach((star,index2) =>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    });
});

//STARS

//HEART