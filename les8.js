// 1 - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let txtArea = document.getElementById('text1');
// txtArea.style.width = '200px';
// txtArea.style.height = '120px';
// txtArea.oninput = (ev) => {
//     let inpTxt = ev.target.value;
//     localStorage.setItem('saveText', inpTxt);
// }

// window.onpageshow = (ev) => {
//     txtArea.innerText = localStorage.getItem('saveText');
// }


// 2 - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// let form2 = document.forms.task2;
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);

// }

// for (let i = 0; i < form2.length; i++) {
//     let elem = document.getElementById(form2[i].id);
//     let name = elem.id;
//     let tagType = elem.type;
//     let flagRadio = true;
//     console.log('if ' + name + '  ' + tagType);
//     switch (tagType) {
//         case 'text':
//         case 'textarea':
//             elem.oninput = (ev) => {
//                 localStorage.setItem(name, ev.target.value);
//             }
//             break;
//         case 'checkbox':
//             elem.onclick = (ev) => {
//                 localStorage.setItem(name, JSON.stringify(ev.target.checked));
//             }
//             break;
//         case 'checkbox':
//             elem.onclick = (ev) => {
//                 localStorage.setItem(name, JSON.stringify(ev.target.checked));
//             }
//             break;
//         case 'radio':
//             elem.onclick = (ev) => {
//                 for (let z = 0; z < form2.radioButton.length; z++) {
//                     if (form2.radioButton[z].id === name ) {                        
//                         localStorage.setItem(name, JSON.stringify(ev.target.checked))
//                     } else {
//                         localStorage.setItem(form2.radioButton[z].id, JSON.stringify(false));
//                     }
//                 }
//             }
//             break;
//     }
//     for (let y = 0; y < localStorage.length; y++) {
//         if (localStorage.key(y) === name) {
//             switch (tagType) {
//                 case 'text':
//                 case 'textarea':
//                     elem.value = localStorage.getItem(name);
//                     break;
//                 case 'checkbox':
//                     elem.checked = JSON.parse((localStorage.getItem(name)));
//                     break;
//                 case 'radio':
//                     elem.checked = JSON.parse((localStorage.getItem(name)));
//                     break;
//             }
//         }
//     }
// }


// 3 -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), 
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let divMain = document.getElementById('task3');
// let textArea3 = document.getElementById('text3');
// let btnSave = document.getElementById('btn3');
// let btnPrev = document.getElementById('btnPrev');
// let btnNext = document.getElementById('btnNext');
// let ind = localStorage.length > 0 ? localStorage.length - 1 : 0
// console.log(ind);
// showBtn(localStorage.length - 1, ind);

// btnSave.onclick = (ev) => {
//     let keyClick = 'keyClick' + localStorage.length;
//     localStorage.setItem(keyClick, textArea3.value);
//     showBtn(localStorage.length - 1, ind);
// }

// btnPrev.onclick = (ev) => {   
//     if (ind <= 0) {
//         ind = 0;
//     } else {
//         textArea3.value = localStorage.getItem(localStorage.key(--ind));
//     }    
//     showBtn(localStorage.length - 1, ind);
// }

// btnNext.onclick = (ev) => {

//     if (ind >= localStorage.length - 1) {
//         ind = localStorage.length - 1;
//     } else {
//         textArea3.value = localStorage.getItem(localStorage.key(++ind));
//     }    
//     showBtn(localStorage.length - 1, ind);
// }

// function showBtn(max, item) {
//     item > 0 ? btnPrev.style.visibility = 'visible' : btnPrev.style.visibility = 'hidden' ;
//     item < max ? btnNext.style.visibility = 'visible' : btnNext.style.visibility = 'hidden' ;    
// }


// 4 - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, 
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
// let formUser = document.forms.task4;
// let btnSave = formUser.btnSaveUser;
// let users = {};
// let tempUser = {};
// let flag = 0;

// btnSave.onclick = (ev) => {

//     users.name = formUser.inpFio.value;
//     users.tel = formUser.inpTel.value;
//     users.email = formUser.inpEmail.value;
//     users.company = formUser.inpCompany.value;
//     users.depart = formUser.inpDepart.value;
//     users.dtbirth = (formUser.inpBirth.value);

//     // console.log(users);
//     // console.log('length  ' + localStorage.length);

//     localStorage.setItem(localStorage.length + 1, JSON.stringify(users));

//     users = {};
//     tempUser = {};
//     flag = 0;
//     location.href = location.href;

// }

// if (localStorage.length > 0) {
//     for (let i = 0; i < localStorage.length; i++) {
//         let temp = localStorage.key(i);
//         let addId = JSON.parse(localStorage.getItem(temp));
//         addId.id = localStorage.key(i);
//         showUser(addId);
//     }
// }

// function showUser(objUser) {
//     let divMain = document.createElement('div');
//     objUser.sort((a, b => o)
//     for (let item in objUser) {
//         if (item !== 'id') {
//             let elemForText = document.createElement('p');
//             elemForText.innerText = item + ' : ' + objUser[item];
//             divMain.appendChild(elemForText);
//         }
//     }
//     let divBtn = document.createElement('div');
//     let btnEdit = document.createElement('button');
//     let btnDel = document.createElement('button');
//     btnEdit.innerText = 'Edit';
//     btnDel.innerText = 'Delete';
//     btnDel.style.marginLeft = '10px';
//     divMain.style = 'width: 300px; border: 1px solid silver';
//     divBtn.appendChild(btnEdit);
//     divBtn.appendChild(btnDel);
//     divMain.appendChild(divBtn);
//     document.body.appendChild(divMain);
//     btnEdit.onclick = () => {
//         editInUser(objUser.id);
//         flag = objUser.id;
//     }
//     btnDel.onclick = () => {
//         delUser(objUser.id);
//         location.href = location.href;
//     }
// }

// function delUser(id) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (id === localStorage.key(i)) {
//             localStorage.removeItem(id);
//         }
//     }
// }

// function editInUser(id) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (id === localStorage.key(i)) {
//             console.log(localStorage.key(i));
//             tempUser = JSON.parse(localStorage.getItem(id))
//             formUser.inpFio.value = tempUser.name;
//             formUser.inpTel.value = tempUser.tel
//             formUser.inpEmail.value = tempUser.email;
//             formUser.inpCompany.value = tempUser.company;
//             formUser.inpDepart.value = tempUser.depart;
//             formUser.inpBirth.value = tempUser.dtbirth
//         }
//     }

// }

