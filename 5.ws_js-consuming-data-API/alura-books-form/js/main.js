async function searchCEP(cep){
    try{
        var consultCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var jsonCEP = await consultCEP.json();
        
        if(jsonCEP.erro){
            throw Error('CEP inválido!');
        }
        console.log(jsonCEP);
        return jsonCEP;
    } catch (e){
        console.log(e);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => searchCEP(cep.value));
