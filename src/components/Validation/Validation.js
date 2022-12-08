export default function Validation(useData) {
    let errors= {};
    const regexEmail =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{6,10}$/;
    
    if(!errors.username || (errors.username.length > 35) || (!regexEmail.test(useData.username))) {
        if(!useData.username) errors.username='Por favor, complete este campo';
        if(useData.username.length > 35) errors.username='Nombre de usuario no puede superar 35 caracteres'
        if(!regexEmail.test(useData.username)) errors.username='Nombre de usuario debe ser un email' 
    }
    if(!regexPassword.test(useData.password) || useData.password.length > 10 || useData.password.length < 6){
        
        errors.password= 'Password debe tener entre 6 a 10 caracteres, al menos una letra y un número'
    }
    return errors
}