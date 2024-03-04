import AppRouter from "./components/AppRouter.jsx";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "./main.jsx";
import {check} from "./http/userApi.js";


const App = observer(() => {
    const {user} = useContext(Context)


    useEffect(() => {
        if (localStorage.getItem("token")) {
            check().then((data) => {
                user.setUser(data);
                user.setIsAuth(true);
            })
        }
    }, [])

    return (
        <>
            <AppRouter/>
        </>
    )
})

export default App
