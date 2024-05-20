function handleCadastroModal() {
    const cadastroBtn = document.querySelector("#btn__cadastro");
    const modalController = document.querySelector("dialog");

    cadastroBtn.addEventListener("click", function () {
        modalController.showModal();
    });
}

function handleCadastroModal2() {
    const cadastroBtn2 = document.querySelector("#btn__cadastro2");
    const modalController = document.querySelector("dialog");

    cadastroBtn2.addEventListener("click", function () {
        modalController.showModal();
    });
}

function closeModal() {
    const closebutton = document.querySelector (".close__btn");
    const modalController = document.querySelector("dialog");

    closebutton.addEventListener("click", function () {
        modalController.close();
    });
}

handleCadastroModal();
handleCadastroModal2();
closeModal();