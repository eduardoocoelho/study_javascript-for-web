var consultCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(answer => answer.json())
    .then(r => {
        if(r.erro){
            throw Error('Esse CEP não existe!')
        }
        else{
            console.log(r)
        }
    })
    .catch(error => console.log(error))
    .finally(msg => console.log('Processamento concluído!'));

console.log(consultCEP);

