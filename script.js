// Função para calcular a idade
function calcularIdade() {
    let dataNascimento = document.getElementById("dataNascimento").value;

    let hoje = new Date();
    let dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    let mes = hoje.getMonth() - dataNasc.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }

    document.getElementById("idade").value = idade;
}

// Chama a função calcularIdade quando o valor da data de nascimento é alterado
document.getElementById("dataNascimento").addEventListener("change", calcularIdade);

// Função para limpar o formulário
function resetForm() {
    document.getElementById("meuFormulario").reset();
}

// Função para exibir as informações do formulário
function informacoes(event) {
    event.preventDefault(); // Impede o envio automático do formulário

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let dataNascimento = document.getElementById("dataNascimento").value;
    let idade = document.getElementById("idade").value;
    let genero = document.querySelector('input[name="genero"]:checked').value;
    let email = document.getElementById("email").value;
    let endereco = document.getElementById("endereco").value;
    let CEP = document.getElementById("CEP").value;
    let resposta = document.getElementById("resposta");

    // Exibe as informações no elemento "resposta"
    resposta.innerHTML = `
        <p>Nome: ${nome} ${sobrenome}</p>
        <p>Data de Nascimento: ${dataNascimento} - Idade: ${idade}</p>
        <p>Gênero: ${genero}</p>
        <p>Email: ${email}</p>
        <p>Endereço: ${endereco} - CEP: ${CEP}</p>
    `;
}

// Chama a função informacoes quando o formulário é enviado
document.getElementById("meuFormulario").addEventListener("submit", informacoes);