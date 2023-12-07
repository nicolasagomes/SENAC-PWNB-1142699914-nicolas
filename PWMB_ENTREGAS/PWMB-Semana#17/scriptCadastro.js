let clientes = [];

function cadastrarCliente() {
  
  
  document.addEventListener("DOMContentLoaded", function (event) {
    //localStorage.clear()                                                                        
    localStorage.removeItem("clientes")                                          
})              
    console.log("Botão Cadastrar clicado")

    let nome = document.getElementById("nmCliente").value;
    let sobrenome = document.getElementById("sobrenomeCliente").value;
    let dataNascimento = document.getElementById("datadenascimento").value;
    let cep = document.getElementById("cepCliente").value;
    let endereco = document.getElementById("enderecoCliente").value;
    let numero = document.getElementById("numeroCliente").value;
    let uf = document.getElementById("ufCliente").value;
  

  // Valide os campos (adapte conforme necessário)

  // Crie um objeto de cliente
  let cliente = {
    nome: nome,
    sobrenome: sobrenome,
    dataNascimento: dataNascimento,
    cep: cep,
    endereco: endereco,
    numero: numero,
    uf: uf,
  };

  // Adicione o cliente à lista
  clientes.push(cliente);

  // Limpe os campos do formulário
  document.getElementById("nmCliente").value = "";
  document.getElementById("sobrenomeCliente").value = "";
  document.getElementById("datadenascimento").value = "";
  document.getElementById("cepCliente").value = "";
  document.getElementById("enderecoCliente").value = "";
  document.getElementById("numeroCliente").value = "";
  document.getElementById("ufCliente").value = "";

  // Atualize a lista de clientes
  mostrarClientes();
  
localStorage.setItem("clientes",JSON.stringify(clientes))
 
alert("Obrigado por se cadastrar !!!")
}



function mostrarClientes() {
  let clientesList = document.getElementById("clientesList");
  clientesList.innerHTML = "";

  clientes.forEach((cliente, index) => {
    let listItem = document.createElement("div");
    listItem.innerHTML = `<span>${cliente.nome} ${cliente.sobrenome}</span>
                         <span>Data de Nascimento: ${cliente.dataNascimento}</span>
                         <span>CEP: ${cliente.cep}</span>
                         <span>Endereço: ${cliente.endereco}, ${cliente.numero}</span>
                         <span>UF: ${cliente.uf}</span>
                         <button onclick="excluirCliente(${index})">Excluir</button>
                         <button onclick="editarCliente(${index})">Editar</button>`;
    clientesList.appendChild(listItem);
  });
}

function formatarCep() {
    let cepInput = document.getElementById("cepCliente");
    let cepValue = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    cepValue = cepValue.substring(0, 8); // Limita a 8 dígitos
    if (cepValue.length > 5) {
      cepValue = cepValue.replace(/^(\d{5})(\d)/, '$1-$2'); // Adiciona o hífen
    }
    cepInput.value = cepValue;
  }

  function formatarData() {
    let dataInput = document.getElementById("datadenascimento");
    let dataValue = dataInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    dataValue = dataValue.substring(0, 8); // Limita a 8 dígitos
  
    if (dataValue.length >= 4 && dataValue.length <= 6) {
      // Adiciona a barra no formato DD/MM
      dataValue = dataValue.replace(/^(\d{2})(\d{2})/, '$1/$2');
    } else if (dataValue.length > 6) {
      // Adiciona a barra no formato DD/MM/YYYY
      dataValue = dataValue.replace(/^(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    }
  
    dataInput.value = dataValue;
  }


  function mudarPagina() {
      window.location.href = "cadastroCliente.html";
  }
