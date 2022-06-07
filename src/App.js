import { useState } from 'react';
import './App.scss';

import Login from './components/Login/Login';
import RestorePassword from './components/Login/RestorePassword/RestorePassword';


import logo from "./assets/images/logo.png";

// проверка данных на корректность (вызывает при sumbit формы)


function App() {

    const [activeRestorePassword, setActiveRestorePassword] = useState(false)
    const [restorePhone, setRestorePhone] = useState("")
    const [password, setPasword] = useState("123456")
    const [validateState, setValidateState] = useState(null)

    const dataValidate = (values, setErrors) => {
        console.log(values);
        if (values.phone === "+71111111111" && (values.password === password)) {
            setValidateState(true)
        } else {
            setValidateState(false)
            setErrors({authFail: "Логин или пароль неверный"})
        }
    }

    return (
        <div className="main-login">
            <div className="main-login__container">
                <div className="main-form-login">
                    <div className="wrapper">
                        <div className="main-form-login__logo">
                            <img src={logo} alt="logo"/>
                        </div>
                        
                        {validateState && "Авторизация успешна"}
                        
                        {!activeRestorePassword 
                            ? 
                            <Login 
                                setActiveRestorePassword={setActiveRestorePassword}
                                restorePhone={restorePhone}
                                dataValidate={dataValidate}
                            />  
                            : 
                            <RestorePassword
                                setActiveRestorePassword={setActiveRestorePassword}
                                setRestorePassword={setRestorePhone}
                                setRestorePass={setPasword}
                                password={password}
                            />   
                        }
                                                                
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
