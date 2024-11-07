// Máscara para o CEP (xx.xxx-xxx)
document.getElementById('cep').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1.$2-$3');
    e.target.value = value;
  });
  
  // Máscara para o CPF (xxx.xxx.xxx-xx)
  document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    e.target.value = value;
  });
  
  // Máscara para o Telefone (xx) x xxxx-xxxx)
  document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4');
    e.target.value = value;
  });
  
  // Máscara para o CNPJ (xx.xxx.xxx/0001-xx)
  document.getElementById('cnpj').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/0001-$4');
    e.target.value = value;
  });
  
  // Máscara para o Código (xx_xx//xxx-xxx.9.xxx)
  document.getElementById('codigo').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})$/, '$1_$2//$3-$4.9.$5');
    e.target.value = value;
  });
  