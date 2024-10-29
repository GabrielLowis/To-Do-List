const btnAddTask = document.querySelector('.btn-add-task')
const input = document.querySelector('.input-task')
const listComplete = document.querySelector('.list-task')
const btnMin = document.querySelector('#icon-aba')
const nav = document.querySelector('#id-nav')
const inputTask = document.querySelector('.add-task')
let numero = 0;



// Adicionar tarefa

let minhaListaItens = []



function addNewTask() {

    if (input.value.trim() === '') {
        alert('Não é possivel adicionar uma tarefa em branco!');
        return;
    }


    minhaListaItens.push({
        task: input.value,
        completed: false
    })



    input.value = ''

    showTask()
}

// function showTask() {
//     let newLi = ''

//     minhaListaItens.forEach((item, index) => {
//         newLi = newLi + `
                    
//         <li class="task ${item.completed && "done"}">
//         <img src="./src/icon-check.png" alt="Icone de correto" width="25px" onclick="itemComplete(${index})">
//         <p class="p-task">${item.task}</p>
//         <img src="./src/icon-trash.png" alt="Icone de lixeira" width="25px" onclick="itemDelete(${index})">
//         </li>
//         `
//     })
//     listComplete.innerHTML = newLi

//     localStorage.setItem('lista', JSON.stringify(minhaListaItens))
// }

function itemComplete(index) {
    minhaListaItens[index].completed = !minhaListaItens[index].completed
    showTask()
}

function itemDelete(index) {
    minhaListaItens.splice(index, 1)

    showTask()
}

function reloadItems() {
    const tasksLocalStorage = localStorage.getItem('lista')

    if (tasksLocalStorage) {
        minhaListaItens = JSON.parse(tasksLocalStorage)
    }

    showTask()
}


//MINIMIZAR A TELA CONFORME O TEMA
function minimize() {
    if (nav.classList.contains('nav') || nav.classList.contains('navDark') && numero === 0) {
        //minimizar
        if (nav.classList.contains('navDark')) {
            document.getElementById("id-nav").classList.remove("navDark");
            document.getElementById("id-nav").classList.add("navDarkMinimizado");
            numero += 1;
            console.log("n" + numero)
        }

        if (nav.classList.contains('nav')) {
            document.getElementById("id-nav").classList.remove("nav");
            document.getElementById("id-nav").classList.add("minimizado");
            numero += 1;
            console.log("n" + numero)
        }

    } else {

        if (nav.classList.contains('minimizado')) {
            document.getElementById("id-nav").classList.remove("minimizado");
            document.getElementById("id-nav").classList.add("nav");
            numero = 0;
            console.log("n" + numero)
        }

        if (nav.classList.contains('navDarkMinimizado')) {
            document.getElementById("id-nav").classList.remove("navDarkMinimizado");
            document.getElementById("id-nav").classList.add("navDark");
            numero = 0;
            console.log("n" + numero)
        }
    }
    // document.getElementById("id-nav").classList.remove("nav");
    // document.getElementById("id-nav").classList.add("minimizado");
}

function verificarTela() {
    if (numero === 1 && window.innerWidth <= 700) {
        if (nav.classList.contains('navDarkMinimizado')) {
            document.getElementById("id-nav").classList.remove("navDarkMinimizado")
            document.getElementById("id-nav").classList.add("navDark")
            numero = 0;
        }

        if (nav.classList.contains('minimizado')) {
            document.getElementById("id-nav").classList.remove("minimizado");
            document.getElementById("id-nav").classList.add("nav");
            numero = 0;
        }
    }
}

    reloadItems()

//Enviar com o enter
    function verificarEnter() {
        if (event.key === 'Enter') {
            addNewTask()
        }
    }

    //POP-UP TEMA
    const clickableDiv = document.querySelector('.footer');
    const popup = document.querySelector('#popup');
    const closeBtn = document.querySelector('#closeBtn');

    clickableDiv.addEventListener('click', () => {
        popup.style.display = 'flex';
    });


    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });


    //TAREFAS IMPORTANTES
    function toggleImportance(index) {
        minhaListaItens[index].important = !minhaListaItens[index].important;
        showTask();
    }
    
    function showTask() {
        let newLi = '';
    
        minhaListaItens.forEach((item, index) => {
            newLi += `
            <li class="task ${item.completed ? "done" : ""} ${item.important ? "important" : ""}">
                <img src="./src/icon-check.png" alt="Ícone de correto" width="25px" onclick="itemComplete(${index})">
                <p class="p-task">${item.task}</p>
                <button onclick="toggleImportance(${index})" class="btn-important">${item.important ? "Desmarcar Importante" : "Marcar Importante"}</button>
                <img src="./src/icon-trash.png" alt="Ícone de lixeira" width="25px" onclick="itemDelete(${index})">
            </li>
            `;
        });
        listComplete.innerHTML = newLi;
    
        localStorage.setItem('lista', JSON.stringify(minhaListaItens));
    }

    // Função para testar botões
    // function teste(){
    // console.log('funcionou')
    // }

    // enviarPesquisa.addEventListener('click', teste);
    document.addEventListener('keydown', verificarEnter);
    window.addEventListener('resize', verificarTela);
    btnMin.addEventListener('click', minimize);
    btnAddTask.addEventListener('click', addNewTask)