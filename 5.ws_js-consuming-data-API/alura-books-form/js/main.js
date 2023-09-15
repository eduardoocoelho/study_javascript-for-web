async function searchCEP(){
    try{
        var consultCEP = await fetch('https://viacep.com.br/ws/01001000/json/');
        var jsonCEP = await consultCEP.json();
        
        if(jsonCEP.erro){
            throw Error('CEP inválido!');
        }
        else{
            console.log(jsonCEP);
        }
    } catch (e){
        console.log(e);
    }
}

searchCEP();
