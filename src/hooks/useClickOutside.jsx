import {useEffect, useRef, useState} from "react";

export default function useClickOutside(initialIsVisible) {
    const [isShow, setIsShow] = useState(initialIsVisible)
    const ref = useRef(null)

    const hadleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', hadleClickOutside, true)
        return () => {
            document.removeEventListener('click', hadleClickOutside,true)
        }
    });

    return {ref, isShow, setIsShow}
}