async function searchCEP(cep){
    try{
        var consultCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var jsonCEP = await consultCEP.json();
        
        if(jsonCEP.erro){
            throw Error('CEP inválido!');
        }

        var city = document.getElementById('cidade');
        var street = document.getElementById('endereco');
        var state = document.getElementById('estado');
        var neighborhood = document.getElementById('bairro');

        city.value = jsonCEP.localidade;
        street.value = jsonCEP.logradouro;
        state.value = jsonCEP.uf;
        neighborhood.value = jsonCEP.bairro;

        console.log(jsonCEP);
        return jsonCEP;
    } catch (e){
        alert('CEP inválido! Tente novamente.')
        console.log(e);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => searchCEP(cep.value));
