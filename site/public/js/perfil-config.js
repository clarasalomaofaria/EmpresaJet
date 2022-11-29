var validar_user = false;
function validarUsuario() {
  var usuario = inputUsuario.value;
  /* Verifica se o usuario tem mais de 6 caractéres */
  if (usuario.length < 6) {
    inputUsuario.classList.add("red");
    inputUsuario.classList.remove("green");
    validar_user = false;
  } else {
    inputUsuario.classList.remove("red");
    inputUsuario.classList.add("green");
    validar_user = true;
  }
}
//Validando Senha do Usuario
var validar_senha = false;
function validarSenha() {
  var senha = inputSenha.value;
  var fortificador =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])([0-9a-zA-Z!$*&@#]){8,}$/;
  /*
    
  (?=.*\d)         // deve conter ao menos um dígito
  (?=.*[a-z])      // deve conter ao menos uma letra minúscula
  (?=.*[A-Z])      // deve conter ao menos uma letra maiúscula
  (?=.*[$*&@#!])    // deve conter ao menos um caractere especial

  ([0-9a-zA-Z$*&@#]): é uma classe de caracteres contendo números, 
  letras e os caracteres especiais que você está considerando. 
  Eles estão dentro de parênteses para formar um grupo de captura

*/
  /* Verifica se a senha está com as requisições acima */
  if (fortificador.test(senha)) {
    inputSenha.classList.remove("red");
    inputSenha.classList.add("green");
    validar_senha = true;
  } else {
    inputSenha.classList.add("red");
    inputSenha.classList.remove("green");
    validar_senha = false;
  }
}

//Validando Contato do Usuario
var validar_contato = false;
function validarContato() {
  var contato = inputContato.value;
  if (contato.length <= 7 || contato.length >= 12){
    // Valida números telefones celulares para contato
    inputContato.classList.add("red");
    inputContato.classList.remove("green");
    validar_contato = false;
  } else {
    inputContato.classList.remove("red");
    inputContato.classList.add("green");
    validar_contato = true;
  }
}


function validar_atualizacao_func_user() {
  if (validar_user) {
    confirmar_user();
  } else {
    alert("Usuário inválido. Deve conter mais de 6 letras.");
  }
}
function validar_atualizacao_func_senha() {
  if (validar_senha) {
    confirmar_senha();
  } else {
    alert("Senha inválida. Deve conter no mínimo 1 letra maiúscula, 1 caracter especial e 1 número.");
  }
}
function validar_atualizacao_func_contato() {
  if (validar_contato) {
    confirmar_telefone();
  } else {
    alert("Telefone inválido. Deve conter de 8 a 11 dígitos");
  }
}
function alterar_user() {
    btn_edit_user.remove();

    div_user.innerHTML += `
    <div id="div_change_user" class="div_input">
        <label for="change_user"></label>
        <input class="input_user_pass_telefone" id="inputUsuario" onkeyup="validarUsuario()" type="text">
        <button onclick="validar_atualizacao_func_user()" class="btn_user_pass_telefone">Confirmar</button>
        <button onclick="cancelar_user()" class="btn_user_pass_telefone_remove">Cancelar</button>
    </div>
    `;
  }
  function cancelar_user() {
    div_change_user.remove();
    
    div_user.innerHTML += `
    <button onclick="alterar_user()" id="btn_edit_user" class="btn_edit">
        Editar
    </button>
    `;
  }

   //ATRIBUIR FETCH AO EVENTO PARA ALTERAR DADOS NO BANCO COM METODO PUT
  function confirmar_user() {
    fetch(`/usuarios/confirmar_user/${sessionStorage.getItem("USER_USUARIO")}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: inputUsuario.value,
        idPerfil: sessionStorage.ID_PERFIL
      })
    }).then(function (resposta) {
      
      if (resposta.ok) {
        window.alert("Username atualizado com sucesso");
        
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    })
    
    span_user.innerHTML = inputUsuario.value;
    div_change_user.remove();

    div_user.innerHTML += `
    <button onclick="alterar_user()" id="btn_edit_user" class="btn_edit">
        Editar
    </button>
    `;
  }


  function alterar_senha() {
    btn_edit_pass.remove();

    div_content_pass.innerHTML += `
    <div id="div_change_pass" class="div_input">
        <label for="change_pass"></label>
        <input class="input_user_pass_telefone" id="inputSenha" onkeyup="validarSenha()" type="text">
        <button onclick="validar_atualizacao_func_senha()" class="btn_user_pass_telefone">Confirmar</button>
        <button onclick="cancelar_senha()" class="btn_user_pass_telefone_remove">Cancelar</button>
    </div>
    `;
  }
  function cancelar_senha() {
    div_change_pass.remove();

    div_content_pass.innerHTML += `
    <button onclick="alterar_senha()" id="btn_edit_pass" class="btn_edit">
        Editar
    </button>
    `;
  }
  //ATRIBUIR FETCH AO EVENTO PARA ALTERAR DADOS NO BANCO COM METODO PUT
  function confirmar_senha() {
    fetch(`/usuarios/confirmar_senha/${sessionStorage.getItem("USER_USUARIO")}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        senha: inputSenha.value,
        idPerfil: sessionStorage.ID_PERFIL
      })
    }).then(function (resposta) {
      
      if (resposta.ok) {
        window.alert("Username atualizado com sucesso");
        
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    })

    span_senha.innerHTML = inputSenha.value;

    div_change_pass.remove();

    div_content_pass.innerHTML += `
    <button onclick="alterar_senha()" id="btn_edit_pass" class="btn_edit">
        Editar
    </button>
    `;
  }

  function alterar_telefone() {
    btn_edit_telefone.remove();

    div_content_telefone.innerHTML += `
    <div id="div_change_telefone" class="div_input">
        <label for="change_telefone"></label>
        <input class="input_user_pass_telefone" id="inputContato" onkeyup="validarContato()" type="number">
        <button onclick="validar_atualizacao_func_contato()" class="btn_user_pass_telefone">Confirmar</button>
        <button onclick="cancelar_telefone()" class="btn_user_pass_telefone_remove">Cancelar</button>
    </div>
    `;
  }
  function cancelar_telefone() {
    div_change_telefone.remove();

    div_content_telefone.innerHTML += `
    <button onclick="alterar_telefone()" id="btn_edit_telefone" class="btn_edit">
        Editar
    </button>
    `;
  }

   //ATRIBUIR FETCH AO EVENTO PARA ALTERAR DADOS NO BANCO COM METODO PUT
  function confirmar_telefone() {
    fetch(`/usuarios/confirmar_telefone/${sessionStorage.getItem("USER_USUARIO")}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        telefone: Number(inputContato.value),
        idPerfil: sessionStorage.ID_PERFIL
      })
    }).then(function (resposta) {
      
      if (resposta.ok) {
        window.alert("Telefone atualizado com sucesso");
        
      } else if (resposta.status == 404) {
        window.alert("Deu 404!");
      } else {
        throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
      }
    }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    })
    span_telefone.innerHTML = Number(inputContato.value);

    div_change_telefone.remove();

    div_content_telefone.innerHTML += `
    <button onclick="alterar_telefone()" id="btn_edit_telefone" class="btn_edit">
        Editar
    </button>
    `;
  }

  function logout() {
    sessionStorage.clear();
    link_login();
  }

  //link para página do login, quando fazer o logout

  function link_login() {
    window.location.href = "login.html";
  }

  function link_index() {
    window.location.href = "index.html";
  }

// BOTAO SELECIONAR IMAGEM //

var botao = document.getElementById('btn_foto_id');
var selecionarFoto = document.getElementById('foto_input')
var imagem = document.getElementById('exibir_foto')

botao.addEventListener('click', () => {
  selecionarFoto.click();
})

selecionarFoto.addEventListener('change', (event) => {
  
  if(selecionarFoto.files.length <= 0) {
    return;
  }

    var ler = new FileReader();

    ler.onload = () => {
      imagem.src = ler.result;
    }

    ler.readAsDataURL(selecionarFoto.files[0]);

});
