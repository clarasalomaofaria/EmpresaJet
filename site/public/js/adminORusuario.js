function verificarFuncao() {
  if (sessionStorage.FUNCAO == "Administrador") {
    var containerGlobal = document.getElementById("container-global");

    // ------------------ TITULO -----------------------------
    var divisoria = document.createElement("hr");
    var divTituloFunc = document.createElement("div");
    var titulo = document.createElement("h3");
    var subtitulo = document.createElement("p");

    divTituloFunc.className = "titulo-2 funcionarios";
    titulo.innerHTML = "Cadastre seus funcionários";
    subtitulo.innerHTML =
      "Por favor, insira os dados do usuario que você deseja cadastrar";

    containerGlobal.appendChild(divisoria);
    containerGlobal.appendChild(divTituloFunc);
    divTituloFunc.appendChild(titulo);
    divTituloFunc.appendChild(subtitulo);

    // -------------------------------------------------------

    // -------------- CONTAINER CADASTRO FUNC ----------------

    var containerPai = document.createElement("div");
    var containerFilho = document.createElement("div");
    var containerFilho2 = document.createElement("div");
    containerPai.className = "container-pai";
    containerFilho.className = "container-filho";
    containerFilho2.className = "container-filho-2"

    containerGlobal.appendChild(containerPai);
    containerPai.appendChild(containerFilho);
    containerPai.appendChild(containerFilho2);

    for (var i = 0; i < 3; i++) {

      var divContainer = document.createElement("div");
      var tituloContainer = document.createElement("p");
      var inputContainer = document.createElement("input");

      divContainer.className = "estilo-box";
      inputContainer.className = "input-empresa"

      if (i == 0) {
        tituloContainer.innerHTML = `Username*`;
        inputContainer.id = "inputUsuario";
        inputContainer.placeholder = "Ex: caique2022";
        inputContainer.setAttribute("onblur", "validarUsuario()");
        inputContainer.setAttribute("required", "required");
      } else if(i == 1) {
        tituloContainer.innerHTML = "Senha*";
        inputContainer.id = "inputSenha";
        inputContainer.placeholder = "Ex: Senha@123";
        inputContainer.setAttribute("onblur", "validarSenha()");
        inputContainer.type = "password";
        inputContainer.setAttribute("required", "required");
      } else if(i == 2) {
        tituloContainer.innerHTML = "Nome Completo";
        inputContainer.id = "inputNome";
        inputContainer.placeholder = "Ex: Caique Gomes da Silva";
        inputContainer.setAttribute("onblur", "validarNome()");
        inputContainer.setAttribute("required", "required");
      }

      containerFilho.appendChild(divContainer);
      divContainer.appendChild(tituloContainer);
      divContainer.appendChild(inputContainer);
    }

    for(var a = 0; a < 3; a++) {
        var divContainer2 = document.createElement("div");
        var tituloContainer2 = document.createElement("p");
        var inputContainer2 = document.createElement("input");

        divContainer2.className = "estilo-box";
      inputContainer2.className = "input-empresa";

      if (a == 0) {
        tituloContainer2.innerHTML = `E-mail*`;
        inputContainer2.id = "inputEmail";
        inputContainer2.placeholder = "Ex: caique.gsilva@sptech.school";
        inputContainer2.setAttribute("onblur", "validarEmail()");
        inputContainer2.setAttribute("required", "required");
        divContainer2.appendChild(tituloContainer2);
        divContainer2.appendChild(inputContainer2);
      } else if(a == 1) {
        tituloContainer2.innerHTML = "Telefone";
        inputContainer2.id = "inputContato";
        inputContainer2.placeholder = "Ex: 11966193319";
        inputContainer2.setAttribute("onkeyup", "validarContato()");
        inputContainer2.type = "number";
        divContainer2.appendChild(tituloContainer2);
        divContainer2.appendChild(inputContainer2);
      } else if(a == 2) {
        divContainer2.innerHTML += `<p>Função</p>
        <select class="combo-funcao" id="inputFuncao">
          <option value="Administrador">Administrador</option>
          <option value="Usuario">Usuário</option>
        </select>`
      }
    
      containerFilho2.appendChild(divContainer2);
      
      
    }

    var buttonCadastro = document.createElement('button');
    var divisoria2 = document.createElement("hr");
    buttonCadastro.className = "botao-registro";
    buttonCadastro.setAttribute("Onclick", "cadastrarFuncionario()");
    buttonCadastro.innerHTML = "CADASTRO";
    containerGlobal.appendChild(buttonCadastro);
    containerGlobal.appendChild(divisoria2)

    var divTabelaFuncionario = document.createElement("div");
    var tituloTabelaFunc = document.createElement("h3");
    divTabelaFuncionario.className ="tabela-funcionarios"
    divTabelaFuncionario.id = "tabela_funcionarios"
    tituloTabelaFunc.innerHTML = "FUNCIONÁRIOS";

    divTabelaFuncionario.appendChild(tituloTabelaFunc);
    containerGlobal.appendChild(divTabelaFuncionario);
  }
}
