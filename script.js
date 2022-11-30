const inputFile = document.querySelector('input[type="file"]');
const inputEstilo = document.querySelector('#inputEstilo');
const fileName = document.querySelector('#fileName');
const enviado = document.querySelector('#enviado');

function enviar() {
  inputFile.click();
}

inputFile.addEventListener('change', nameF);

function nameF(e) {
  if(e.target.files.length > 0) {
    let filesName = [];
    for(let i = 0; i < inputFile.files.length; i++) {
      filesName.push(inputFile.files[i].name);
    }
    fileName.textContent = `${filesName.join(' <><> ')}`;
    enviado.textContent = 'Arquivo enviado';
    inputEstilo.classList.add('bg-green');
  }
}