const enviarPesquisa = document.querySelector('.icon');
const paragrafos = document.querySelectorAll('.p-task'); // Seleciona todos os elementos com a classe .p-task
const inputSearch = document.getElementById("input-search");


function search() {
    let inputPesquisa = inputSearch.value.toLowerCase(); // Pra comparar case insensitive
    console.log(inputPesquisa);

    if (inputPesquisa !== "") {
        listComplete.innerHTML = '';

        // Tarefas armazenadas no array
        minhaListaItens.forEach((item, index) => {
            if (item.task.toLowerCase().includes(inputPesquisa)) {
                const newLi = `
                <li class="task ${item.completed ? "done" : ""} ${item.important ? "important" : ""}">
                <img src="./src/icon-check.png" alt="Ícone de correto" width="25px" onclick="itemComplete(${index})">
                <p class="p-task">${item.task}</p>
                <button onclick="toggleImportance(${index})" class="btn-important">${item.important ? "Desmarcar Importante" : "Marcar Importante"}</button>
                <img src="./src/icon-trash.png" alt="Ícone de lixeira" width="25px" onclick="itemDelete(${index})">
            </li>
                `;
                listComplete.innerHTML += newLi; // Adiciona apenas as tarefas filtradas
            }
        });
        inputSearch.value = "";
    } else {
        showTask();
    }
}
enviarPesquisa.addEventListener('click', search);
