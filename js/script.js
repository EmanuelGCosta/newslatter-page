const btnFechar = document.querySelector('.btn_fechar');
const msgError = document.querySelector('.modal_erro');
const msgSuccess = document.querySelector('.modal_sucesso');


// Pegar dados do formulario
const pegarDados = () => {

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
    const nome = document.querySelector('.input_nome').value;
    const email = document.querySelector('.input_email').value;
    let nomeValido = false;
    let emailValido = false;
    console.log(nome, email);

    //validar dados
    if (nome === null || nome.length < 3) {
        document.querySelector('.erro_nome').textContent = "O nome é obrigatório e precisa ter no mínimo 3 caracteres";
    } else {
        document.querySelector('.erro_nome').textContent = "";
        nomeValido = true;
    }

    if (!(emailRegex.test(email))) {
        document.querySelector('.erro_email').textContent = "O email é obrigatório e precisa ser válido";
    } else {
        emailValido = true;
        document.querySelector('.erro_email').textContent = "";
        
    }

    if (nomeValido && emailValido) {
        const cadastro = {
            nome,
            email
        }
        document.querySelector('form').reset();

        return 'sucesso'
    } else {
        return 'error'
    }

}

const mostrarModal = (statusRegister) => {

    // const statusRegister = pegarDados(); //erro

    if (statusRegister === 'sucesso') {
        msgError.style.display = 'none';
        msgSuccess.style.display = 'block';
        btnFechar.classList.add('bg_sucesso')
        btnFechar.classList.remove('bg_erro')

    } else if (statusRegister === 'error') {
        msgSuccess.style.display = 'none';
        msgError.style.display = 'block';
        btnFechar.classList.add('bg_erro')
        btnFechar.classList.remove('bg_sucesso')
    }

    document.querySelector('.modal_enviar').showModal();
}

document.querySelector('.btn_enviar').addEventListener('click', (e) => {
    e.preventDefault();

    mostrarModal(pegarDados());
});

btnFechar.addEventListener('click', () => {
    document.querySelector('.modal_enviar').close();
});
