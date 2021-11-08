// multilang
const langArr = {
    "home" :  {
        "en": "Main",
        "ua": "Головна",
    }, 
    "about": {
        "en": "5 facts",
        "ua": "5 фактів",
    }, 
    "services": {
        "en": "Technology",
        "ua": "Технології",
    }, 
    "projects": {
        "en": "Projects",
        "ua": "Проєкти",
    }, 
    "testimonials": {
        "en": "References",
        "ua": "Відгуки",
    }, 
    "contacts": {
        "en": "Contacts",
        "ua": "Контакти",
    }, 
    "name": {
        "en": "Kolesnyk Pavlo",
        "ua": "Колесник Павло",
    },
    "position": {
        "en": "Front-end developer",
        "ua": "Front-end developer",
    },
    "download": {
        "en": "Download my CV",
        "ua": "Завантажити резюме",
    }, 
    "aboutMe": {
        "en": "5 facts",
        "ua": "5 фактів",
    },
    "aboutMeText": {
        "en": "Here you can find 5 cool facts that are going to help you know me better",
        "ua": "Ви пізнаете мене краще, прочитавши ці 5 фактів",
    },
    "running": {
        "en": "Sport",
        "ua": "Спорт",
    },
    "runningText": {
        "en": "I wake up at 05.30 a. m., run 7 km and do exercises. Routine and sport help me to develop discipline and perseverance.",
        "ua": "По будням я прокидаюся о 5.30 ранку, пробігаю 7 км та роблю вправи. Режим та спорт допомогаюсь виробити дисципліну та наполегливість.",
    },
    "studing": {
        "en": "Studing",
        "ua": "Навчання",
    },
    "studingText": {
        "en": "I try to learn at least 35 hours per week.",
        "ua": "Я навчаюся мінімум 35 годин кожного тижня.",
    },
    "discipline": {
        "en": "Discipline",
        "ua": "Дисципліна",
    },
    "disciplineText": {
        "en": "I consider discipline (for constant development) and persistence (for overcoming difficulties) to be my strengths.",
        "ua": "Своїми сильними сторономи вважаю дисципліну (для постійного розвитку) та наполегливість (для подолання складностей).",
    },
    "teaching": {
        "en": "Teaching",
        "ua": "Викладання",
    },
    "teachingText": {
        "en": "The topic of my master's thesis was 'Teaching Finance'. Also, I coached trainees in Favbet. Together we have created a new department and influenced to the increasing in profits.",
        "ua": "Тема моєї магістерської роботи 'Викладання фінансів'. Саме навчання стажерів було основним обов'язком у Фавбет. У результать моєї діяльності - створено новий підрозділ.",
    },
    "design": {
        "en": "Design",
        "ua": "Дизайн",
    },
    "designText": {
        "en": "UI/UX is my hobby which helps in comunication with designers.",
        "ua": "UI/UX - моє хоббі, яке допоможе знаходити спільну мову з дизайнерами.",
    },
    "technology": {
        "en": "Technology stack",
        "ua": "Стек технологій",
    },
    "technologyText": {
        "en": "This section presents a stack of technologies that I use and which I am going to master",
        "ua": "В цій секції відображено стек технологій якими я володію та вивчаю",
    },
    "cardName": {
        "en": "Internet",
        "ua": "Інтернет",
    },
    "realName": {
        "en": "CS 50",
        "ua": "CS 50",
    },
    "cardText": {
        "en": "I started with the course CS 50, so I know basic internet and programming fundamentals.",
        "ua": "Я розпочав своє навчання з курсу CS 50, де засвоїв основи інтернету й програмування. ",
    },
    "cardName2": {
        "en": "UI/UX",
        "ua": "UI/UX",
    },
    "realName2": {
        "en": "Figma, Adobe XD, Photoshop",
        "ua": "Figma, Adobe XD, Photoshop",
    },
    "cardText2": {
        "en": "I have had experience with Photoshop, Illustrator. Figma, Avocode and Adobe XD are easy tools for me.",
        "ua": "Маючи досвід роботи з Photoshop та Illustrator, швидко опанував Figma, Avocode та Adobe XD.",
    },
    "cardName3": {
        "en": "HTML",
        "ua": "HTML",
    },
    "realName3": {
        "en": "SEO basics",
        "ua": "Основи СЕО",
    },
    "cardText3": {
        "en": "I have some experience with HTML and reviewing the basics of SEO.",
        "ua": "Наступним кроком стало вивчення HTML та повторення СЕО.",
    },
    "cardName4": {
        "en": "CSS",
        "ua": "CSS",
    },
    "realName4": {
        "en": "SCSS, Bootstrap, Responsive, BEM",
        "ua": "SCSS, Bootstrap, Responsive, BEM",
    },
    "cardText4": {
        "en": "In CSS I have expertise with flex box, grid and responsive design. Also, know SCSS, Bootstrap, BEM.",
        "ua": "В CSS приділив увагу flex box, grid та адаптивному дизайну. Вивчив SCSS, Bootstrap, BEM.",
    },
    "cardName5": {
        "en": "JavaScript",
        "ua": "JavaScript",
    },
    "realName5": {
        "en": "ES6+",
        "ua": "ES6+",
    },
    "cardText5": {
        "en": "In JavaScript I`m aware about DOM, Fetch API, Ajax, hoisting, event bubbling, scope, prototype, strict.",
        "ua": "У JavaScript засвоїв DOM, Fetch API, Ajax, hoisting, event bubbling, scope, prototype.",
    },
    "cardName6": {
        "en": "React",
        "ua": "React",
    },
    "realName6": {
        "en": "Redux",
        "ua": "Redux",
    },
    "cardText6": {
        "en": "Firstly, I have experience with React. I plan to learn Angular and Type Script in the near future.",
        "ua": "Почав з React, тому що у мене був безкоштовний курс. Також планую вивчити Angular та Type Script.",
    },
    "cardName7": {
        "en": "Git",
        "ua": "Git",
    },
    "realName7": {
        "en": "Git Hub",
        "ua": "Git Hub",
    },
    "cardText7": {
        "en": "Also have an idea of ​​how the GitKraken works.",
        "ua": "Маю уявлення як працюе GitKraken.",
    },
    "cardName8": {
        "en": "Additionally",
        "ua": "Додатково",
    },
    "realName8": {
        "en": "Gulp, NPM, Webpack",
        "ua": "Gulp, NPM, Webpack",
    },
    "cardText8": {
        "en": "To simplify my work, I use such additional technologies as Gulp, NPM, Webpack.",
        "ua": "Для спрощення роботи оволодів додатковими технологіями: Gulp, NPM, Webpack.",
    },
    "cardText9": {
        "en": "In progress...",
        "ua": "В процесі...",
    },
    "cardText10": {
        "en": "In progress...",
        "ua": "В процесі...",
    },
    "cardText11": {
        "en": "In progress...",
        "ua": "В процесі...",
    },
    "cardText12": {
        "en": "Curriculum for the future",
        "ua": "Навчальний план на майбутне",
    },
    "projects2": {
        "en": "Projects",
        "ua": "Проєкти",
    },
    "projectsP": {
        "en": "Fill free to take a look at some projects that I posted on Github",
        "ua": "Тут ви зможете ознайомитися моїми проєктами, що викладені на Github",
    },
    "projectsP1": {
        "en": "Project 01",
        "ua": "Проєкт 01",
    },
    "projectsP2": {
        "en": "Project 02",
        "ua": "Проєкт 02",
    },
    "projectsP3": {
        "en": "Project 03",
        "ua": "Проєкт 03",
    },
    "projectsP4": {
        "en": "Project 04",
        "ua": "Проєкт 04",
    },
    "projectsP5": {
        "en": "Project 05",
        "ua": "Проєкт 05",
    },
    "projectsP6": {
        "en": "Project 06",
        "ua": "Проєкт 06",
    },
    "testimonials2": {
        "en": "References",
        "ua": "Відгуки",
    },
    "testimonialsP": {
        "en": "What people say",
        "ua": "Люди говорять",
    },
    "testimonialsBxP": {
        "en": "Pavlo is a very creative person and a talented designer. It will definitely help him in any other work.",
        "ua": "Павло креативна людина і талановитий дизайнер з особливим баченням майже всього. Це точно допоможе йому в будь-якій роботі.",
    },
    "testimonialsBxPH": {
        "en": "Alexander",
        "ua": "Олександр",
    },
    "testimonialsBxPHS": {
        "en": "Former colleague",
        "ua": "Колишній колега",
    },
    "testimonialsBxP2": {
        "en": "I have always liked Pavlo's dedication and striving for new knowledge. I am sure that he will be able to achieve any goal thanks to these qualities.",
        "ua": "Мені завжди подобалось, що Паша цілеспрямований та прагне нових знань. Впевнений, що він досягне своїх цілей.",
    },
    "testimonialsBxPH2": {
        "en": "Constantine",
        "ua": "Константин",
    },
    "testimonialsBxPHS2": {
        "en": "Former colleague",
        "ua": "Колишній колега",
    },
    "testimonialsBxP3": {
        "en": "I was a trainee taught by Pavlo. He found the right approach to me and motivated me to develop further.",
        "ua": "Я стажувався у Павла. Він знайшов підхід до мене та змотивував на подальших розвиток.",
    },
    "testimonialsBxPH3": {
        "en": "Alexander",
        "ua": "Олександр",
    },
    "testimonialsBxPHS3": {
        "en": "Former trainee",
        "ua": "Колишній стажер",
    },
    "testimonialsBxP4": {
        "en": "I would like to highlight two of the most important qualities that I appreciated in Pavlo - discipline and responsibility.",
        "ua": "Я хотів би відмітити дві найважливіші на мій погляд риси, якими володіє Павло - дисципліна та відповідальність.",
    },
    "testimonialsBxPH4": {
        "en": "Andriy",
        "ua": "Андрій",
    },
    "testimonialsBxPHS4": {
        "en": "Former leader",
        "ua": "Колишній лідер",
    },
    "contactH": {
        "en": "Let`s connect",
        "ua": "Давай скажемо привіт",
    },
    "contactP": {
        "en": "You can see my contact details by clicking on the Download my CV button on the main page or fill the form below for I can reach out to you",
        "ua": "Ви можете побачити мої контактні данні за посиланням 'Завантажити резюме' на головній сторінці, або заповнити форму нижче.",
    },
    "copyrights": {
        "en": "Copyrights &copy; 2021 Kolesnyk Pavlo. All Rights Reserved.",
        "ua": "Авторські права &copy; 2021 Колесник Павло. Всі права захищені.",
    },
};