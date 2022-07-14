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

    //Tabination
    const tabination = document.querySelectorAll('.ek-tabination');

    function activeTabination(elem) {
        const tabNav = elem.querySelector('.ek-tab_navigation'),
        tabBtns = elem.querySelectorAll('.ek-tn__item'),
        tabs = elem.querySelectorAll('.ek-tab');

        tabNav.addEventListener('click', function () {
            for (let i = 0; i < tabBtns.length; i++) {
                if (event.target == tabBtns[i]) {
                    showTab(i);
                }
            }
        })
        showTab(0);
        function showTab(n) {
            tabBtns.forEach((item) => item.classList.remove('active'));
            tabs.forEach((item) => item.classList.remove('active'));
            tabBtns[n].classList.add('active');
            tabs[n].classList.add('active');
        }
    }
    if (tabination !== undefined && tabination !== null) {
        tabination.forEach(item => activeTabination(item));
    }

})