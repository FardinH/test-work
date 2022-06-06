import { useState } from 'react';
import './App.scss';

import Login from './components/Login/Login';
import RestorePassword from './components/Login/RestorePassword/RestorePassword';


import logo from "./assets/images/logo.png";

// проверка данных на корректность (вызывает при sumbit формы)
const dataValidate = (values, setValidateState) => {
    console.log(values);
    if (values.phone === "+71111111111" && values.password === "123456") {
        setValidateState(true)
    } else {
        setValidateState(false)
    }
}

function App() {

    const [activeRestorePassword, setActiveRestorePassword] = useState(false)
    const [restorePhone, setRestorePhone] = useState("")
    const [validateState, setValidateState] = useState(null)

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
                                setValidateState={setValidateState}
                            />  
                            : 
                            <RestorePassword
                                setActiveRestorePassword={setActiveRestorePassword}
                                setRestorePassword={setRestorePhone}
                            />   
                        }
                                                                
                    
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
