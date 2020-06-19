
function consultaCep() {
  $('.barra-progresso').show()
  
  let cep = $('#infCep').val()
  let url = `https://viacep.com.br/ws/${cep}/json/`
  
  $.ajax({
    url: url,
    type: 'GET',
    success: function(response) {
      $('#titleCep').html(`CEP - ${response.cep}`)
      $('#logradouro').html(response.logradouro)
      $('#bairro').html(response.bairro)
      $('#localidade').html(response.localidade)
      $('#uf').html(response.uf)
      $('.cep').show()
      $('.barra-progresso').hide()

    }
  })
}

$(function(){
  $('.cep').hide()
  $('.barra-progresso').hide()
})


