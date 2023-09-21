export default function isOfLegalAge(field){
    const birthDate = new Date(field.value);

    if(!validateAge(birthDate)){
        field.setCustomValidity('O usuário não é maior de idade');
    }
}

function validateAge(date){
    const actualDate = new Date();
    const legalAgeDate = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return actualDate >= legalAgeDate;
}