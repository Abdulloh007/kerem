export const SidebarComponent = `
    <div class="ek-sidebar__wrap">
        <div class="ek-sidebar__logo ek-dfw ek-jc-center">
            <img src="/assets/svg/adminpanel/logo.svg" alt="Logo">
        </div>
        <div class="ek-sidebar__help ek-dfw ek-alt-center">
            <a href="#" class="ek-sh__profile">
                <img src="/assets/img/default_ursers.png" alt="user">
            </a>
            <a href="#" class="ek-sh__support">
                <img src="/assets/svg/support.svg" alt="">
            </a>
            <a href="#" class="ek-sh__notices">
                <img src="/assets/svg/notice.svg" alt="">
            </a>
            <div class="ek-sh__collapse_btn">
                <img src="/assets/svg/angle.svg" alt="">
            </div>
        </div>
        <nav class="ek-sidebar__navigation">
            <a href="../dashboard/dashboard.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/home.svg" alt="">
                <p>Главная</p>
            </a>
            <a href="../sales/sales.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/sales.svg" alt="">
                <p>Продажи</p>
            </a>
            <a href="../custom/custom.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/custom.svg" alt="">
                <p>Закупки</p>
            </a>
            <a href="../storage/storage.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/storage.svg" alt="">
                <p>Склад</p>
            </a>
            <a href="../cash__and__bank/cash__and__bank.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/cash.svg" alt="">
                <p>Касса и банк</p>
            </a>
            <a href="../retail/retail.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/retail.svg" alt="">
                <p>Розница</p>
            </a>
            <a href="../production/production.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/production.svg" alt="">
                <p>Производство</p>
            </a>
            <a href="../integration/integration.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/integration.svg" alt="">
                <p>Интеграции</p>
            </a>
            <a href="../reports/reports.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/reports.svg" alt="">
                <p>Отчёты</p>
            </a>
            <a href="../site__setup/site__setup.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/site_setup.svg" alt="">
                <p>Настройки сайта</p>
            </a>
            <a href="../account__setup/account__setup.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/account_setup.svg" alt="">
                <p>Настройки учётной системы</p>
            </div>
            <a href="../server__setup/server__setup.html" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/server__setup.svg" alt="">
                <p>Админ <br>
                    панель сервера</p>
            </a>
            <a href="#" class="ek-sn__item ek-dfw">
                <img src="/assets/svg/adminpanel/exit.svg" alt="">
                <p>Выход</p>
            </a>
        </nav>
    </div>
`;