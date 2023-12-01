function scrollToSection(sectionId) {
    var sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      
      sectionElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  function validarFormulario() {
    
    var valorCampo = document.getElementById('campoInput').value;

    
    if (valorCampo.trim() === '') {
      
      document.getElementById('mensagemErro').innerHTML = 'Por favor, preencha este campo.';
      
      
      return false;
    } else {
      
      document.getElementById('mensagemErro').innerHTML = '';
      
      return true;
    }
  }

  function validarFormulario() {
    // Obter os valores dos campos
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Validar o campo de nome
    if (nome.trim() === '') {
      document.getElementById('mensagemErroName').innerHTML = 'Por favor, insira um nome válido.';
      return false;
    } else {
      document.getElementById('mensagemErroName').innerHTML = '';
    }

    // Validar o campo de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('mensagemErroEmail').innerHTML = 'Por favor, insira um e-mail válido.';
      return false;
    } else {
      document.getElementById('mensagemErroEmail').innerHTML = '';
    }

    // Permitir o envio do formulário se todos os campos forem válidos
    return true;
  }
  
 
