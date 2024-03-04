import {useState} from "react";
import {useValidation} from "./useValidation.js";

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const [errors, valid] = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = () => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        errors,
        valid
    }
}