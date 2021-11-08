let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
};

// theme switcher
themeSwitch.onclick = function(){
    body.classList.toggle('dark');
};

// toggle
function toggleMenu(){
    var navigation = document.querySelector('.navigation');
    var main = document.querySelector('.main');
    navigation.classList.remove('active');
    main.classList.remove('active');
}

// about me
let panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

const select = document.querySelector('select');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['name'][hash];
        for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();