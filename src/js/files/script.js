// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//========================================================================================================================================================


window.addEventListener('click', (e) => {
    const buttonSearch = document.querySelector('.search-menu');
    const click = e.composedPath().includes(buttonSearch);
    console.log(click);
    if (innerWidth >= 1200) {
        if (!click) {
            buttonSearch.classList.remove('active');
        } else {
            buttonSearch.classList.add('active');
        }
    }
});


