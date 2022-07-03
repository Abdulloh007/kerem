export const HeaderComponent = `
    <nav class="ek-laptop ek-nav">
        <div class="ek-container">
            <div class="ek-row ek-jc-sb ek-alt-center">
                <div class="ek-logo">
                    <img src="./assets/svg/logo.svg" alt="Logo">
                </div>
                <ul class="ek-menu ek-dfw ek-alt-center ek-jc-sb">
                    <li><a href="#">Тарифы</a></li>
                    <li><a href="#">Для кого</a></li>
                    <li><a href="#">Возможности</a></li>
                </ul>
                <div class="ek-auth">
                    <button class="ek-btn ek-success invert">Вход</button>
                    <button id="sign_up" class="ek-btn ek-success ek-pop_up__btn">Регистрация</button>
                </div>
            </div>
        </div>
    </nav>
    <nav class="ek-mobile ek-nav">
        <div class="ek-container">
            <div class="ek-row ek-position_relative ek-alt-center ek-jc-sb">
                <div class="ek-logo">
                    <img src="./assets/svg/logo.svg" alt="Logo">
                </div>
                <button class="ek-menu__collapse_btn ek-dfw ek-alt-center ek-jc-c"><span class="ek-humburger"></span></button>
                <ul class="ek-menu mobile">
                    <li><a href="#">Тарифы</a></li>
                    <li><a href="#">Для кого</a></li>
                    <li><a href="#">Возможности</a></li>
                    <li><a href="#">Вход</a></li>
                    <li><a href="#">Регистрация</a></li>
                </ul>
            </div>
        </div>
    </nav>
`;