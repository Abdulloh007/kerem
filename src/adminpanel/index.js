import {SidebarComponent} from '../components/adminpanel/sidebar.js'

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    // Set Sidebar

    const sidebar = document.querySelector('#sidebar');
    sidebar.innerHTML = SidebarComponent;


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