export const checkValidData = (name,email,password) => {
    const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if (!isNameValid) {
        return {
            isValid: false,
            message: "Please enter a valid name"
        }
    }

    if(!isEmailValid){
        return {
            isValid: false,
            message: "Please enter a valid email"
        }
    }

    if(!isPasswordValid){
        return {
            isValid: false,
            message: "Please enter a valid password"
        }
    }

    return {
        isValid: true,
        message: ""
    }
}