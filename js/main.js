let listOptions = document.querySelector('.section__options');
let options = listOptions.querySelectorAll('img');

for (let option of options){
    option.addEventListener('click', () => {
        let color = option.dataset.color;
        document.body.style.backgroundColor = `${color}`;
        if(color == '#E60C2D'){
            document.querySelector('.sectionOne__image').setAttribute('src', 'images/pepsi002.png');
        } else if(color == '#1F1E1F'){
            document.querySelector('.sectionOne__image').setAttribute('src', 'images/pepsi003.png');
        } else{
            document.querySelector('.sectionOne__image').setAttribute('src', 'images/pepsi001.png');
        }
    })
}

let cont = 0;

document.querySelector('.header__menu').addEventListener('click', () => {
    if(cont % 2 == 0){
        document.querySelector('.header__menu').setAttribute('src', 'images/close.png');
        document.querySelector('.header__menu').style.filter = 'brightness(20%)';
        showMenu();
    }else{
        document.querySelector('.header__menu').setAttribute('src', 'images/menu.png');
        document.querySelector('.header__menu').style.filter = 'brightness(100%)';
        closeMenu();
    }
    cont++;
})

function showMenu() {
    document.querySelector('.header__nav').classList.remove('d-none');
}

function closeMenu() {
    document.querySelector('.header__nav').classList.add('d-none');
}