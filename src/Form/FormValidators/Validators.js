export const requiredValue = (value) => {
    let error;
    if (!value) {
       error =  "Данное поле обязательно"
    }
    return error;
}

export const requiredPhone = (value) => {

    let error;
    if (value.length <= 2) {
       error =  "Данное поле обязательно"
    }
    return error;
}