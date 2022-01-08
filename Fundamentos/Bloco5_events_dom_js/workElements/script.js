function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

function createDaysOfTheMonth() {
    const monthDaysList = document.querySelector('#days');
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let init = 5;
    for (let index = 0; index < dezDaysList.length; index += 1) {
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = dezDaysList[index];
        dayListItem.classList.add('day')
        dayListItem.addEventListener('click', (e) => {
            const o = document.getElementsByClassName('selected')[0];
            if (o) {
                if (o.style.backgroundColor !== e.target.style.color){
                    e.target.style.color = o.style.backgroundColor;
                } else e.target.style.color ='rgb(119,119,119)';
            } 
        });

        if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
            dayListItem.classList.add('holiday');
        }
        if (index === init) {
            init += 7;
            dayListItem.classList.add('friday');
        }
        monthDaysList.appendChild(dayListItem);
    };
};

function feriadosBtn(feriados) {
    const btnHolidays = document.createElement('button');
    btnHolidays.id = "btn-holiday";
    btnHolidays.innerHTML = feriados;
    document.querySelector('.buttons-container').appendChild(btnHolidays);
    return btnHolidays;
}

function feriadosBtn(feriados) {
    const btnHolidays = document.createElement('button');
    btnHolidays.id = "btn-holiday";
    btnHolidays.innerHTML = feriados;
    document.querySelector('.buttons-container').appendChild(btnHolidays);
    return btnHolidays;
}

function sextaBtn(sexta) {
    const btnFriday = document.createElement('button');
    btnFriday.id = "btn-friday";
    btnFriday.innerHTML = sexta;
    document.querySelector('.buttons-container').appendChild(btnFriday);
    return btnFriday;
}

function createTask(texto) {
    const element = document.createElement('span');
    element.innerHTML = texto;
    element.classList.add('task');
    document.querySelector('.my-tasks').appendChild(element);
}

function cortask(cor) {
    const element = document.createElement('div');
    element.style.backgroundColor = cor;
    element.classList.add('task');
    document.querySelector('.my-tasks').appendChild(element);
    element.addEventListener('click', (e) => {
        const div = e.target;
        if (div.classList.contains('selected')) {
            div.classList.remove('selected');
        } else div.classList.add('selected');
    });
}

createDaysOfTheWeek();
createDaysOfTheMonth();
btnFriday = sextaBtn("Sexta-Feira");
btnHolidays = feriadosBtn("Feriados");
btnHolidays.addEventListener('click', () => {
    const elements = document.getElementsByClassName('holiday');
    let cor = "yellow"
    if (elements[0].style.backgroundColor === cor) cor = "rgb(238,238,238)";
    console.log(elements[0].style.backgroundColor)
    for (i = 0; i < elements.length; i += 1) {
        elements[i].style.backgroundColor = cor;
    }
});


btnFriday.addEventListener('click', () => {
    const fDays = [4, 11, 18, 25];
    let fDaysText = ["f", "f", "f", "f"]
    const elements = document.getElementsByClassName('friday');
    if (elements[0].innerText === "f") fDaysText = fDays;
    console.log(fDaysText)
    for (i = 0; i < elements.length; i += 1) {
        elements[i].innerText = fDaysText[i];
    }
});

const eventoHov = document.getElementsByClassName('day');
for (i = 0; i < eventoHov.length; i++) {
    console.log(i)
    eventoHov[i].addEventListener('mouseover', (e) => {
        e.target.style.fontSize = '24px';
    });
    eventoHov[i].addEventListener('mouseleave', (e) => {
        e.target.style.fontSize = '18px';
    });
}
function criaCompromisso() {
    const texto = document.getElementById('task-input').value;
    console.log(texto === "")
    if (texto !== "") {
        const element = document.createElement('li');
        element.innerText = texto;
        document.querySelector('.task-list').appendChild(element);
        document.getElementById('task-input').value = "";
    } else alert('ops, ta doido?')
}

document.getElementById('task-input').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') criaCompromisso();
})
document.getElementById('btn-add').addEventListener('click', criaCompromisso);

createTask('cozinhar');
cortask('red')
