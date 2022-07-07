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
    
    window.addEventListener('scroll', ()=> {
        if (document.body.scrollTop > 80) {
            nav.forEach(item => item.classList.add('fix'));
        }else {
            nav.forEach(item => item.classList.remove('fix'));
        }
    });
    window.addEventListener('resize', () => goAdaptive())
    // Mobile Menu Srcipt
    function goAdaptive() {
        if(window.innerWidth <= 992) {
            const sideBar = document.querySelector('.ek-menu.mobile'),
            sideBarBtn = document.querySelector('.ek-menu__collapse_btn'),
            defaultHeight = sideBar.offsetHeight;
            
            sideBar.style.height = 0;
            sideBar.style.padding = 0;
    
    
            sideBarBtn.addEventListener('click', function () {
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    sideBar.style.height = 0;
                    sideBar.style.padding = 0;
                }
                else {
                    this.classList.add('active');
                    sideBar.style.height = defaultHeight + 'px';
                    if(window.innerWidth <= 992 && window.innerWidth > 768) {
                        sideBar.style.padding = '105px 180px';
                    }else {
                        sideBar.style.padding = '60px 5px';
    
                    }
                }
            });
            
        }
    }
    goAdaptive();
    
    //PopUp`s
    let popUpBtns = document.querySelectorAll('.ek-pop_up__btn'),
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