document.addEventListener('DOMContentLoaded', function () {

    const firstTask = () => {
        let userName = prompt('Введите ваше имя');
        let userAge = prompt('Введите ваш возраст');

        alert(`Привет ${userName}, тебе ${userAge} лет!`);
        console.log(`Имя: ${userName}\nВозраст: ${userAge}`);
    }

    const secondTask = () => {
        let userAge = prompt('Введите ваш возраст');
        userAge < 18 ? alert('Вы не достигли совершеннолетия') : alert('Вы достигли совершеннолетия');
    }

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const thirdTask = () => {
        let randomNumber = getRandomNumber(1, 10);
        let inputNumber = prompt('Введите число от 1 до 10');
        inputNumber == randomNumber ? alert('Поздравляем, вы угадали!') :
            inputNumber > 5 ? alert('Ваше число в диапозоне от 6 до 10') :
                alert('Ваше число в диапазоне от 1 до 5');
        console.log(`\nЗагаданное число: ${randomNumber}\n'Введенное число: ${inputNumber}`);
    }

    const fourthTask = () => {
        let userPassword = prompt('Введите пароль');

        userPassword ? userPassword == '12345' ? alert('Доступ разрешен') :
            alert('Доступ запрещен') : alert('Пароль не введен');
    }

    const fifthTask = () => {
        let firstValue = parseFloat(prompt('Введите первое число'));
        let secondValue = parseFloat(prompt('Введите второе число'));
        let operator = prompt('Введите операцию');

        let result;
        switch (operator) {
            case '+':
                result = firstValue + secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
            case '*':
                result = firstValue * secondValue;
                break;
            case '/':
                if (secondValue !== 0) {
                    result = firstValue / secondValue;
                } else {
                    alert('Ошибка: деление на ноль');
                    return;
                }
                break;
            default:
                alert('Неверный оператор');
                return;
        }

        alert(`Результат: ${firstValue} ${operator} ${secondValue} = ${result}`);
    }

    const practiceNine = document.getElementById('practice-nine');

    practiceNine.addEventListener('click', function () {
        firstTask();
        secondTask();
        thirdTask();
        fourthTask();
        fifthTask();
    });

    const firstTaskTen = () => {
        let name = 'Egor';
        let age = 18;
        age >= 18 ? console.log(`${name}, вы совершеннолетний`) : console.log(`${name}, вы несовершеннолетний`);
    }

    const secondTaskTen = () => {
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }

        console.log('');

        let i = 10;
        while (i > 0) {
            console.log(i);
            i--;
        }
    }

    const thirdTaskTen = () => {
        const lectures = ['Адаптивная верстка', 'Bootstrap', 'Typescript'];
        const practices = ['Веб-хуки', 'React', 'Виртуальный DOM'];

        lectures.push('React компоненты', 'Render');
        practices.unshift('Основы JS');

        console.log('\nТемы для лекций');
        lectures.forEach((val) => {
            console.log(val);
        });

        console.log('\nТемы для практик');
        practices.forEach((val) => {
            console.log(val);
        });

        const printArray = (array) => {
            console.log(`\n${array.join(', ')}`);
        }

        printArray(practices);
    }

    const fourthTaskTen = (array) => {
        console.log('');
        array.forEach((word) => {
            if (word.toLowerCase().startsWith('o')) {
                console.log(word);
            }
        });
    }

    const practiceTen = document.getElementById('practice-ten');

    practiceTen.addEventListener('click', function () {
        firstTaskTen();
        secondTaskTen();
        thirdTaskTen();
        fourthTaskTen(['Online', 'None', 'Offline', 'NULL', 'offer']);
    });

    const defaultLink = document.getElementById('default-link');
    const servicesLink = document.getElementById('services-link');
    const firstTermLink = document.getElementById('first-term-link');
    const settingsLink = document.getElementById('settings-link');

    const navigationLinks = document.getElementById('navigation-links');
    const mainContent = document.querySelector('.main-content');

    const defaultContent = document.getElementById('default');
    const servicesContent = document.getElementById('services');
    const firstTermContent = document.getElementById('first-term');
    const settingsContent = document.getElementById('settings');


    defaultContent.classList.add('active');

    updateNavigation();

    function updateNavigation() {
        navigationLinks.innerHTML = '';
        const visibleContent = mainContent.querySelector('.active');

        if (visibleContent) {
            const headers = visibleContent.querySelectorAll('h3');
            headers.forEach(header => {
                const link = document.createElement('a');
                link.href = `#${header.id}`;
                link.textContent = header.textContent;
                link.classList.add('navigation-link');
                navigationLinks.appendChild(link);
            });
        }
    }

    function setActiveContent(content) {
        defaultContent.classList.remove('active');
        servicesContent.classList.remove('active');
        firstTermContent.classList.remove('active');
        settingsContent.classList.remove('active');

        defaultContent.style.display = 'none';
        servicesContent.style.display = 'none';
        firstTermContent.style.display = 'none';
        settingsContent.style.display = 'none';

        content.classList.add('active');
        content.style.display = 'block';
    }

    defaultLink.addEventListener('click', function (event) {
        event.preventDefault();
        setActiveContent(defaultContent);
        updateNavigation();
    });

    servicesLink.addEventListener('click', function (event) {
        event.preventDefault();
        setActiveContent(servicesContent);
        updateNavigation();
    });

    firstTermLink.addEventListener('click', function (event) {
        event.preventDefault();
        setActiveContent(firstTermContent);
        updateNavigation();
    });

    settingsLink.addEventListener('click', function (event) {
        event.preventDefault();
        setActiveContent(settingsContent);
        updateNavigation();
    });


    const openBtn = document.querySelectorAll('.card-btn');
    const closeBtn = document.getElementById('closeBtn');

    const overlay = document.getElementById('overlay');
    const registrationWrapper = document.getElementById('registration');
    const form = document.querySelector(".registration-form");

    openBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            registrationWrapper.classList.add('show');
            overlay.classList.add('show');
        });
    });

    const countries = ["Россия", "Беларусь", "Казахстан", "Финляндия", "Армения"];

    countries.forEach(country => {
        const countrySelect = document.getElementById('countrySelect');
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });

    closeBtn.addEventListener('click', function () {
        registrationWrapper.classList.remove('show');
        overlay.classList.remove('show');
    });

    const formData = {
        username: '',
        email: '',
        number: '',
        date: '',
        country: '',
        consent: false,
        comment: '',

        printData: function () {
            console.log(`ФИО: ${this.username}`);
            console.log(`E-mail: ${this.email}`);
            console.log(`Телефон: ${this.number}`);
            console.log(`Дата рождения: ${this.date}`);
            console.log(`Страна: ${this.country}`);
            console.log(`Согласие на обработку ПД: ${this.consent ? 'Да' : 'Нет'}`);
            console.log(`Комментарий: ${this.comment}`);
        }
    };

    const submitForm = () => {
        formData.username = form.elements['username'].value;
        formData.email = form.elements['email'].value;
        formData.number = form.elements['number'].value;
        formData.date = form.elements['datepicker'].value;
        formData.country = form.elements['countrySelect'].value;
        formData.consent = form.elements['privacy'].checked;
        formData.comment = form.elements['comment'].value;

        if (!formData.username || !formData.email || !formData.comment || !formData.consent) {
            alert('Заполните форму целиком и дайте согласие на обработку ПД');
            return;
        }

        const phoneRegex = /^\d+$/;
        if (!phoneRegex.test(formData.number)) {
            alert('Телефон должен содержать только цифры');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Введите корректный e-mail');
            return;
        }
        const formMessage = document.createElement('div');
        formMessage.textContent = 'Форма отправлена!';
        formMessage.style.fontSize = '1.2em';
        formMessage.style.marginTop = '1em';
        formMessage.style.color = 'blue';
        formMessage.style.transition = 'color 0.6s ease-in-out';
        form.appendChild(formMessage);

        setTimeout(() => {
            formMessage.style.color = 'cyan';
        }, 1000);
        formData.printData();

        setTimeout(() => {
            registrationWrapper.classList.remove('show');
            overlay.classList.remove('show');
        }, 2500);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitForm();
    });

    const video = document.getElementById('video');
    video.style.display = 'none';

    const userBtn = document.querySelector('.replace-btn');

    userBtn.addEventListener('click', function () {
        const userText = document.querySelector('.user-text');
        if (userText.textContent === 'Текст успешно изменен') {
            userText.textContent = 'Меня зовут Смирнов Егор Андреевич и я начинающий специалист по веб разработке';
        } else {
            userText.textContent = 'Текст успешно изменен';
        }
    });


    const colorBgPicker = document.getElementById('color-bg-picker');
    const resetBgPicker = document.getElementById('reset-bg-picker');

    colorBgPicker.addEventListener('input', function () {
        document.body.style.backgroundColor = colorBgPicker.value;
    });

    resetBgPicker.addEventListener('click', function () {
        const color = 'black'
        document.body.style.backgroundColor = color;
        colorBgPicker.value = color;
    });

    const colorPicker = document.getElementById('color-picker');
    const resetPicker = document.getElementById('reset-picker');

    colorPicker.addEventListener('input', function () {
        document.body.style.color = colorPicker.value;
    });

    resetPicker.addEventListener('click', function () {
        const color = 'white'
        document.body.style.color = color;
        colorPicker.value = color;
    });

    const timeBtn = document.getElementById('time-picker');

    timeBtn.addEventListener('click', function () {
        const now = new Date();
        alert(`Текущее время: ${now.toLocaleTimeString()}`);
        console.log(`${now.toLocaleTimeString()}`);
    });

    const mainTitle = document.querySelector('.main-title');

    mainTitle.addEventListener('click', function () {
        alert(`Вы кликнули на заголовок: ${mainTitle.textContent}`);
    });

    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('click', function () {
            this.style.transition = 'background-color 0.6s ease-in';
            this.style.cursor = 'pointer';
            this.style.backgroundColor = this.style.backgroundColor === 'darkgray' ? 'black' : 'darkgray';
        });
    });

    const firstSemesterTopics = [
        "Основы языка HTML",
        "Формы и кнопки в HTML",
        "Таблицы и интерактивные элементы HTML",
        "Основы работы с CSS",
        "Работа с классами CSS",
        "Работа с сетками и разметкой в HTML",
        "Адаптивная верстка",
        "Bootstrap",
        "Основы языка JavaScript",
        "Базовые задачи на JS",
        "DOM-стркутура приложений и работа с объектами в языке JS",
        "Встраивание скриптов",
        "Отладка сценариев",
        "Анимации и работа с ними",
        "GitHub",
        "Защита проекта"
    ];

    const secondSemesterTopics = [
        "Продвинутый JavaScript",
        "Асинхронное программирование",
        "Работа с API",
        "Фреймворки и библиотеки JS",
        "React",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Тестирование приложений",
        "CI/CD",
        "Docker",
        "Kubernetes",
        "Microservices",
        "GraphQL",
        "Проектирование и архитектура"
    ];

    const changeBtn = document.getElementById('change-btn');
    let isSecondSemester = true;

    changeBtn.addEventListener('click', function () {
        const topics = isSecondSemester ? secondSemesterTopics : firstSemesterTopics;
        document.getElementById('change-text').textContent = isSecondSemester ? 'Темы второго семестра' : 'Темы первого семестра';

        const tableRows = document.querySelectorAll('.practice-table tbody tr');
        tableRows.forEach((row, index) => {
            row.cells[1].textContent = topics[index];
        });

        isSecondSemester = !isSecondSemester;
    });

    const studentImage = document.querySelector('.user-image');

    let isTeacher = true;
    studentImage.addEventListener('click', function () {
        let src = isTeacher ? 'images/scala.png' : 'images/user-logo.jpg';
        studentImage.src = src;
        isTeacher = !isTeacher;
    });

    studentImage.addEventListener('mouseover', function () {
        studentImage.style.transform = 'rotate(360deg)';
    });

    studentImage.addEventListener('mouseout', function () {
        studentImage.style.transform = 'rotate(0deg)';
    });

    studentImage.addEventListener('dblclick', function () {
        alert('Не налегай');
    });

    const showLection = document.querySelector('.lection-show');
    const showPractice = document.querySelector('.practice-show');

    showLection.addEventListener('click', function () {
        const table = document.querySelector('.lection-table');
        table.style.display = 'table';
        table.style.opacity = 0;

        let opacity = 0;
        function fadeIn() {
            opacity += 0.05;
            table.style.opacity = opacity;
            if (opacity < 1) {
                setTimeout(() => requestAnimationFrame(fadeIn), 50);
            }
        }
        requestAnimationFrame(fadeIn);
    });

    showPractice.addEventListener('click', function () {
        const table = document.querySelector('.practice-table');
        table.style.display = 'table';
        table.style.opacity = 0;

        let opacity = 0;
        function fadeIn() {
            opacity += 0.05;
            table.style.opacity = opacity;
            if (opacity < 1) {
                setTimeout(() => requestAnimationFrame(fadeIn), 50);
            }
        }
        requestAnimationFrame(fadeIn);
    });

    document.getElementById('page-switcher').addEventListener('change', function() {
        const selectedPage = this.value;
        window.location.href = selectedPage;
    });
    
});