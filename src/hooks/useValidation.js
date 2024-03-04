import {useEffect, useState} from "react";

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState({state: true})
    const [minLengthError, setMinLengthError] = useState({state: false})
    const [maxLengthError, setMaxLengthError] = useState({state: false})
    const [isEmailError, setEmailError] = useState({state: false})
    const [inputValid, setInputValid] = useState(true)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    value ? setEmpty({state: false}) : setEmpty({
                        state: true,
                        message: "Данное поле не может быть пустым"
                    })
                    break;
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError({
                            state: true,
                            message: `Минимальная длина ${validations[validation]} симболов`
                        })
                        : setMinLengthError({state: false})
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError({
                            state: true,
                            message: `Максимальная длина ${validations[validation]} симболов`
                        })
                        : setMaxLengthError({state: false})
                    break;
                case 'isEmail':
                    value.match(
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                    ) ? setEmailError({state: false}) : setEmailError({
                        state: true,
                        message: "Неккоректный почтовый адрес"
                    })
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        if (isEmpty.state || minLengthError.state || maxLengthError.state || isEmailError.state) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, maxLengthError, isEmailError]);

    return [[isEmpty, minLengthError, maxLengthError, isEmailError], inputValid]


}