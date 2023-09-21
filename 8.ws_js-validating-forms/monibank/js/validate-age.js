export default function isOfLegalAge(field){
    const birthDate = new Date(field.value);

    console.log(validateAge(birthDate));
}

function validateAge(date){
    const actualDate = new Date();
    const legalAgeDate = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return actualDate >= legalAgeDate;
}