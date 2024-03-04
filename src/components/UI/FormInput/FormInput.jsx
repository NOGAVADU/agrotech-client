import React from 'react';
import cl from './FormInput.module.css'
import {useInput} from "../../../hooks/useInput.js";

const FormInput = ({label, placeholder, type, value}) => {
    return (
        <label className={cl.label}>
            {label}
            <input value={value.value}
                   type={type}
                   onChange={e => {
                       value.onChange(e)
                   }}
                   onBlur={e => value.onBlur(e)}
                   placeholder={placeholder}
                   className={cl.input}
            />
            <span className={cl.error}>
                        {(value.isDirty &&
                            (value.errors.find(validation => validation.state) ?
                                value.errors.find(validation => validation.state).message : ''))}
                    </span>
        </label>
    );
};

export default FormInput;