//create auto navbar scrolling
const section=document.querySelectorAll('section')
const navLink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top< offset + height){
            navLink.forEach(links=>{
                links.classlis.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    //create sticky nav bar
 var header=document.querySelector('header')
header.classList.toggle("sticky",window.scrollY>100)

menubar.classList.remove('bx-x')
navbar.classList.remove('active')
};
//create a toggle changer
let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');   
}
//create a text changer
var type=new Typed('.textline',{
    strings:['Fullstack Developer','Frontend Developer','Backend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

//darkmode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}