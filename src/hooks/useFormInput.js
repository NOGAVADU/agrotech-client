import {useState} from "react";

export const useFormInput = (initialValue) => {

    const [value, setValue] = useState(initialValue)
    const [valid, setValid] = useState(false)

    return [value, setValue, valid, setValid]
}