import {HeaderComponent} from "./src/components/header.js";
import {FooterComponent} from "./src/components/footer.js";


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const header =  document.querySelector('#header');
    const footer =  document.querySelector('#footer');
    header.innerHTML = HeaderComponent; 
    footer.innerHTML = FooterComponent;
    
    //ScrollTop Fixed menu
    const nav = document.querySelectorAll('.ek-nav');
    
    window.addEventListener('scroll', ()=>{
        if (document.documentElement.scrollTop > 80) {
            nav.forEach(item => item.classList.add('fix'));
        }else {
            nav.forEach(item => item.classList.remove('fix'));
        }
    });
    
    // Mobile Menu Srcipt
    if(window.innerWidth <= 768) {
        const sideBar = document.querySelector('.ek-m-menu'),
        sideBarOverlay = document.querySelector('.ek-menu_overlay'),
        sideBarBtn = document.querySelector('.ek-humburger');
    
        sideBarBtn.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                sideBar.classList.remove('open');
                sideBarOverlay.classList.remove('open');
                sideBarOverlay.style.display = 'none'
                document.documentElement.style.overflow = ''
            }
            else {
                this.classList.add('active');
                sideBar.classList.add('open');
                sideBarOverlay.classList.add('open');
                sideBarOverlay.style.display = '';
                document.documentElement.style.overflow = 'hidden'
            }
        });
        
    }
    
    //PopUp`s
    let popUpBtns = document.querySelectorAll('.ek-pop_up-btn'),
    popUps = document.querySelectorAll('.ek-pop_up');
    
    function popUper(elem) {
        popUps.forEach((item) => {
            const closeBtn = item.querySelector('.fa-close');
            closeBtn.addEventListener('click', function () {
                item.classList.remove('active');
            })
        });
        elem.addEventListener('click', function () {
            for (let i = 0; i < popUps.length; i++) {
                if (elem.id == popUps[i].dataset.target) {
                    popUps[i].classList.add('active');
                }
            }
        })
    }
    if (popUpBtns != undefined && popUps != undefined) {
        popUpBtns.forEach((item) =>  popUper(item));
    }

})