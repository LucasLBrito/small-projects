const menu =document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar_menu')
const navlogo=document.querySelector('.navbar_logo');

//display mobile menu

const mobilemenu = () => {
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
}
//esta função adiciona esta metodo para c1uando ocorrer um click 
menu.addEventListener('click',mobilemenu);


//Show active menu when scrolling
const highlightmenu=()=>{
    const elem = document.querySelector('.highlight');
    const homemenu =document.querySelector('#home-page');
    const aboutmenu=document.querySelector('#about-page');
    const servicesMenu=document.querySelector('#services-page');
    let scrollpos =window.scrollY

    //adiciona "highlight" class para os items do menu
    if(window.innerWidth >960 && scrollpos< 600){
        homemenu.classList.add('highlight')
        aboutmenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth >960 && scrollpos<1400){
        aboutmenu.classList.add('highlight')
        homemenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth >960 && scrollpos<2340){
        servicesMenu.classList.add('highlight') 
        aboutmenu.classList.remove('highlight')
        homemenu.classList.remove('highlight')
        return
    }

    if((elem&& window.innerWidth <960 &&scrollpos<600)|| elem){
        elem.classList.remove.apply('highlight')
    }
}

window.addEventListener('scroll',highlightmenu);
window.addEventListener('click',highlightmenu)

//close mobile Menu when clicking on a menu item
const hidemobilemenu= () =>{
    const menuBars =document.querySelector('.is-active');
    if(window.innerWidth<= 768 && menuBars){
        menu.classList.toggle('is-active')
        menulinks.classList.remove('active')
    }
};

menulinks.addEventListener('click',hidemobilemenu);
navlogo.addEventListener('click',hidemobilemenu);