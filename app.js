


navSlide = () => {
    document.querySelector('.nav-links').style.display = 'flex';
    document.querySelector('.nav-active').style = 'transform: translateX(100%)';

    
}
// func2 = () => {
//     let(nav.classList.toggle('nav-active'));
// }



document.querySelector('.burger').addEventListener('click', navSlide);
// document.querySelector('.nav-links').addEventListener('click'. navSlide);


navSlide();

    // let x = document.querySelector('.nav-links');
    // if (x.className === "nav-links") {
    //     x.className += ""
    // }
